import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ApiService from "../services/ApiService"
import { toast } from "react-toastify"
import { MoonLoader } from "react-spinners"


export default function Login(){

    let nav=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
     const [load,setload]=useState(false)
    
    const changeEmail=(e)=>{
        console.log(e.target.value)
        setEmail(e.target.value)

    }
    const changePassword=(e)=>{
        setPassword(e.target.value)
    }
    
    const handleForm=(e)=>{
        setload(true)
    e.preventDefault()
    let data={
      email:email,
      password:password,
      
    }
    ApiService.login(data)
    .then((res) => {
    console.log(res);
    setload(false);

    if (res.data.success) {

      
      if (res.data.data.status === false) {
        toast.error("Your account is inactive. Please contact admin.");
        return;
      }
        toast.success(res.data.message)
        
        sessionStorage.setItem("isLogin", true)
        sessionStorage.setItem("token", res.data.token)
        sessionStorage.setItem("name",res.data.data.name)
        sessionStorage.setItem("email",res.data.data.email)
        sessionStorage.setItem("contact",res.data.data.contact)

        sessionStorage.setItem("userType",res.data.data.userType)
        sessionStorage.setItem("userId",res.data.data._id)
        if(res.data.data.userType==1){
          nav("/admin")
        }
        else if(res.data.data.userType==2){
          nav("/farmer")
        }
        else{
          nav("/")
        }

      }else{
       setload(false)
        toast.error(res.data.message)
      }
    })
    .catch((err)=>{
        setload(false)
      toast.error(err.message)
    })

    }

    return(
        <>

        {
          load?
                   
                            <div className="text-center py-5">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <p className="mt-3">Loading ...</p>
                            </div>
                        
          :
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-lg-5">
                        <div className="bg-primary radius p-5">
                            <h2 className="text-white mb-4">Login</h2>
                            <form action="" method="POST" onSubmit={handleForm}>
                                <div className="row g-3">
                                    
                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <input
                                            required
                                                onChange={changeEmail}
                                                type="email"
                                                className="form-control bg-white border-0 "
                                                placeholder="Your Email"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <input
                                             required
                                            onChange={changePassword}
                                                type="password"
                                                className="form-control bg-white border-0"
                                                placeholder="Your Password"
                                                style={{ height: 55 }}
                                            />
                                        </div>
                                    </div>
                                
                                    <div className="row ">
                                        <div className="col-12">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">
                                                Login
                                            </button>
                                           
                                        </div>
                                    </div>
                                    
                                            
                                   <Link to="/register" ><p className="d-block text-center mx-auto text-white">Don't have an account Signup</p></Link>
                                       
                                    
                                </div>
                            </form>
                        </div>
                </div>
            </div>
        </div>


         } 
        </>
    )
}