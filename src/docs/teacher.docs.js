/**
 * @swagger
 * tags:
 *   name: Teacher
 *   description: Teacher dashboard endpoints (Read Only - Full Access View)
 */

/* ============================================
   DASHBOARD & PROFILE & ACTIVITY LOG
   ============================================ */

/**
 * @swagger
 * /api/teacher/profile:
 *   get:
 *     summary: Get teacher profile
 *     description: Get current teacher profile information
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Profile retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/dashboard:
 *   get:
 *     summary: Get teacher dashboard
 *     description: Get comprehensive dashboard with all statistics
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Dashboard data retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/activity-log:
 *   get:
 *     summary: Get activity log
 *     description: Get activity logs for assistants only
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: entity_type
 *         schema: { type: string }
 *         description: Filter by entity type
 *       - in: query
 *         name: date
 *         schema: { type: string, format: date }
 *         description: Filter by date
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *         description: Page number
 *     responses:
 *       200:
 *         description: Activity logs retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/profile-image:
 *   put:
 *     summary: Update teacher profile image
 *     description: Upload new profile image
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *                 description: Profile image file (jpg, png, webp)
 *     responses:
 *       200:
 *         description: Profile image updated successfully
 *   delete:
 *     summary: Delete teacher profile image
 *     description: Remove profile image
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Profile image deleted successfully
 *   get:
 *     summary: Get teacher profile image
 *     description: Get current profile image
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Profile image retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/password:
 *   put:
 *     summary: Update teacher password
 *     description: Change current teacher password
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [oldPassword, password, confirmPassword]
 *             properties:
 *               oldPassword:
 *                 type: string
 *                 description: Current password
 *               password:
 *                 type: string
 *                 description: New password
 *               confirmPassword:
 *                 type: string
 *                 description: Confirm new password
 *     responses:
 *       200:
 *         description: Password updated successfully
 */

/* ============================================
   GRADES MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/grades:
 *   get:
 *     summary: Get all grades
 *     description: Get list of all grades
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Grades list retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/grades/groups-count:
 *   get:
 *     summary: Get grades with groups count
 *     description: Get all grades with number of groups
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Grades with groups count retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/grades/students-count:
 *   get:
 *     summary: Get grades with students count
 *     description: Get all grades with number of students
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Grades with students count retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/grades/stats:
 *   get:
 *     summary: Get all grades stats
 *     description: Get statistics for all grades
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: All grades stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/grades/{id}:
 *   get:
 *     summary: Get grade by ID
 *     description: Get specific grade details
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *         description: Grade ID
 *     responses:
 *       200:
 *         description: Grade data retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/grades/{id}/stats:
 *   get:
 *     summary: Get grade stats
 *     description: Get statistics for specific grade
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Grade stats retrieved successfully
 */

/* ============================================
   GROUPS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/groups:
 *   get:
 *     summary: Get all groups
 *     description: Get list of all groups
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Groups list retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/groups/with-grade-name:
 *   get:
 *     summary: Get groups with grade name
 *     description: Get all groups with their grade names
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Groups with grade name retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/groups/students-count:
 *   get:
 *     summary: Get groups with students count
 *     description: Get all groups with number of students
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Groups with students count retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/groups/stats:
 *   get:
 *     summary: Get all groups stats
 *     description: Get statistics for all groups
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: All groups stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/groups/{id}/full-stats:
 *   get:
 *     summary: Get group full stats
 *     description: Get comprehensive statistics for a group
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *         description: Group ID
 *     responses:
 *       200:
 *         description: Group full stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/groups/grade/{gradeId}:
 *   get:
 *     summary: Get groups by grade
 *     description: Get all groups in specific grade
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Groups list retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/groups/{id}:
 *   get:
 *     summary: Get group by ID
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Group data retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/groups/{id}/stats:
 *   get:
 *     summary: Get group stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Group stats retrieved successfully
 */

/* ============================================
   STUDENTS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/students:
 *   get:
 *     summary: Get all students
 *     description: Get students list with filters
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema: { type: string }
 *         description: Search by name, barcode or phone
 *       - in: query
 *         name: grade_id
 *         schema: { type: integer }
 *         description: Filter by grade
 *       - in: query
 *         name: group_id
 *         schema: { type: integer }
 *         description: Filter by group
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *     responses:
 *       200:
 *         description: Students list retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/search/barcode:
 *   get:
 *     summary: Search student by barcode
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: barcode
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Student found successfully
 */

/**
 * @swagger
 * /api/teacher/students/search/phone:
 *   get:
 *     summary: Search student by phone
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: phone
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Student found successfully
 */

