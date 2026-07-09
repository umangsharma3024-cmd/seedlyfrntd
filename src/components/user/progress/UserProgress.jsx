import { useEffect, useState } from "react"
import ApiService from "../../services/ApiService"
import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { MoonLoader } from "react-spinners";

export default function UserProgress() {

  const [progress, setProgress] = useState([])
  const [loading, setLoading] = useState(false)
  let { id } = useParams()

  const fetchData = () => {

    setLoading(true)

    const data = {
      bookingId: id
    }

    ApiService.allProgress(data)
      .then((res) => {
        if (res.data.success) {
          setProgress(res.data.data)
        }
        else {
          toast.error(res.data.message)
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">All progresss</h1>
              <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">
                Home
              </Link>
            </div>
          </div>
        </div>
      </div>

     <div className="container mb-5">
  <div className="card shadow border-0 rounded-4">
    <div className="card-body p-4">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">Progress List</h4>
        <span className="badge bg-success fs-6">
          Total: {progress.length}
        </span>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-success"></div>
          <p className="mt-3">Loading progress...</p>
        </div>
      ) : progress.length > 0 ? (

        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Farmer</th>
                <th>Land</th>
                <th>Location</th>
                <th>Stage</th>
                <th>Description</th>
                <th>Status</th>
                
              </tr>
            </thead>

            <tbody>
              {progress.map((el, index) => (
                <tr key={el._id}>
                  <td className="text-dark">{index + 1}</td>

                  {/* Farmer */}
                  <td className="fw-semibold text-dark">
                    {el?.farmerId?.name}
                  </td>

                  {/* Land */}
                  <td className="text-dark">
                    {el?.bookingId?.landId?.ULPIN}
                  </td>

                  {/* Location */}
                  <td>
                    {el?.bookingId?.landId?.location}
                  </td>

                  {/* Progress Stage */}
                  <td className="text-dark">
                  
                      {el?.progressStage}
                
                  </td>

                  {/* Description */}
                  <td className="text-dark">
                    <small className="text-muted">
                      {el?.description?.slice(0, 40)}
                    </small>
                  </td>

                  {/* Status */}
                  <td>
                    <span
                      className={`badge px-3 py-2 ${
                        el?.status ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {el?.status ? "Active" : "Inactive"}
                    </span>
                  </td>

                  {/* Actions */}
                  

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      ) : (

        <div className="text-center py-5">
          <h5 className="text-muted">
            No Progress Available
          </h5>
        </div>

      )}

    </div>
  </div>
</div>
    </>
  )
}
