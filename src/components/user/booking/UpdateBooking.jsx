import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import ApiService from "../../services/ApiService"
import { toast } from "react-toastify"

export default function UpdateBooking() {

    let { id } = useParams()
    let nav = useNavigate()
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        let data = {
            _id: id
        }
        ApiService.singleBooking(data)
            .then((res) => {
                console.log(res);

                if (res.data.success) {

                    
                    setValue("price", res.data.data.price);
                   

                } else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })

       

    }


    const handleForm = (data) => {
        data._id = id
        console.log("form Submitted", data);
        ApiService.updateBooking(data)
            .then((res) => {
                if (res.data.success) {
                    console.log(res.data)
                    toast.success(res.data.message)
                    nav("/booking/all")
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
        

        <div className="container">
            <div className="row d-flex justify-content-center align-items-center vh-100">
                <div className="col-lg-5">
                        <div className="bg-primary p-5">
                            <h2 className="text-white mb-4">Update Booking</h2>
                            <form action="" method="POST" onSubmit={handleSubmit(handleForm, handleError)}>
                                <div className="row g-3">
                                    
                                    
                                    
                                    <div className="row mb-3">
                                        <div className="col-lg-12 col-md-12 col-sm-12">
                                            <input
                                           
                                                type="number"
                                                className="form-control bg-white border-0"
                                                placeholder="price"
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




        </>
    )
}