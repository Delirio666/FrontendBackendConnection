const Student = ({student}) => {
    const {id,name, lastName, age} = student
    return ( 
        <div>
            <p><strong>id:</strong> {id}</p>
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Apellido:</strong> {lastName}</p>
            <p><strong>Edad:</strong> {age}</p>
            <br/>
        </div>
     );
}
 
export default Student;