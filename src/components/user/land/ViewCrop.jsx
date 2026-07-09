import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ApiService from "../../services/ApiService"
import { Link, useParams } from "react-router-dom"

export default function ViewCrop() {
    const [crop, setCrop] = useState([])
    const [previewImage, setPreviewImage] = useState(null);
    const [loading, setLoading] = useState(true); // ✅ Loader state added

    let { id } = useParams()

    const fetchData = () => {

        const data = {
            status: true,
            landId: id
        };

        setLoading(true); // ✅ Start loader

        ApiService.allCrop(data)
            .then((res) => {
                console.log(res)
                if (res.data.success) {
                    setCrop(res.data.data)
                }
                else {
                    toast.error(res.data.message)
                }
            })
            .catch((err) => {
                toast.error(err.message)
            })
            .finally(() => {
                setLoading(false); // ✅ Stop loader
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="container-fluid py-5 bg-light">
                <div className="container">

                    <h2 className="text-center fw-bold text-success mb-5">
                        🌿 Available Crops
                    </h2>

                    {loading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-success" role="status" />
                        </div>
                    ) : crop.length > 0 ? (

                        <div className="row g-4">
                            {crop.map((el, index) => (
                                <div className="col-lg-4 col-md-6" key={el._id || index}>
                                    <div className="modern-crop-card">

                                        {/* Image Section */}
                                        <div className="crop-image-wrapper">
                                            {el?.image ? (
                                                <img
                                                    src={el.image}
                                                    alt="crop"
                                                    onClick={() => setPreviewImage(el.image)}
                                                />
                                            ) : (
                                                <div className="no-image">No Image</div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="crop-content">
                                            <h5 className="fw-bold">{el.cropName}</h5>

                                            <div className="crop-badges">
                                                <span className="badge bg-success-subtle text-success fs-6">
                                                    🌱 {el?.seasonId?.seasonName}
                                                </span>
                                                <span className="badge bg-warning-subtle text-dark fs-6">
                                                    ⏳ {el?.duration}
                                                </span>
                                            </div>

                                            {/* <p className="text-muted small mt-2">
                                                {el.description}
                                            </p> */}


                                            <Link to={`/booking/add/${id}`} className="modern-btn w-100 mt-3">
                                                Book
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                    ) : (
                        <div className="empty-state text-center py-5">
                            <h4>No Crops Available</h4>
                            <p className="text-muted">Please check back later.</p>
                        </div>
                    )}

                </div>
            </div>

            {previewImage && (
                <div
                    onClick={() => setPreviewImage(null)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "rgba(0,0,0,0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1000
                    }}
                >
                    <img
                        src={previewImage}
                        alt="Preview"
                        onClick={(e) => e.stopPropagation()}
                        style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "6px" }}
                    />
                </div>
            )}

        </>
    )
}




// <Link to={`/booking/add/${id}`} className="btn btn-success mx-2">
//                                                     Book
//                                                 </Link>