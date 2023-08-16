// npm install -> installs all the dependencies


import keyConceptsImage from './assets/images/key-concepts.png';
import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';


import ConseptsRoot from './components/ConceptsRoot';
import ContentHeader from './components/ContentHeader';
import Concepts from './components/Concepts';

const concepts = [
  {
    title: 'Components',
    image: componentsImage,
    altText: 'alt text for image',
    description:
      'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
  },
  {
    title: 'State',
    image: stateImage,
    altText: 'alt text for image',
    description:
      'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
  },
  {
    title: 'Events',
    image: eventsImage,
    altText: 'alt text for image',
    description:
      'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
  }

];

function App() {
  return (
   <ConseptsRoot>
      <ContentHeader keyConceptsImage={keyConceptsImage} keyConceptsImageAlt={"image alt test"} contentHeader = {"This is header"} 
      headerParagraph = {"this is header paragraph"}/>

    <Concepts conceptsData = {concepts} />


   </ConseptsRoot>
  );
}

export default App;
