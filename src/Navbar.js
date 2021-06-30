import React,{useState} from 'react';
import "./Play.css";
  

const Navbar = ()=> {
  const [song, setSong] =useState('');

  const inputEvent = (event)=> {
       const data = event.target.value;
       console.log(data);
       setSong(data);
  }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Music Player</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      
      
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search in console" aria-label="Search"
       onChange ={inputEvent}
       value = {song}/>
       
      
    </form>
  </div>
</nav>


        </>
    );
};
export default Navbar; 