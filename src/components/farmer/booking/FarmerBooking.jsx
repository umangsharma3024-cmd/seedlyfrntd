import { useEffect, useState } from "react"
import ApiService from "../../services/ApiService"
import ReactSwitch from "react-switch"
import Swal from "sweetalert2"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

export default function FarmerBooking() {
  const [booking, setBooking] = useState([])
  const [loading, setLoading] = useState(true) // ✅ Loader state added
  const id = sessionStorage.getItem("userId")

  const fetchData = () => {

    setLoading(true) // ✅ Start loader

    ApiService.allBooking()
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          const farmerBookings = res.data.data.filter(
            (b) => b.landId?.farmerId?._id?.toString() === id
          );
          setBooking(farmerBookings);
        }
      })
      .catch((err) => {
        toast.error(err.message)
      })
      .finally(() => {
        setLoading(false) // ✅ Stop loader
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const softDelete = (id, status) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be able to revert this!",
      icon: "warning",
      showCancelButton: true,
     confirmButtonColor: "#34AD54",
            cancelButtonColor: "#ff9933",
      confirmButtonText: `${!status ? "Accept" : "Pending"}`
    }).then((result) => {
      if (result.isConfirmed) {
        let data = {
          _id: id,
          status: !status
        }

        ApiService.softDeleteBooking(data)
          .then((res) => {
            if (res.data.success) {
              Swal.fire({
                title: res.data.message,
                icon: "success"
              });
              fetchData()
            }
            else {
              toast.error(res.data.message)
            }
          })
          .catch((err) => {
            toast.error(err.message)
          })
      }
    })
  }

  const deleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
     confirmButtonColor: "#34AD54",
            cancelButtonColor: "#ff9933",
      confirmButtonText: `${!id ? "Accept" : "Pending"}`
    }).then((result) => {
      if (result.isConfirmed) {

        let data = { _id: id }

        ApiService.DeleteBooking(data)
          .then((res) => {
            if (res.data.success) {
              Swal.fire({
                title: res.data.message,
                icon: "success"
              });
              fetchData()
            }
            else {
              toast.error(res.data.message)
            }
          })
          .catch((err) => {
            toast.error(err.message)
          })
      }
    })
  }

  return (
    <>
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">User Bookings</h1>
              <Link to="/farmer" className="btn btn-primary py-md-3 px-md-5 me-3">
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
        <h4 className="fw-bold mb-0">Booking List</h4>
        <span className="badge bg-success fs-6">
          Total: {booking.length}
        </span>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-success"></div>
          <p className="mt-3">Loading bookings...</p>
        </div>
      ) : booking.length > 0 ? (

        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Land</th>
                <th>Season</th>
                <th>Crop</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {booking.map((el, index) => (
                <tr key={el._id}>
                  <td className="text-dark">{index + 1}</td>

                  <td className="fw-semibold text-dark">
                    {el?.userId?.name}
                  </td>

                  <td className="text-dark">
                    {el?.landId?.farmerId?.name} - {el?.landId?.ULPIN}
                  </td>

                  <td className="text-dark">{el?.seasonId?.seasonName}</td>

                  <td className="text-dark">{el?.cropId?.cropName}</td>

                  <td className="text-dark">
                    {new Date(el?.leaseStartDate).toLocaleDateString("en-IN")}
                  </td>

                  <td className="text-dark">
                    {new Date(el?.leaseEndDate).toLocaleDateString("en-IN")}
                  </td>

                  <td className="fw-semibold text-success text-dark ">
                    ₹ {el?.price}
                  </td>

                  {/* Status Badge */}
                  <td>
                    <span
                      className={`badge px-3 py-2 ${
                        el?.status ? "bg-success" : "bg-warning text-dark"
                      }`}
                    >
                      {el?.status ? "Booked" : "Pending"}
                    </span>
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <ReactSwitch
                        checked={el?.status}
                        onChange={() =>
                          softDelete(el?._id, el?.status)
                        }
                        height={20}
                        width={45}
                      />

                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteBooking(el?._id)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      ) : (
        <div className="text-center py-5">
          <h5 className="text-muted">No Bookings Available</h5>
        </div>
      )}

    </div>
  </div>
</div>
    </>
  )
}
