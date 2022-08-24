//07. giving values from down to upp components
import GrandParent from "./trainingComponents/07_1grandparent";

const AppTraining = () => {
    return (
        <div>
        <GrandParent></GrandParent>
        </div>
    );
}






//06 Person with submition form to add new person (Handling form submition)
// import Persons from './trainingComponents/06_persons';
// const AppTraining = () => {


//     //state
//     const persons = [
//         {
//             name: "firstname1",
//             surname: "surname1"
//         },
//         {
//             name: "firstname2",
//             surname: "surname2"
//         },
//         {
//             name: "firstname3",
//             surname: "surname3"
//         }
//     ];


//     return (
//         <div>
//             <Persons persons={persons}/>
//         </div>
//     );
// }



//05 person with Button that changes the name of the person, changing a value from user inputs.
// import Persons from './trainingComponents/05_persons';
// const AppTraining = () => {


//     //state
//     const persons = [
//         {
//             name: "firstname1",
//             surname: "surname1"
//         },
//         {
//             name: "firstname2",
//             surname: "surname2"
//         },
//         {
//             name: "firstname3",
//             surname: "surname3"
//         }
//     ];


//     return (
//         <div>
//             <Persons persons={persons}/>
//         </div>
//     );
// }



//04 Create Person list: Persons
// import Persons from './trainingComponents/04_persons';
// const AppTraining = () => {


//     //state
//     const persons = [
//         {
//             name: "firstname1",
//             surname: "surname1"
//         },
//         {
//             name: "firstname2",
//             surname: "surname2"
//         },
//         {
//             name: "firstname3",
//             surname: "surname3"
//         }
//     ];


//     return (
//         <div>
//             <Persons persons={persons}/>
//         </div>
//     );
// }



//03, using states and props to render dynamic data
// import Person from './trainingComponents/03_person';
// const AppTraining = () => {


//     //state
//     const persons = [
//         {
//             name: "firstname1",
//             surname: "surname1"
//         },
//         {
//             name: "firstname2",
//             surname: "surname2"
//         },
//         {
//             name: "firstname3",
//             surname: "surname3"
//         }
//     ];


//     return (
//         <div>
//             <Person name={persons[0].name} surname={persons[0].surname} />
//             <Person name={persons[1].name} surname={persons[1].surname} />
//             <Person name={persons[2].name} surname={persons[2].surname} />
//         </div>
//     );
// }





//02 using props to render dynamic data
// import Person from './trainingComponents/02_person_component_with_props';
// const AppTraining = () => {

//     return (
//         <div>
//             <Person name="firstname1" surname="surname1" />
//             <Person name="firstname2" surname="surname2"/>
//             <Person name="firstname3" surname="surname3"/>
//         </div>
//     );
// }


//01, just the first static component
//import FirstComponent from './trainingComponents/01_firstComponent';
//1
// const AppTraining = () => {

//     return (
//         <div>
//             <FirstComponent />
//             <FirstComponent />
//             <FirstComponent />
//         </div>
//     );
// }

export default AppTraining;