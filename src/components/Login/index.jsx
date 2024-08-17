import { useFormik } from "formik";
import React, { useState } from "react";
import { login } from "../../validation/validation";
import { getAuth, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoggedInUser } from "../../features/Slices/LoginSlice";
const LoginFromCom = ({ toast }) => {
 const dispatch=useDispatch()
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: () => {
      loginUser();
    },
    validationSchema: login,
  });

  const loginUser = () => {
    setLoader(true);
    signInWithEmailAndPassword(
      auth,
      formik.values.email,
      formik.values.password
    )
      .then(({user}) => {
        console.log(user);
        if(user.emailVerified==true){
          dispatch(LoggedInUser(user))
          localStorage.setItem("user",JSON.stringify(user))
          navigate("/")
        }else{
          toast.error("Please Verify your Email", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        if (error.message.includes("auth/invalid-credential")) {
          toast.error("Email Nai Use", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else if (error.message.includes("password")) {
          toast.error("Password Worng", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };

  return (
    <>
      <div className="lg:pr-28">
        <h1 className="text-center text-primary  text-5xl font-robotoMedium mb-6">
          Login
        </h1>
        <form onSubmit={formik.handleSubmit}>
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
            {loader ? <ClipLoader color="#fff" /> : " Login"}
          </button>
        </form>
        <p className="mb-6">
          Created A New Account
          <span className="text-primary font-robotoMedium cursor-pointer pl-1 underline">
            <Link to="/registration">Sign Up</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default LoginFromCom;
