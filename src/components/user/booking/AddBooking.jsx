import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
import { MoonLoader } from "react-spinners";

export default function AddBooking() {
    let nav = useNavigate()
    const [load, setload] = useState(false)
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm()
    const userId = sessionStorage.getItem("userId")
    let { id } = useParams()

    const [season, setSeason] = useState([])
    const [seasonId, setseasonId] = useState("")
    //  const [land, setLand] = useState([])
    //  const [landId, setLandId]=useState("")
    const [crop, setCrop] = useState([])
    const [cropId, setCropId] = useState("")
    const [filteredCrops, setFilteredCrops] = useState([]);



    const fetchData = () => {

        const data = {
            _id: id

        }
        const seasonData={
            status:true
        }
        const cropData={
            status:true,
            
        }

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


        ApiService.singleLand(data)
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


        ApiService.allCrop(cropData)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setCrop(res.data.data)


                }
                else {
                    toast.error(res.data.essage)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })

    }
    const monthInputToDate = (monthValue, type = "start") => {
        if (!monthValue) return "";

        const [year, month] = monthValue.split("-"); // "2026", "04"
        const m = Number(month); // 4

        if (type === "start") {
            // First day of month
            return new Date(year, m - 1, 1+1).toISOString().split("T")[0]; // 2026-04-01
        } else {
            // Last day of month
            return new Date(year, m, 0+1).toISOString().split("T")[0];   // 2026-04-30
        }
    };







    useEffect(() => {
        if (!seasonId) return;

        const selectedSeason = season.find(s => s._id === seasonId);
        if (!selectedSeason) return;

        const leaseStart = monthInputToDate(selectedSeason.startMonth, "start");
        const leaseEnd = monthInputToDate(selectedSeason.endMonth, "end");

        setValue("leaseStartDate", leaseStart);
        setValue("leaseEndDate", leaseEnd);

    }, [seasonId, season, setValue]);



    useEffect(() => {
        if (seasonId && id) {
            const seasonCrops = crop.filter(
                (c) =>
                    (c.seasonId === seasonId || c.seasonId?._id === seasonId) &&
                    (c.landId === id || c.landId?._id === id)
            );

            setFilteredCrops(seasonCrops);
            setCropId(""); // reset crop when season changes
        } else {
            setFilteredCrops([]);
            setCropId("");
        }
    }, [seasonId, crop, id]);


    useEffect(() => {
        fetchData();
    }, []);



    // const handleForm = (data) => {
    //     setload(true)
    //     data.seasonId = seasonId
    //     data.landId = id
    //     data.cropId = cropId

    //     data.userId = userId


    //     console.log("form Submitted", data);
    //     ApiService.addBooking(data)
    //         .then((res) => {
    //             if (res.data.success) {
    //                 setload(false)
    //                 console.log(res.data)
    //                 toast.success(res.data.message)

    //                 nav("/booking/manage")
    //             }
    //             else {
    //                 setload(false)
    //                 toast.error(res.data.message)
    //             }

    //         })
    //         .catch((err) => {
    //             setload(false)
    //             toast.error(err?.response?.data?.message || "All fields are required");

    //             toast.error(err.message);

    //         })

    // }

    const handleForm = (data) => {

    if (!seasonId || !cropId) {
        toast.error("Please select season and crop");
        return;
    }

    const bookingData = {
        userId: userId,
        landId: id,
        cropId: cropId,
        seasonId: seasonId,
        price: data.price,
        leaseStartDate: data.leaseStartDate,
        leaseEndDate: data.leaseEndDate,
        status: true
    };

    const options = {
        key: "rzp_test_Q8bKRaQdmgftXW",  // your razorpay key
        amount: data.price * 100,
        currency: "INR",
        name: "Land Booking",
        description: "Season Crop Booking",

        handler: function (response) {

            // Add transactionId to booking
            bookingData.transactionId = response.razorpay_payment_id;

            ApiService.addBooking(bookingData)
                .then((res) => {
                    if (res.data.success) {
                        toast.success("Booking Payment Successful!");
                        nav("/booking/manage");
                    } else {
                        toast.error(res.data.message);
                    }
                })
                .catch(err => toast.error(err.message));
        },

        prefill: {
            name: sessionStorage.getItem("name") || "User",
            email: sessionStorage.getItem("email") || "user@email.com",
            contact:sessionStorage.getItem("contact") || "9999999999"
        },

        theme: { color: "#0d6efd" }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
};

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
                            <MoonLoader size={50} />
                        </div>
                    </div>)
                    :

                    <div className="container ">
                        <div className="row d-flex justify-content-center align-items-center vh-100 ">
                            <div className="col-lg-5 ">
                                <div className="bg-primary radius p-5 ">
                                    <h2 className="text-white mb-4">Booking</h2>
                                    <form action="" method="POST" onSubmit={handleSubmit(handleForm, handleError)}>
                                        <div className="row g-3">



                                            <div className="row mb-3">

                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <label htmlFor="" className="text-white">Season Name</label>
                                                    <select
                                                        className="form-control"
                                                        value={seasonId}
                                                        onChange={(e) => setseasonId(e.target.value)}
                                                    >
                                                        <option value="" selected disabled>Season Name</option>
                                                        {season?.map((el) => (
                                                            <option key={el._id} value={el._id}>
                                                                {el.seasonName}
                                                            </option>
                                                        ))}
                                                    </select>

                                                </div>
                                            </div>


                                            <div className="row mb-3">

                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <label htmlFor="" className="text-white">Crop Name</label>
                                                    <select
                                                        className="form-control"
                                                        value={cropId}
                                                        onChange={(e) => setCropId(e.target.value)}
                                                        disabled={!seasonId}
                                                    >
                                                        <option value="">Crop Name</option>
                                                        {filteredCrops.map((el, index) => (
                                                            <option selected key={index} value={el._id}>
                                                                {el.cropName}
                                                            </option>
                                                        ))}
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12  col-sm-12">
                                                    <label className="text-white">Price</label>
                                                    <input
                                                        readOnly
                                                        type="number"
                                                        className="form-control bg-white border-0 "
                                                        placeholder="price"
                                                        style={{ height: 55 }}
                                                        {...register("price")}
                                                    />
                                                </div>
                                            </div>



                                            <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <label htmlFor="" className="text-white">Start Date</label>

                                                    <input
                                                    
                                                    readOnly
                                                        type="date"
                                                        className="form-control"
                                                        {...register("leaseStartDate", { required: true })}
                                                    />


                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <label htmlFor="" className="text-white">End Date</label>
                                                    <input
                                                   readOnly
                                                        type="date"
                                                        className="form-control"
                                                        {...register("leaseEndDate", { required: true })}
                                                    />


                                                </div>
                                            </div>





                                            <div className="row mb-3">
                                                <div className="col-12">
                                                    <button className="btn btn-secondary w-100 py-3 mt-2" type="submit">
                                                       Book
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