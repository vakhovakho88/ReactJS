import Person from './04_person';

//Person List created 
const Persons = (props)=>{
    const persons = props.persons;
    return (
        <div>
            <Person name={persons[0].name} surname={persons[0].surname} />
            <Person name={persons[1].name} surname={persons[1].surname} />
            <Person name={persons[2].name} surname={persons[2].surname} />
        </div>

    );
}

export default Persons;