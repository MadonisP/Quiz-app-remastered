import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Exam = (props) => (
 <tr>
   <td>{props.Exam.name}</td>
   <td>{props.Exam.position}</td>
   <td>{props.Exam.level}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.Exam._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteExam(props.Exam._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function ExamList() {
 const [exams, setExams] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getExams() {
     const response = await fetch(`http://localhost:5000/examquestions/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setExams(records);
   }
 
   getExams();
 
   return;
 }, [exams.length]);
 
 // This method will delete a record
 async function deleteExam(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = exams.filter((el) => el._id !== id);
   setExams(newRecords);
 }
 
 // This method will map out the records on the table
 function examList() {
   return exams.map((exam) => {
     return (
       <Exam
         exam={exam}
         deleteExam={() => deleteExam(exam._id)}
         key={exam._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Question List</h3>
     <table  style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Position</th>
           <th>Level</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>{examList()}</tbody>
     </table>
   </div>
 );
}