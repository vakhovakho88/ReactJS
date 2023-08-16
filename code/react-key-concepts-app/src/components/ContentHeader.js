import './ContentHeader.css';

import { useState, react } from 'react';


const ConceptHeader = (props)=>{
    const [keyConceptsImage, setkeyConceptsImage] = useState(props.keyConceptsImage);
    const [keyConceptsImageAlt, setkeyConceptsImageAlt] = useState(props.keyConceptsImageAlt);
    
    const [contentHeader, setContentHeader] = useState(props.contentHeader);
    const [headerParagraph, setHeaderParagraph] = useState(props.headerParagraph);

    return (
    <header>
        <img src={keyConceptsImage} alt={keyConceptsImageAlt} />
        <h1>{contentHeader}</h1>
        <p>{headerParagraph}</p>
      </header>
);
}

export default ConceptHeader;