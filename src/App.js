import React, { useState, useEffect } from 'react';
import {
  useParams
} from "react-router-dom";
import Formulaire from './components/Formulaire';
import Message from './components/Message';
import './App.css';

const App = () =>{

  const UserPage = props => {
    const { pseudo } = useParams();
    return pseudo;
  };


  const[messages,setMessage]=useState({});
  const[pseudo,setPseudo]=useState(UserPage());

  useEffect(()=>{
    const fetchData = ()=>{
      console.log(messages);
      
    setPseudo(pseudo)
    }
    fetchData();
  },[])

  const addMessage =(message)=>{
    const newMessages = { ...messages};
    newMessages[`message-${Date.now()}`] = message;
    setMessage(newMessages)
}

  const myMessage = Object
    .keys(messages)
    .map((key,i)=>{
      return (<Message 
        key={key} 
        pseudo={messages[key].pseudo} 
        message={messages[key].message}/>)
    }
    )
    //console.log(myMessage);

  return (
    
    <div className="box">
      <div>
        <div className="messages">
          <div className="message">
          {myMessage}
          </div>
        </div>
      </div>
      <Formulaire maxLength={140} pseudo={pseudo} addMessage={addMessage}/>
    </div>
  );
}

export default App;
