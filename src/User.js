import React,{useState,useRef} from 'react';
function User({ addUser }) {
  const [name,setName] = useState('');
  const [pass,setPass] = useState('');
  const [date_n,setDate_n] = useState('');
  const [ville,setVille] = useState('');
  const [genre,setGenre] = useState('');
  const [loisirs,setLoisirs] = useState([]);
  const checkbox = useRef(null);
  const addLoisir = (loisir) =>{
    const newLoisirs = [...loisirs,loisir];
    setLoisirs(newLoisirs);
    }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      pass,
      date_n,
      ville,
      genre,
      loisirs
    }
    addUser(user);
    setName('');
    setPass('');
    setDate_n('');
    setVille('');
    setGenre('');
    setLoisirs([]);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Inscription</h1>
      <table>
        <tbody>
          <tr>
            <td><label htmlFor="name">L'identifiant </label></td>
            <td><input value={name} id="name" onChange={(e) => setName(e.target.value)} type="text" className='styled-input'required/></td>
          </tr>
          <tr>
            <td><label htmlFor="pass">Mot de passe </label></td>
            <td><input value={pass} id="pass" onChange={(e) => setPass(e.target.value)} type="text" className='styled-input' required/></td>
          </tr>
          <tr>
            <td><label htmlFor="date_n">Date de naissance </label></td>
            <td><input 
          value={date_n} onChange={(e) => setDate_n(e.target.value)}
          type="date" id='date_n' className='form-control' required/></td>
          </tr>
          <tr>
            <td><label htmlFor="ville">Ville </label></td>
            <td><select value={ville} id="ville" onChange={(e) => setVille(e.target.value)}
          className='form-control' required>
            <option value="" disabled hidden>Choisir ville</option>
            <option value="casablanca">Casablanca</option>
            <option value="ouarzazate">Ouarzazate</option>
            <option value="rabat">Rabat</option>
            <option value="safi">Safi</option>
          </select></td>
          </tr>
          <tr>
            <td>Genre</td>
            <td><input type="radio" id="homme" name="genre" value={"Homme"} onChange={(e) => setGenre(e.target.value)} required/>
          <label htmlFor="homme">Homme</label>
          <input type="radio" id="femme" name="genre" value={"Femme"} onChange={(e) => setGenre(e.target.value)} required/>
          <label htmlFor="femme">Femme</label></td>
          </tr>
          <tr>
            <td>Loisirs</td>
            <td><input type="checkbox" ref={checkbox} id="sport" name="sport" value={"Sport"} onChange={(e) => addLoisir(e.target.value)} unchecked/>
          <label htmlFor="sport">Sport</label>
          <input type="checkbox" id="lecture" ref={checkbox} name="lecture" value={"Lecture"} onChange={(e) => addLoisir(e.target.value)} unchecked/>
          <label htmlFor="lecture">Lecture</label>
          <input type="checkbox" id="musique" ref={checkbox} name="musique" value={"Musique"} onChange={(e) => addLoisir(e.target.value)} unchecked/>
          <label htmlFor="musique">Musique</label></td>
          </tr>
          <tr>
            <td>Photo</td>
            <td><input type="file" name="image" id="image"/></td>
          </tr>
        </tbody>
      </table>
      <div className="form-group"><button type='submit'>S'inscrire</button></div>
    </form>
  )
}

export default User