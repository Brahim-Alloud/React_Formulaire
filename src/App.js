import React,{useState} from 'react';
import './App.css';
import User from './User';
function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
  const newUsers = [...users, user];
  setUsers(newUsers);
  // localStorage.setItem('users',JSON.stringify(users));
  }
  return (
    <>
      <User addUser={addUser} />
      {
        users.length > 0 && users.map((user,i) => <><p key={i}>je suis {user.name} ne le {user.date_n} a ville {user.ville} et mes loisirs sont :<br/> {user.loisirs.map((loisir,index)=>{return(<><b key={index}>{loisir}</b><br/></>);})}</p></>)
      }
    </>
  )
}


export default App;
