import './03_person.css';
const Person = (props) =>{
    return(
        <div className='person_component_div'>
            <h1>Hello My name is {props.name} and surname is {props.surname}</h1>
        </div>
    );
}

export default Person;