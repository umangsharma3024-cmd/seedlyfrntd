import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FarmerHeader from "./FarmerHeader";
import { MoonLoader } from "react-spinners";
import CropBubble from "../pages/CropBubble";

import FarmerChatWidget from "../farmer/chat/FarmerChatWidget";


export default function FarmerLayout() {

    let isLogin = sessionStorage.getItem("isLogin")
    let userType = sessionStorage.getItem("userType")
    let nav = useNavigate()
    useEffect(() => {
        if (!isLogin || userType != 2) {
            toast.error("Please login to access this page")
            nav("/login")
        }
    }, [isLogin])





    return (
        <>


            <div className="layout-wrapper">
                <FarmerHeader />
                <main className="layout-content">
                    <Outlet />
                </main>

                <FarmerChatWidget />


                <CropBubble />
                <Footer />

            </div>






        </>
    )
}