/**
 * @swagger
 * /api/teacher/students/grade/{gradeId}:
 *   get:
 *     summary: Get students by grade
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Students list retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/group/{groupId}:
 *   get:
 *     summary: Get students by group
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Students list retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}/profile:
 *   get:
 *     summary: Get student full profile
 *     description: Get comprehensive student profile
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student profile retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}/stats:
 *   get:
 *     summary: Get student quick stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}/attendance:
 *   get:
 *     summary: Get student attendance history
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Attendance history retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}/attendance/monthly:
 *   get:
 *     summary: Get student monthly attendance stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Monthly stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}/payments:
 *   get:
 *     summary: Get student payment history
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Payment history retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}/payments/balance:
 *   get:
 *     summary: Get student remaining balance
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Balance retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}/exams/paper:
 *   get:
 *     summary: Get student paper exams
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Paper exams retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}/exams/results:
 *   get:
 *     summary: Get student exam results
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam results retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}/exams/online/history:
 *   get:
 *     summary: Get student online exams history
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Online exams retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}/assignments:
 *   get:
 *     summary: Get student assignments
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Assignments retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}/submissions:
 *   get:
 *     summary: Get student submissions
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Submissions retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/students/{studentId}:
 *   get:
 *     summary: Get student by ID
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student data retrieved successfully
 */

/* ============================================
   ATTENDANCE MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/attendance/dashboard:
 *   get:
 *     summary: Get attendance dashboard
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Dashboard retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/attendance/overall-stats:
 *   get:
 *     summary: Get overall attendance stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/attendance/consecutive-absences:
 *   get:
 *     summary: Get students with 3 consecutive absences
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Students list retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/attendance/grade/{gradeId}/stats:
 *   get:
 *     summary: Get grade attendance stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Grade stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/attendance/group/{groupId}/date/{date}:
 *   get:
 *     summary: Get attendance by group and date
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *       - in: path
 *         name: date
 *         required: true
 *         schema: { type: string, format: date }
 *     responses:
 *       200:
 *         description: Attendance retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/attendance/group/{groupId}/month/{month}:
 *   get:
 *     summary: Get attendance by group and month
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *       - in: path
 *         name: month
 *         required: true
 *         schema: { type: string, example: "2026-08" }
 *     responses:
 *       200:
 *         description: Attendance retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/attendance/summary/group/{groupId}/date/{date}:
 *   get:
 *     summary: Get attendance summary
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *       - in: path
 *         name: date
 *         required: true
 *         schema: { type: string, format: date }
 *     responses:
 *       200:
 *         description: Summary retrieved successfully
 */

/* ============================================
   PAYMENTS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/payments:
 *   get:
 *     summary: Get all payments
 *     description: Get payments with filters
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema: { type: string }
 *       - in: query
 *         name: grade_id
 *         schema: { type: integer }
 *       - in: query
 *         name: group_id
 *         schema: { type: integer }
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *     responses:
 *       200:
 *         description: Payments retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/payments/collections:
 *   get:
 *     summary: Get monthly collections
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Collections retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/payments/unpaid:
 *   get:
 *     summary: Get unpaid students
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Unpaid students retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/payments/overall:
 *   get:
 *     summary: Get overall payment stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/payments/students-status:
 *   get:
 *     summary: Get all students payment status
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Students status retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/payments/grade/{gradeId}/stats:
 *   get:
 *     summary: Get grade payment stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Grade stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/payments/group/{groupId}/stats:
 *   get:
 *     summary: Get group payment stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Group stats retrieved successfully
 */

/* ============================================
   SUBSCRIPTIONS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/subscriptions/overall:
 *   get:
 *     summary: Get overall subscription stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/subscriptions/without-current:
 *   get:
 *     summary: Get students without subscription
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Students retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/subscriptions/month/{month}:
 *   get:
 *     summary: Get subscriptions by month
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: month
 *         required: true
 *         schema: { type: string, example: "2026-08" }
 *     responses:
 *       200:
 *         description: Subscriptions retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/subscriptions/grade/{gradeId}/stats:
 *   get:
 *     summary: Get grade subscription stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Grade stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/subscriptions/group/{groupId}/stats:
 *   get:
 *     summary: Get group subscription stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Group stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/subscriptions/student/{studentId}:
 *   get:
 *     summary: Get student subscriptions
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student subscriptions retrieved successfully
 */

/* ============================================
   EXAMS MANAGEMENT (Paper)
   ============================================ */

/**
 * @swagger
 * /api/teacher/exams:
 *   get:
 *     summary: Get all paper exams
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Exams retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/exams/grade/{gradeId}:
 *   get:
 *     summary: Get exams by grade
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exams retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/exams/group/{groupId}:
 *   get:
 *     summary: Get exams by group
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exams retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/exams/{id}:
 *   get:
 *     summary: Get exam by ID
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/exams/{id}/stats:
 *   get:
 *     summary: Get exam stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam stats retrieved successfully
 */

