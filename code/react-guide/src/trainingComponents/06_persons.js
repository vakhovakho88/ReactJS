import Person from './06_person';

//import the new Person submition form
import NewPerson from './06_newPerson';
//Person List created 
const Persons = (props)=>{
    const persons = props.persons;
    return (
        <div>
            <NewPerson />
            <Person name={persons[0].name} surname={persons[0].surname} />
            <Person name={persons[1].name} surname={persons[1].surname} />
            <Person name={persons[2].name} surname={persons[2].surname} />
        </div>

    );
}

export default Persons;