import './Concepts.css';
import Concept from './Concept';


const Concepts = (props) => {
    const conceptsData = props.conceptsData;
    return (
        <ul id="concepts">

            {
                conceptsData.map(concept => {
                    return <Concept title={concept.title} description={concept.description}
                        conceptImage={concept.image} altText={concept.altText} />

                })
            }
        </ul>
    );

}

export default Concepts;