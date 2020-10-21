import React, { useState } from "react";

const Formulaire = ({ addMessage, pseudo, maxLength}) => {
    const [message, setMessage] = useState("");
    const [length, setMaxLength] = useState(140);

    
    const createMessage = () => {
    const newMessage = {
      pseudo,
      message
    };

    addMessage(newMessage);

    //Reset
    setMessage("");
    setMaxLength(length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createMessage();
  };

  const handleChange = (e) => {
    const message = e.target.value;
    const length = maxLength - message.length;
    console.log("length in handleChange =>", length);
    setMaxLength(length);
    setMessage(message);
  };
  const handleKeyUp =(e)=>{
      console.log("", e);
      if(e.key==='Enter'){
          createMessage();
      }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        value={message}
        required
        maxLength={maxLength}
      />
      <div className="info">{length}</div>
      <button  type="submit">Envoyer</button>
    </form>
  );
};

export default Formulaire;
