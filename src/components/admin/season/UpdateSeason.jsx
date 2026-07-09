import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import ApiService from "../../services/ApiService"
import { toast } from "react-toastify"
import { MoonLoader } from "react-spinners"

export default function UpdateSeason() {

    let { id } = useParams()
    const [load, setload] = useState(false)
    let nav = useNavigate()
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        let data = {
            _id: id
        }
        ApiService.singleSeason(data)
            .then((res) => {
                console.log(res);

                if (res.data.success) {

                    setValue("seasonName", res.data.data.seasonName);
                    // Ensure month inputs receive values in YYYY-MM format
                    const start = res.data.data.startMonth
                        ? String(res.data.data.startMonth).slice(0, 7)
                        : "";
                    const end = res.data.data.endMonth
                        ? String(res.data.data.endMonth).slice(0, 7)
                        : "";
                    setValue("startMonth", start);
                    setValue("endMonth", end);


                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })

       

    }


    const handleForm = (data) => {
        setload(true)
         const formData = new FormData();
          formData.append("seasonName", data.seasonName);
        formData.append("startMonth", data.startMonth);
        // formData.append("duration", data.duration);
        formData.append("endMonth", data.endMonth);
        // formData.append("seasonId", seasonId);
        // formData.append("landId", landId);
        formData.append("_id",id)
        // append image ONLY if selected
        if (data.image && data.image[0]) {
            formData.append("image", data.image[0]);
        }
       
        for (let pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }

        ApiService.updateSeason(formData)
            .then((res) => {
                if (res.data.success) {
                    setload(false)
                    console.log(res.data)
                    toast.success(res.data.message)
                    nav("/admin/season/all")
                }
                else {
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
        <>{load ?
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
                            <MoonLoader size={50} />
                        </div>
                    </div>)
                    :

            <div className="container">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-5">
                        <div className="bg-primary p-5">
                            <h2 className="text-white mb-4">Season Update</h2>
                            <form action="" method="POST" onSubmit={handleSubmit(handleForm, handleError)}>
                                <div className="row g-3">

                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <label htmlFor=""></label>
                                            <input
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
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="form-control"
                                                {...register("image")}
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