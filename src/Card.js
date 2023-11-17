import React from 'react';
import { FaThumbsUp} from "react-icons/fa";
import {FaRegThumbsDown} from "react-icons/fa";
import {FaCommentDots} from "react-icons/fa";
import {FaReact} from "react-icons/fa";
import "./Play.css";


const Card = (props)=>{
   
    return(
        <>
         <div className = "col-md-4 ">
          
         <div className="card">
  <video  src={props.videosrc} controls/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
   <ul className= "super">
  

    </ul>

</div>
</div>
      </div>
      

        </>
    );
};
export default Card; 