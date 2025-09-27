import About from "@/components/home/About";
import Article from "@/components/home/Article";
import Events from "@/components/home/Events";
import Gallary from "@/components/home/Gallary";
import Hero from "@/components/home/Hero";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Hero/>  
      <Events/>
      <About/>
      <Article/>    
      <Gallary/>
    </React.Fragment>
  );
}
