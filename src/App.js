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
    <li class="page-item">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

       <Footer/>
        </>
    );
};
export default App;