import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
import { ClipLoader, MoonLoader } from "react-spinners";
// import CropBubble from "../../pages/CropBubble";

export default function AddSeason() {
    let nav = useNavigate()
    const [load, setload] = useState(false)

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const handleForm = (data) => {
        setload(true)
        const formData = new FormData();

        formData.append("seasonName", data.seasonName);
        formData.append("startMonth", data.startMonth);
        formData.append("endMonth", data.endMonth);


        // SINGLE IMAGE
        formData.append("image", data.image[0]);

        console.log("form Submitted", data);
        ApiService.addSeason(formData)
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data)
                    toast.success(res.data.message)


                    nav("/admin/season/all")
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
    return (
        <>
            {
                load ?
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
                                <div className="bg-primary radius p-5">
                                    <h2 className="text-white mb-4">Season</h2>
                                    <form action="" method="POST" onSubmit={handleSubmit(handleForm, handleError)}>
                                        <div className="row g-3">

                                            <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12  col-sm-12">
                                                    <label htmlFor=""></label>
                                                    <input
                                                    required
                                                        type="text"
                                                        className="form-control bg-white border-0 "
                                                        placeholder="Season name"
                                                        style={{ height: 55 }}
                                                        {...register("seasonName", {
                                                            required: {
                                                                value: true,
                                                                message: "seasonName is req"
                                                            }
                                                        })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <label htmlFor="" className="text-white">Start Month</label>
                                                    <input
                                                        required
                                                        type="month"
                                                        min={new Date().toISOString().slice(0, 7)} // YYYY-MM
                                                        className="form-control bg-white border-0"
                                                        placeholder="Start Month"
                                                        style={{ height: 55 }}
                                                        {...register("startMonth", {
                                                            required: {
                                                                value: true,
                                                                message: "Start month is required",
                                                            },
                                                        })}
                                                    />

                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <label htmlFor="" className="text-white">End Month</label>

                                                    <input
                                                        required
                                                        type="month"
                                                        min={new Date().toISOString().slice(0, 7)}
                                                        className="form-control bg-white border-0"
                                                        placeholder="End Month"
                                                        style={{ height: 55 }}
                                                        {...register("endMonth", {
                                                            required: {
                                                                value: true,
                                                                message: "endMonth is req"
                                                            }
                                                        })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <label htmlFor="" className="text-white">Image</label>

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