import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import AdminHeader from "./AdminHeader";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { MoonLoader } from "react-spinners";
import CropBubble from "../pages/CropBubble";
import AdminChatWidget from "../admin/chat/AdminChatWidget";


export default function AdminLayout() {
    let isLogin = sessionStorage.getItem("isLogin")
    let userType = sessionStorage.getItem("userType")

    let nav = useNavigate()
    useEffect(() => {
        if (!isLogin || userType != 1) {
            toast.error("Please login to access this page")
            nav("/login")
        }
    }, [isLogin])



    return (
        <>

            <div className="layout-wrapper">
                <AdminHeader />
                <main className="layout-content">
                    <Outlet />
                </main>


                <AdminChatWidget />

                <CropBubble />
                <Footer />

            </div>




        </>
    )
}


