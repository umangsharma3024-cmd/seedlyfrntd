import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import ApiService from "../../services/ApiService"
import { toast } from "react-toastify"

export default function UpdateLand() {

    let { id } = useParams()
    let nav = useNavigate()
        const [load,setload]=useState(false)
    
    const [existingImages, setExistingImages] = useState([]);
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        let data = {
            _id: id
        }
        ApiService.singleLand(data)
            .then((res) => {
                console.log(res);

                if (res.data.success) {

                    setValue("ULPIN", res.data.data.ULPIN);
                    setValue("area", res.data.data.area);
                      setValue("location", res.data.data.location);
                    setValue("price", res.data.data.price);
                    setValue("landAvailability", res.data.data.landAvailability);
                  setExistingImages(res.data.data.images || []);


                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })

       

    }


    const handleForm = (data) => {
        const formData = new FormData();

        // append text fields
        formData.append("ULPIN", data.ULPIN);
        formData.append("area", data.area);
        formData.append("landAvailability", data.landAvailability);
        formData.append("price", data.price);
        formData.append("location", data.location);
        formData.append("landName", data.landName);


        formData.append("_id",id)

        if (data.images && data.images.length > 0) {
            Array.from(data.images).forEach((file) => {
                formData.append("images", file);
            });
        }

       
        console.log("form Submitted", formData);
        ApiService.updateLand(formData)
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data)
                    toast.success(res.data.message)
                    nav("/farmer/land/manage")
                }
                else {
                    toast.error(res.data.message)
                }

            })
            .catch((err) => {
                toast.error(err.message);

            })

    }
    const handleError = (error) => {
        console.log("err", error);

    }
    return(
        <>
        {
          load?
                  (<div style={{
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
                        <div className="bg-primary p-5">
                            <h2 className="text-white mb-4">Update land</h2>
                            <form action="" method="POST" onSubmit={handleSubmit(handleForm, handleError)}>
                                <div className="row g-3">
                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <input
                                                   
                                                type="text"
                                                className="form-control bg-white border-0"
                                                placeholder="Land Name"
                                                style={{ height: 55 }}
                                                {...register("landName", {
                                                    required: {
                                                        value: true,
                                                        message: "landName is req"
                                                    }
                                                })}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12  col-sm-12">
                                            <label htmlFor=""></label>
                                            <input
                                                maxLength={14}
                                                minLength={14}
                                                type="tel"
                                                className="form-control bg-white border-0 "
                                                placeholder="ULPIN"
                                                style={{ height: 55 }}
                                                {...register("ULPIN", {
                                                    required: {
                                                        value: true,
                                                        message: "ULPIN is req"
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
                                                placeholder="Area in sqft"
                                                style={{ height: 55 }}
                                                {...register("area", {
                                                    required: {
                                                        value: true,
                                                        message: "area is req"
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
                                                placeholder="Location"
                                                style={{ height: 55 }}
                                                {...register("location", {
                                                    required: {
                                                        value: true,
                                                        message: "location is req"
                                                    }
                                                })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <select className="form-control"
                                               {...register("landAvailability", {
                                                    required: {
                                                        value: true,
                                                        message: "landAvailability is req"
                                                    }
                                                })}
                                            >
                                                <option value="" disabled>Select Availability</option>
                                                <option value="Available">Available</option>
                                                <option value="Not Available">Not Available</option>


                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <input
                                            
                                                type="number"
                                                className="form-control bg-white border-0"
                                                placeholder="Price"
                                                style={{ height: 55 }}
                                                {...register("price", {
                                                    required: {
                                                        value: true,
                                                        message: "price is req"
                                                    }
                                                })}
                                            />
                                        </div>
                                    </div>
                                   
                                        <div className="row mb-3">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <input
                                                    type="file"
                                                    multiple
                                                    accept="image/*"
                                                    className="form-control"
                                                    {...register("images")}
                                                />
                                            </div>
                                        </div>
                                 

                                    
                                
                                    <div className="row mb-3">
                                        <div className="col-12">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">
                                               Update
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