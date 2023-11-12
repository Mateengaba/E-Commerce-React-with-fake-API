import { useEffect, useState } from 'react'
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider";
import Cardapi from './components/Cardapi';
import { FooterWithSitemap } from './components/footer';


// import { CardDefault } from './MyCards';

// import axios from 'axios';
// import { data } from 'autoprefixer';



const App = () => {

  return (
<>


    <Navbar />

    <section
      className=" {Slider} bg-cover
      font-[Poppins] md:bg-top bg-center"
    ></section>
        < Slider />

<Cardapi />

<FooterWithSitemap />
 
     
    </>

  );
};

export default App;
