// ButtonEdit.jsx
import React from "react";

const ButtonEdit = ({ submittedText, setSubmittedText, setInput, isEditing, setIsEditing,isVisible, setIsVisible }) => {
  const handleEdit = () => {
    setInput(submittedText);
    setSubmittedText("");
    setIsEditing(true);
    setIsVisible(true)

  };

  const renderButton = () => {
    if (!isEditing) {
      return <button onClick={handleEdit}>Edit</button>; // Render the submit button in edit mode
    } else {
      return null; // Render nothing if not in edit mode
    }
  };
  return renderButton();
};

export default ButtonEdit;
