// Section.jsx
import React, { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";
import ButtonEdit from "./ButtonEdit";

const Section = ({ title }) => {
  const [input, setInput] = useState(""); 
  const [submittedText, setSubmittedText] = useState(""); 
  const [isEditing, setIsEditing] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // State to manage the visibility of the input field
  const handleInputChange = (e) => {
    setInput(e.target.value); 
  };

  return (
    <div>
      <h1>{title}</h1>
      <p>{submittedText}</p>
     {isVisible && <input type="text" value={input} onChange={handleInputChange} />}
      <ButtonSubmit
        input={input}
        setSubmittedText={setSubmittedText}
        setInput={setInput}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setIsVisible={setIsVisible}
        isVisible={isVisible}

      />
      <ButtonEdit
        submittedText={submittedText}
        setSubmittedText={setSubmittedText}
        setInput={setInput}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setIsVisible={setIsVisible}
        isVisible={isVisible}

      />
    </div>
  );
};

export default Section;
