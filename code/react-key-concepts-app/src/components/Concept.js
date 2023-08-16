import { React } from 'react';

import './Concept.css';

//props, return, destructuring

const Concept = (props) => {
    const title = props.title;
    const description = props.description;
    const conceptImage = props.conceptImage;
    const altText = props.altText;

    return (
        <li className="concept">
            <img src={conceptImage} alt={altText} />
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    );

}

export default Concept;