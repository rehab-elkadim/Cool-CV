// ButtonSubmit.jsx
import React from "react";

const ButtonSubmit = ({ input, setSubmittedText, setInput, setIsEditing, isEditing, isVisible, setIsVisible}) => {
  const handleSubmit = () => {
    const lastInput = input;
    setSubmittedText(lastInput);
    setInput("");
    setIsEditing(false);
    setIsVisible(false)
  };
  
  const renderButton = () => {
    if (isEditing) {
      return <button onClick={handleSubmit}>Submit</button>; // Render the submit button in edit mode
    } else {
      return null; // Render nothing if not in edit mode
    }
  };

  return renderButton();
};



export default ButtonSubmit;
