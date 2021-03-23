const dbConn = require("../../config/dbconfig");
var con = require("../../config/dbconfig");

var Student = function (student) {
    this.name = student.name;
    this.age = student.age;
    this.coursefee = student.coursefee;
}

Student.getAllStudent = (result) => {
    dbConn.query("select * from student", (err, res) => {
        if (err) {
            console.log("Error", err);
            result(null, err);
        }
        else {
            console.log("Students fetched Successfully");
            result(null, res);
        }
    })
}

Student.getStudentbyID = (id, result) => {
    dbConn.query("select * from student where id=?", id, (err, res) => {
        if (err) {
            console.log("Error in fetching student by id");
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

Student.createStudent =  (studentReqData, result)=>{    
    dbConn.query("INSERT INTO student set ?", studentReqData, (err, res)=> {
        if(err) {
            console.log("error: ", err);
            result(null. err);
        }else{
            console.log('Student created successfully');
            result(null, res);
        }
    })          
}

Student.updateStudent=(id, studentReqData, result)=>{
    dbConn.query("UPDATE student set name=?, age=?, coursefee=? WHERE id=?", [studentReqData.name, studentReqData.age, studentReqData.coursefee, id],(err, res)=>{
        if(err){
        console.log("Erroir While Updating");
        result(null, err);
        }else{
            console.log("Sucessfully Updated"); 
            result(null, res);   
        } 
})
}
Student.deleteStudentbyID=(id, result)=>{
    dbConn.query("DELETE FROM student WHERE id = ?", id, (err, res) => {
    if(err){
        console.log("Erroir While deleting");
        result(null, err);
        }else{
            console.log("Sucessfully Deleted"); 
            result(null, res);   
        } 
})
}


module.exports = Student;