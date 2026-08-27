const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

// Routes
const authRouts = require("./modules/auth/auth.routes");
const studentModuleRoutes = require("./modules/student/student.routes");
const parentRoutes = require("./modules/parent/parent.routes");
const assistantRoutes = require("./modules/assistant/assistant.routes");
const teacherRoutes = require("./modules/teacher/teacher.routes");
const superAdminRoutes = require("./modules/super-admin/super-admin.routes");

// Middleware
const {
  errorHandler,
  notFoundHandler,
} = require("./middlewares/error.middleware");
const apiMiddelware = require("./middlewares/apiAuth.middleware");
const clientAuth = require("./middlewares/clientAuth.middleware");
const assistantAuth = require("./middlewares/assistantAuth.middleware");
const teacherAuth = require("./middlewares/teacherAuth.middleware");
const superAdminAuth = require("./middlewares/superAdminAuth.middleware");

// Database
const { query } = require("./config/database");
const env = require("./config/env");

// Swagger
const swaggerSpec = require("./docs/swagger");

const app = express();

// ============================================
// SECURITY MIDDLEWARE
// ============================================

// Helmet - HTTP security headers
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  }),
);

// CORS - restrict origins
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (env.CORS_ORIGINS.includes("*") || env.CORS_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "x-client-key",
      "x-super-admin-key",
    ],
  }),
);

// Compression
app.use(compression());

// Body parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Logging
if (env.NODE_ENV === "production") {
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}

// ============================================
// RATE LIMITING
// ============================================

// General rate limit
const generalLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX,
  message: {
    success: false,
    message: "Too many requests, try again later",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Auth rate limit
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: env.RATE_LIMIT_AUTH_MAX,
  message: {
    success: false,
    message: "Too many login attempts, try after 15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Upload rate limit
const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 50,
  message: {
    success: false,
    message: "Too many uploads, try later",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Upload rate limit middleware
const uploadLimiterMiddleware = (req, res, next) => {
  if (req.path.includes("bulk-upload")) {
    return uploadLimiter(req, res, next);
  }
  next();
};

// Apply rate limits
app.use("/api", generalLimiter);
app.use("/api/auth", authLimiter);
app.use("/api", uploadLimiterMiddleware);

// ============================================
// ROOT ROUTES
// ============================================

// Root
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome To Jupiter Learn API!",
    version: "1.0.0",
    environment: env.NODE_ENV,
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({
    success: true,
    message: "Server is running",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Swagger JSON spec
app.get("/api-docs-json", (req, res) => {
  res.json(swaggerSpec);
});

// Swagger UI with CDN
app.get("/api-docs", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ar">
    <head>
      <meta charset="UTF-8">
      <title>JupiterLearn API Docs</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.17.14/swagger-ui.css">
    </head>
    <body>
      <div id="swagger-ui"></div>
      <script src="https://cdn.jsdelivr.net/npm/swagger-ui-dist@5.17.14/swagger-ui-bundle.js"></script>
      <script>
        window.onload = function() {
          SwaggerUIBundle({
            url: "/api-docs-json",
            dom_id: "#swagger-ui",
            presets: [
              SwaggerUIBundle.presets.apis,
              SwaggerUIBundle.SwaggerUIStandalonePreset
            ],
            layout: "BaseLayout",
          });
        };
      </script>
    </body>
    </html>
  `);
});

// ============================================
// PLATFORM STATUS CHECK
// ============================================

const checkPlatformStatus = async (req, res, next) => {
  try {
    if (
      req.path.includes("/super-admin") ||
      req.path.includes("/auth") ||
      req.path.includes("/health")
    ) {
      return next();
    }

    const result = await query(
      "SELECT platform_status FROM settings WHERE id = 1",
    );
    const platformStatus = result.rows[0]?.platform_status;

    if (platformStatus === "paused") {
      return res.status(403).json({
        success: false,
        message: "Platform is temporarily closed for maintenance",
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};

app.use(checkPlatformStatus);

// ============================================
// API ROUTES
// ============================================

app.use("/api/auth", apiMiddelware, authRouts);
app.use("/api/student", apiMiddelware, clientAuth, studentModuleRoutes);
app.use("/api/parent", apiMiddelware, parentRoutes);
app.use(
  "/api/assistant",
  apiMiddelware,
  clientAuth,
  assistantAuth,
  assistantRoutes,
);
app.use("/api/teacher", apiMiddelware, clientAuth, teacherAuth, teacherRoutes);
app.use(
  "/api/super-admin",
  apiMiddelware,
  clientAuth,
  superAdminAuth,
  superAdminRoutes,
);

// ============================================
// ERROR HANDLING
// ============================================

// 404 Handler
app.use(notFoundHandler);

// Error Handler
app.use(errorHandler);

module.exports = app;
