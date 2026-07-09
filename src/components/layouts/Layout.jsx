import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import CropBubble from "../pages/CropBubble";
import ChatWidget from "../user/ChatWidget";
// import FloatingWidget from "../pages/FloatingWidget";

export default function Layout(){
     
    
    return(
        <>
        
        <div  className="layout-wrapper"> 
            <Header/>
             <main className="layout-content">
        <Outlet />
      </main>
       
       {/* <FloatingWidget/> */}
      <ChatWidget />
   

        <CropBubble />
        <Footer/>

        </div>

        
        </>
    )
}