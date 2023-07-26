const express = require("express");
const router = express.Router();

// const usersRoutes = require('./../controllers/userinformation')
// const usersRoutes = require('../controllers/userinformation')

// router.get('/usersall', usersRoutes.usersAll)
// router.post('/userscreate', usersRoutes.usersCreate)
// router.post('/usersupdate', usersRoutes.usersUpdate)
// router.post('/usersdelete', usersRoutes.usersDelete)
// router.post('/getusersbyidcode', usersRoutes.getUsersByIdCode)
// router.post('/getusersbytitle', usersRoutes.getUsersByTitle)

const studentRoutes = require("../controllers/student");
router.get("/studentall", studentRoutes.studentAll);
router.post("/studentcreate", studentRoutes.studentCreate);
router.post("/studentupdate", studentRoutes.studentUpdate);
router.post("/studentdelete", studentRoutes.studentDelete);
router.post("/getstudentbyidcode", studentRoutes.getstudentByIdCode);
// router.post('/getstudentbytitle', studentRoutes.getstudentByTitle)

module.exports = router;
