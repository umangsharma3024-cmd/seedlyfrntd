import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import ApiService from "../services/ApiService"
import { toast } from "react-toastify"
import { MoonLoader } from "react-spinners"
import { useEffect, useState } from "react"


export default function Register() {

    let nav = useNavigate()
    const [load, setload] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const handleForm = (data) => {
        setload(true)

        const formData = new FormData();
        formData.append("name", data?.name);
        formData.append("email", data?.email);
        formData.append("password", data?.password);
        formData.append("contact", data?.contact);
        formData.append("userType", data?.userType)


        console.log("form Submitted", formData);
        ApiService.register(data)
            .then((res) => {
                console.log(res)

                if (res.data.success) {
                    setload(false)
                    toast.success(res.data.message)

                    let logindata = {
                        email: data.email,
                        password: data.password
                    }
                    console.log(logindata);

                    ApiService.login(logindata)
                        .then((result) => {
                            console.log(result);
                            if (result.data.success) {
                                toast.success(result.data.message)
                                setload(false)
                                sessionStorage.setItem("isLogin", true)
        sessionStorage.setItem("contact",res.data.data.contact)

                                sessionStorage.setItem("token", result.data.token)
                                sessionStorage.setItem("name", result.data.data.name)
                                sessionStorage.setItem("email", result.data.data.email)
                                sessionStorage.setItem("userType", result.data.data.userType)
                                sessionStorage.setItem("userId", result.data.data._id)
                                if (result.data.data.userType == 1) {
                                    nav("/admin")
                                }
                                else if (result.data.data.userType == 2) {
                                    nav("/farmer")
                                }
                                else {
                                    nav("/")
                                }

                            } else {
                                toast.error("something went wrong")
                            }
                        })
                        .catch((err) => {
                            setload(false)
                            toast.error(
                                err.response?.data?.message ||
                                err.message ||
                                "Something went wrong"
                            );
                            console.log("1", err);

                        })
                }
            })
            .catch((err) => {
                setload(false)
                toast.error(
                    err.response?.data?.message ||
                    err.message
                );

            })
    }

    const handleError = (errors) => {
        setload(false);
        console.log("Form Errors:", errors);
        const firstError = Object.values(errors)[0];
        toast.error(firstError?.message || "Form has errors");


    };
    useEffect(() => {
        if (load) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [load]);









    return (
        <>
            {
                load ?
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
                                    <h2 className="text-white mb-4">Register</h2>
                                    <form action="" method="POST" onSubmit={handleSubmit(handleForm, handleError)}>
                                        <div className="row g-3">

                                            <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <input

                                                        type="text"
                                                        className="form-control bg-white border-0 "
                                                        placeholder="Your Name"
                                                        style={{ height: 55 }}
                                                        {...register("name", {
                                                            required: {
                                                                value: true,
                                                                message: "Name is req"
                                                            },
                                                            minLength: {
                                                                value: 3,
                                                                message: "Name must be at least 3 characters"
                                                            },
                                                            pattern: {
                                                                value: /^[A-Za-z\s]+$/,
                                                                message: "Name should contain only letters"
                                                            },
                                                            validate: (value) => {
                                                                if (value.trim().length === 0) {
                                                                    return "Name cannot be only spaces";
                                                                }
                                                                return true;
                                                            }

                                                        })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <input

                                                        type="email"
                                                        className="form-control bg-white border-0 "
                                                        placeholder="Your Email"
                                                        style={{ height: 55 }}
                                                        {...register("email", {
                                                            required: {
                                                                value: true,
                                                                message: "Email is req"
                                                            },
                                                            pattern: {
                                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                                message: "Invalid email format"
                                                            }
                                                        })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <input


                                                        type="password"
                                                        className="form-control bg-white border-0"
                                                        placeholder="Password"
                                                        style={{ height: 55 }}
                                                        {...register("password", {
                                                            required: {
                                                                value: true,
                                                                message: "Password is req"
                                                            },
                                                            minLength: {
                                                                value: 8,
                                                                message: "Password must be at least 8 characters"
                                                            },
                                                            pattern: {
                                                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                                                                message: "Password must be 8+ chars, include uppercase, lowercase, number & special character"
                                                            }
                                                        })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <input

                                                        type="number"
                                                        inputMode="numeric"
                                                        maxLength={10}
                                                        minLength={10}



                                                        className="form-control bg-white border-0"
                                                        placeholder="Contact"
                                                        style={{ height: 55 }}
                                                        {...register("contact", {
                                                            required: {
                                                                value: true,
                                                                message: "Contact is req"
                                                            },
                                                            pattern: {
                                                                value: /^[0-9]{10}$/,
                                                                message: "Contact must be exactly 10 digits not string"
                                                            }, validate: (value) =>
                                                                !/^0+$/.test(value) || "Invalid contact number"

                                                        })}
                                                    />
                                                </div>
                                            </div>


                                            <div className="row mb-3">

                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <select className="form-control"

                                                        {...register("userType", {
                                                            required: {
                                                                value: true,
                                                                message: "User Type is req"
                                                            }
                                                        })}
                                                    >
                                                        <option value="">Select userType</option>
                                                        <option value="3">User</option>
                                                        <option value="2">Farmer</option>


                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-12">
                                                    <button className="btn btn-secondary w-100 py-3" type="submit">
                                                        Register
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
