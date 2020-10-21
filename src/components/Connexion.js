import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';

const Connexion = () => {
  const [pseudo,setPseudo]=useState('');
  const [goToChat, setGoToChat]=useState(false);

  if(goToChat){
    return(
      <Redirect push to={`/pseudo/${pseudo}`}/>
    )
  }

  const handleChange=(e)=>{
    const pseudo= e.target.value;
    setPseudo(pseudo);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setGoToChat(true);
  }

  return (
    <div className="connexionBox">
      <form className="connexion" onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="Pseudo" type="text" required />
      </form>
      <button type="submit">Go</button>
    </div>
  );
};

export default Connexion;
