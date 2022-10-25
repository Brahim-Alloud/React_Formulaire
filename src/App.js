import React,{useState, useEffect} from 'react';
import './App.css';
import User from './User';
function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
  const newUsers = [... users, user];
  setUsers(newUsers);
  // localStorage.setItem('users',JSON.stringify(users));
  }
  return (
    <>
      <User addUser={addUser} />
      {
        users.length > 0 && users.map((user,i) => <><p key={i}>je suis {user.name} ne le {user.date_n} a ville {user.ville} et mes loisirs sont : {user.listloisir}</p><img src={user.image} alt=""/></>)
      }
    </>
  )
}


export default App;
