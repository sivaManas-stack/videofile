import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Play.css"
import Card from "./Card";
import Data from "./Data"



const Video = ()=>{
      
  return (
    <>
  
       <h1 className = "text-center"> Video Playlist</h1>
         
          
      
                    <div className = "row">
                      {
                       Data.map((val,ind)=>{
                        return <Card key ={ind}
                                 videosrc={val.videosrc}
                                 title ={val.title}
                                 text = {val.text}
                               
                                 />
                                 
                      })}
                  </div>
 
   </>
  );
};

export default Video;