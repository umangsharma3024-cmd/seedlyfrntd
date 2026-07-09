import { useEffect, useState } from "react";
import { useForm, } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
import { ClipLoader, MoonLoader } from "react-spinners";

export default function AddLand() {
    let nav = useNavigate()
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm()
    const images = watch("images");
    const [load,setload]=useState(false)

    const handleForm = (data) => {
        setload(true)
        const formData = new FormData();

        // append text fields
        formData.append("ULPIN", data.ULPIN);
        formData.append("landName", data.landName);

        formData.append("area", data.area);
        formData.append("landAvailability", data.landAvailability);
        formData.append("price", data.price);
        formData.append("location", data.location);


        if (data.images.length > 5) {
            setload(false);
            toast.error("You can upload maximum 5 images");
            return;
        }
        // append multiple images
        for (let i = 0; i < data.images.length; i++) {
            formData.append("images", data.images[i]);
        }


        console.log("form Submitted", data);
        ApiService.addLand(formData)
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data)
                     setload(false)
                    toast.success(res.data.message)

                    nav("/farmer/land/manage")
                }
                else {
                    setload(false)
                    toast.error(res.data.message)
                }

            })
            .catch((err) => {
                setload(false)
                toast.error(
                    err?.response?.data?.message || "Something went wrong"
                );

            })

    }
    const handleError = (error) => {
        setload(false)
        console.log("err", error);

    }
    return (
        
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
        <>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-5">
                        <div className="bg-primary radius p-5">
                            <h2 className="text-white mb-4">Land</h2>
                            <form action="" method="POST" onSubmit={handleSubmit(handleForm, handleError)}>
                                <div className="row g-3">

                                     <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <input
                                                    required
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
                                            required
                                                maxLength={14}
                                                minLength={14}
                                                type="tel"
                                                className="form-control bg-white border-0 "
                                                placeholder="ULPIN must be 14 characters"
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
                                                    required
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
                                            <input
                                                    required
                                                type="NUMBER"
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

                                            <select className="form-control"
                                            required
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
                                            required
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                className="form-control"
                                                {...register("images", {
                                                    required: "At least one image is required"
                                                })}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <input
                                                 required

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
            </>
}
        </>
    )
}