import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
import { ClipLoader, MoonLoader } from "react-spinners";

export default function AddProgress(){
    let nav=useNavigate()
    const{register,handleSubmit,reset,formState:{errors}}=useForm()
const [load,setload]=useState(false)

     const [booking, setBooking] = useState([])
     const [bookingId, setBookingId]=useState("")
     const id = sessionStorage.getItem("userId");
    
    
        const fetchData = () => {
    
            const data = {
                status:true
                
            }
            ApiService.allBooking(data)
                .then((res) => {
                  
                    if (res.data.success) {
                        console.log(res)
                        const farmerBookings = res.data.data.filter(
                    (b) => b.landId?.farmerId?._id?.toString() === id
                );
                setBooking(farmerBookings);
    
    
                    }
                    else {
                        toast.error(res.data.essage)
                    }
                })
                .catch((err) => {
                    toast.error(err.message)
                })
        }
        useEffect(() => {
            fetchData()
        }, [])

    const handleForm = (data) => {
        setload(true)
        data.bookingId=bookingId

       
        console.log("form Submitted", data);
        ApiService.addProgress(data)
            .then((res) => {
                if (res.data.success) {
                    setload(false)
                    console.log(res.data)
                    toast.success(res.data.message)

                        nav("/farmer/progress/all")
                }
                else {
                    setload(false)
                    toast.error(res.data.message)
                }

            })
            .catch((err) => {
                setload(false)
                toast.error(err.message);

            })

    }
    const handleError = (error) => {
        setload(false)
        console.log("err", error);

    }
    return(
        <>{
            load? (<div style={{
                        position: "fixed",
                        inset: 0,
                        backgroundColor: "rgba(255,255,255,0.6)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 9999
                    }}>
                        <div style={{ transform: "translateY(-40px)" }}>
                            <ClipLoader size={50} />
                        </div>
                    </div>)
        :
        
       <div className="container">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-lg-5">
                        <div className="bg-primary radius p-5">
                            <h2 className="text-white mb-4">Progress</h2>
                            <form action="" method="POST" onSubmit={handleSubmit(handleForm, handleError)}>
                                <div className="row g-3">
                                    

                                     <div className="row mb-3">
                                        
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <select className="form-control bg-white border-0" value={bookingId} onChange={(e) => { setBookingId(e.target.value) }}>
                                                <option value={""} disabled selected>Land </option>
                                                {booking?.map((el, index) => (

                                                    <option key={index} value={el?._id}>{el?.landId?.ULPIN}-{el?.userId?.name}</option>

                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                

                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12  col-sm-12">
                                            <label htmlFor=""></label>
                                            <input
                                                type="text"
                                                className="form-control bg-white border-0 "
                                                placeholder="Progress Stage"
                                                style={{ height: 55 }}
                                                {...register("progressStage", {
                                                    required: {
                                                        value: true,
                                                        message: "progressStage is req"
                                                    }
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <input
                                           
                                                type="text"
                                                className="form-control bg-white border-0"
                                                placeholder="Description"
                                                style={{ height: 55 }}
                                                {...register("description", {
                                                    required: {
                                                        value: true,
                                                        message: "description is req"
                                                    }
                                                })}
                                            />
                                        </div>
                                    </div>
                                    

                                   
                                    
                                
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">
                                                ADD 
                                            </button>
                                        </div>
                                    </div>
                                    
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