/* ============================================
   EXAM RESULTS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/exam-results/grade/{gradeId}/stats:
 *   get:
 *     summary: Get grade exam results stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Grade stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/exam-results/group/{groupId}/stats:
 *   get:
 *     summary: Get group exam results stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Group stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/exam-results/exam/{examId}:
 *   get:
 *     summary: Get exam results
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam results retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/exam-results/exam/{examId}/stats:
 *   get:
 *     summary: Get exam result stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Result stats retrieved successfully
 */

/* ============================================
   ONLINE EXAMS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/online-exams:
 *   get:
 *     summary: Get all online exams
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Online exams retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/online-exams/available:
 *   get:
 *     summary: Get available online exams
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Available exams retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/online-exams/expired:
 *   get:
 *     summary: Get expired online exams
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Expired exams retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/online-exams/grade/{gradeId}:
 *   get:
 *     summary: Get online exams by grade
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exams retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/online-exams/group/{groupId}:
 *   get:
 *     summary: Get online exams by group
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exams retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/online-exams/stats/grade/{gradeId}:
 *   get:
 *     summary: Get grade online exam stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Grade stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/online-exams/stats/{examId}:
 *   get:
 *     summary: Get online exam stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/online-exams/{examId}:
 *   get:
 *     summary: Get online exam by ID
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam retrieved successfully
 */

/* ============================================
   QUESTIONS & OPTIONS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/questions/exam/{examId}:
 *   get:
 *     summary: Get questions by exam
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Questions retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/questions/{questionId}:
 *   get:
 *     summary: Get question by ID
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Question retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/options/question/{questionId}:
 *   get:
 *     summary: Get options by question
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Options retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/options/{optionId}:
 *   get:
 *     summary: Get option by ID
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: optionId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Option retrieved successfully
 */

/* ============================================
   STUDENT EXAMS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/student-exams/exam/{examId}:
 *   get:
 *     summary: Get student exams by exam
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Student exams retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/student-exams/exam/{examId}/stats:
 *   get:
 *     summary: Get exam attempt stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: examId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Exam stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/student-exams/grade/{gradeId}/stats:
 *   get:
 *     summary: Get grade exam attempts stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Grade stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/student-exams/group/{groupId}/stats:
 *   get:
 *     summary: Get group exam attempts stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Group stats retrieved successfully
 */

/* ============================================
   STUDENT ANSWERS STATISTICS
   ============================================ */

/**
 * @swagger
 * /api/teacher/student-answers/question/{questionId}/stats:
 *   get:
 *     summary: Get question answer stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Question stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/student-answers/question/{questionId}/options:
 *   get:
 *     summary: Get most selected options
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Options retrieved successfully
 */

/* ============================================
   ASSIGNMENTS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/assignments:
 *   get:
 *     summary: Get all assignments
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Assignments retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/assignments/grade/{gradeId}:
 *   get:
 *     summary: Get assignments by grade
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Assignments retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/assignments/group/{groupId}:
 *   get:
 *     summary: Get assignments by group
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Assignments retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/assignments/{assignmentId}:
 *   get:
 *     summary: Get assignment by ID
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: assignmentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Assignment retrieved successfully
 */

/* ============================================
   ASSIGNMENT SUBMISSIONS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/assignment-submissions/stats/grade/{gradeId}:
 *   get:
 *     summary: Get grade assignment submissions stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/assignment-submissions/stats/group/{groupId}:
 *   get:
 *     summary: Get group assignment submissions stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Stats retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/assignment-submissions/assignment/{assignmentId}:
 *   get:
 *     summary: Get submissions by assignment
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: assignmentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Submissions retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/assignment-submissions/assignment/{assignmentId}/student/{studentId}:
 *   get:
 *     summary: Get student submission
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: assignmentId
 *         required: true
 *         schema: { type: integer }
 *       - in: path
 *         name: studentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Submission retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/assignment-submissions/stats/assignment/{assignmentId}:
 *   get:
 *     summary: Get assignment submission stats
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: assignmentId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Stats retrieved successfully
 */

/* ============================================
   VIDEOS & PLAYLISTS MANAGEMENT
   ============================================ */

/**
 * @swagger
 * /api/teacher/videos:
 *   get:
 *     summary: Get all videos
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Videos retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/videos/grade/{gradeId}:
 *   get:
 *     summary: Get videos by grade
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Videos retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/videos/{videoId}:
 *   get:
 *     summary: Get video by ID
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Video retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/playlists:
 *   get:
 *     summary: Get all playlists
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     responses:
 *       200:
 *         description: Playlists retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/playlists/grade/{gradeId}:
 *   get:
 *     summary: Get playlists by grade
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: gradeId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Playlists retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/playlists/{playlistId}:
 *   get:
 *     summary: Get playlist by ID
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Playlist retrieved successfully
 */

/**
 * @swagger
 * /api/teacher/playlist-videos/playlist/{playlistId}:
 *   get:
 *     summary: Get playlist videos
 *     tags: [Teacher]
 *     security: [{ ApiAuth: [], ClientToken: [] }]
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Videos retrieved successfully
 */
