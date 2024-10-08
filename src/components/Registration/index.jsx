import { useFormik } from "formik";
import React, { useState } from "react";
import { signUp } from "../../validation/validation";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";

const RegFromCom = ({ toast }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const auth = getAuth();
  const initialValues = {
    fullName: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      createNewUser();
    },
    validationSchema: signUp,
  });

  const createNewUser = () => {
    setLoader(true);
    createUserWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(() => {
        // Signed up
        setLoader(false);
        sendEmailVerification(auth.currentUser)
          .then(() => {
            updateProfile(auth.currentUser, {
              displayName: formik.values.fullName,
              // photoURL:
            })
              .then(() => {
                console.log("Name set");
              })
              .catch((error) => {
                console.log(error);
              });
              toast.success("Email Sent For Verifation", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });

             let redirecting= setTimeout(()=>{
                navigate("/login")
                clearTimeout(redirecting)
              },3000)
              
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        if (error.message.includes("auth/email-already-in-use")) {
          toast.error("Email-Already-in-Use", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setLoader(false);
        }
      });
  };
  return (
    <>
      <div className="lg:pr-20">
        <h1 className="text-center text-primary  text-5xl font-robotoMedium mb-6">
          Registration
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col mb-6">
            <label
              className="mb-2 text-base font-poppinsRegular"
              htmlFor="username">
              Username*
            </label>
            <input
              type="text"
              id="username"
              placeholder="Name"
              className="border-2 border-gray-500 outline-none py-2 px-1"
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
            {formik.errors.fullName && formik.touched.fullName && (
              <p className="mt-2 text-red-600 font-robotoRegular text-base">
                {formik.errors.fullName}
              </p>
            )}
          </div>
          <div className=" flex flex-col mb-6">
            <label
              className="mb-2 text-base font-poppinsRegular"
              htmlFor="email">
              E-mail*
            </label>
            <input
              type="text"
              id="email"
              placeholder="E-mail"
              className="border-2 border-gray-500 outline-none py-2 px-1"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="mt-2 text-red-600 font-robotoRegular text-base">
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className=" flex flex-col mb-6">
            <label
              className="mb-2 text-base font-poppinsRegular"
              htmlFor="password">
              Password*
            </label>
            <input
              className="border-2 border-gray-500 outline-none py-2 px-1"
              type="password"
              id="password"
              placeholder="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="mt-2 text-red-600 font-robotoRegular text-base">
                {formik.errors.password}
              </p>
            )}
          </div>
          <button
            disabled={loader}
            type="submit"
            className="py-2 px-4 bg-primary font-robotoMedium text-lg text-white rounded-sm w-full mb-2 mt-4">
            {loader ? <ClipLoader color="#fff" /> : " Sign Up"}
          </button>
        </form>
        <p className="mb-6">
          Already have an Account
          <span className="text-primary font-robotoMedium cursor-pointer pl-1 underline">
            <Link to="/login">Sign In</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default RegFromCom;
