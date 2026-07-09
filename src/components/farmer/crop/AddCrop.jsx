import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
import { ClipLoader, MoonLoader } from "react-spinners";
// import CropBubble from "../../pages/CropBubble";

export default function AddCrop(){
    let nav=useNavigate()
    const{register,handleSubmit,reset,formState:{errors}}=useForm()

     const [season, setSeason] = useState([])
     const [seasonId, setSeasonId]=useState("")
     const [land, setLand] = useState([])
     const [landId, setLandId]=useState("")
     const id=sessionStorage.getItem("userId")
    const [load,setload]=useState(false)
    const [duration, setDuration] = useState("");


        const data = {
            status:true,
            landAvailability:"Available",
            farmerId:id
        }
        const seasonData={
            status:true
        }

    
    
        const fetchData = () => {
    
            
            ApiService.allSeason(seasonData)
                .then((res) => {
                    console.log(res)
                    if (res.data.success) {
                        setSeason(res.data.data)
    
    
                    }
                    else {
                        toast.error(res.data.essage)
                    }
                })
                .catch((err) => {
                    toast.error(err.message)
                })



            ApiService.allLand(data)
             
                .then((res) => {
                    
                    if (res.data.success) {
                       
                        console.log("land data",res.data.data)
                        setLand(res.data.data)


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

    const handleSeasonChange = (e) => {
    const selectedSeasonId = e.target.value;
    setSeasonId(selectedSeasonId);

    const selectedSeason = season.find(
        (s) => s._id === selectedSeasonId
    );

    if (!selectedSeason) return;

    // extract month number from YYYY-MM
    const start = parseInt(selectedSeason.startMonth.split("-")[1]);
    const end = parseInt(selectedSeason.endMonth.split("-")[1]);

    let months;

    // same year or normal order
    if (end >= start) {
        months = end - start + 1;
    }
    // across year boundary (Nov → Feb)
    else {
        months = (12 - start + 1) + end;
    }

    setDuration(`${months} months`);
};


    
    const handleForm = (data) => {
        setload(true)
        const formData = new FormData();

        formData.append("cropName", data.cropName);
        formData.append("duration", duration);
        formData.append("description", data.description);
        formData.append("seasonId", seasonId);
        formData.append("landId", landId);
        formData.append("farmerId",id)


        // SINGLE IMAGE
        formData.append("image", data.image[0]);
       

       
        console.log("form Submitted", formData);
        ApiService.addCrop(formData)
            .then((res) => {
                if (res.data.success) {
                    setload(false)
                    console.log(res.data)
                    toast.success(res.data.message)

                        nav("/farmer/crop/all")
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
        <>
        {
             load ? (
    <div style={{
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
    </div>
  )
          :
       <div className="container">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-lg-5">
                        <div className="bg-primary radius p-5">
                            <h2 className="text-white mb-4">Crop</h2>
                            <form action="" method="POST" onSubmit={handleSubmit(handleForm, handleError)}>
                                <div className="row g-3">


                                 <div className="row mb-3">
                                        
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <select
                                                className="form-control"
                                                value={landId}
                                                onChange={(e) => setLandId(e.target.value)}
                                            >
                                                <option value="" disabled>Land</option>
                                                {land?.map((el, index) => (
                                                    <option key={index} value={el?._id}>
                                                        {el?.farmerId?.name}-{el?.ULPIN}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                    </div>

                                    <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <select
                                                        className="form-control"
                                                        value={seasonId}
                                                        onChange={handleSeasonChange}
                                                    >
                                                        <option value="" disabled>
                                                            Select Season
                                                        </option>

                                                        {season.map((el, index) => (
                                                            <option key={index} value={el._id}>
                                                                {el.seasonName}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                    

                                    
                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12  col-sm-12">
                                            <label htmlFor=""></label>
                                            <input
                                             required
                                                type="text"
                                                className="form-control bg-white border-0 "
                                                placeholder="Crop name"
                                                style={{ height: 55 }}
                                                {...register("cropName", {
                                                    required: {
                                                        value: true,
                                                        message: "cropName is req"
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
                                                        value={duration}
                                                        readOnly
                                                        placeholder="Crop duration (auto from season)"
                                                    />


                                                
                                        
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <input
                                            required
                                            
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
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <input
                                            required
                                                type="file"
                                                accept="image/*"
                                                className="form-control"
                                                {...register("image", {
                                                    required: "Image is required"
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
{/* <CropBubble/> */}
        </>
    )
}