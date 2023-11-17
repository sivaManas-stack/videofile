import React from 'react';

import Video from "./Video";
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import "./Play.css"


const App =()=> {
    return (
        <>      
<Navbar/>
       
       <Video/>

       <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
   <button className="extra">Showmore</button>
  </ul>
</nav>

       <Footer/>
        </>
    );
};
export default App;