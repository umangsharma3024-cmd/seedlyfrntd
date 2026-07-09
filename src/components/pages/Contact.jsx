import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import ApiService from "../services/ApiService"
import { Link } from "react-router-dom"

export default function Contact() {

  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [load, setLoad] = useState(false)

  const handleForm = (data) => {
    setLoad(true)

    ApiService.contact(data)   // 👈 make sure this API exists
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message)
          reset()
        } else {
          toast.error(res.data.message)
        }
        setLoad(false)
      })
      .catch((err) => {
        setLoad(false)
        toast.error(
          err.response?.data?.message ||
          err.message ||
          "Something went wrong"
        )
      })
  }

  const handleError = (errors) => {
    toast.error("All fields are required")
  }

  useEffect(() => {
    document.body.style.overflow = load ? "hidden" : "auto"
  }, [load])

  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 bg-hero mb-5">
        <div className="container py-5">
          <div className="row justify-content-start">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-1 text-white mb-md-4">Contact Us</h1>
              <Link to="/" className="btn btn-primary py-md-3 px-md-5 me-3">
                Home
              </Link>
              <Link to="/contact" className="btn btn-secondary py-md-3 px-md-5">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Loader */}
      {load && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary"></div>
          <p className="mt-3">Sending Message...</p>
        </div>
      )}

      {/* Contact Form */}
      {!load && (
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-7">
                <div className="bg-primary h-100 p-5">
                  <form onSubmit={handleSubmit(handleForm, handleError)}>
                    <div className="row g-3">

                      <div className="col-6">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="form-control bg-light border-0 px-4"
                          style={{ height: 55 }}
                          {...register("name", { required: true })}
                        />
                      </div>

                      <div className="col-6">
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="form-control bg-light border-0 px-4"
                          style={{ height: 55 }}
                          {...register("email", { required: true })}
                        />
                      </div>

                      <div className="col-12">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="form-control bg-light border-0 px-4"
                          style={{ height: 55 }}
                          {...register("subject", { required: true })}
                        />
                      </div>

                      <div className="col-12">
                        <textarea
                          rows={3}
                          placeholder="Message"
                          className="form-control bg-light border-0 px-4 py-3"
                          {...register("message", { required: true })}
                        />
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-secondary w-100 py-3"
                        >
                          Send Message
                        </button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>

              {/* Right Side Info */}
              <div className="col-lg-5">
                <div className="bg-secondary h-100 p-5 text-white">
                  <h2 className="mb-4">Get In Touch</h2>
                  <p>Email: info@example.com</p>
                  <p>Phone: +91 9876543219</p>
                  <p>Address: 123 Street, Jalandhar, Punjab</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  )
}