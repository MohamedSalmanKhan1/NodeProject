const StudentModel = require("../models/student.model"); 

exports.getStudentList = (req, res) => {
    StudentModel.getAllStudent((err, students) => {
        console.log("Get Students");
        if (err)
            res.send(err);
        console.log("Students", students);
        res.send(students);
    })

}

exports.getStudentbyID = (req, res) => {
    console.log("Get student by ID");
    StudentModel.getStudentbyID(req.params.id, (err, student) => {
        if (err)
            res.send(err);
        res.send(student);
    })
}

exports.createNewStudent =(req, res) =>{
    console.log('studentReqData', req.body);
    const studentReqData = new StudentModel(req.body);
    
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send({ status: false, message: 'Please provide all required field' });
    } else {
        console.log("valid data");
        StudentModel.createStudent(studentReqData, (err, student)=>{
            if (err)
                res.send(err);
            res.json({status:true, message: "Student added successfully!", data:student});
        });
    }
}

    exports.updateStudent =(req, res)=> {
        const studentReqData = new StudentModel(req.body);
    
        if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
            res.send({ status: false, message: 'Please provide all required field' });
        } else {
            console.log("valid data");
            StudentModel.updateStudent(req.params.id, studentReqData, (err, student)=>{
                if (err)
                    res.send(err);
                res.json({status:true, message: "Student updated successfully!", data:student.insertId});
            });
        }
    }

    exports.deleteStudent =(req, res)=> {
        console.log("Delete student by ID");
        StudentModel.deleteStudentbyID(req.params.id, (err, student) => {
            if (err)
                res.send(err);
            res.send(student);
        })
    }