import React from 'react';
import Student from './Student'

const StudentsList = ({students}) => {
    return ( 
        <div>
            {students.map(student =>{
                return <Student key={student.id} student={student}/>
            })}
        </div>
     );
}
 
export default StudentsList;