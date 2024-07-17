import React from "react"

const RegFromCom = () => {
  return (
    <>
      <div className="px-6">
        <h1 className="text-center text-primary  text-5xl font-robotoMedium mb-6">
          Registration
        </h1>
        <from>
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
            />
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
            />
          </div>
          <div className=" flex flex-col mb-6">
            <label
              className="mb-2 text-base font-poppinsRegular"
              htmlFor="password">
              Password*
            </label>
            <input
              className="border-2 border-gray-500 outline-none py-2 px-1"
              type="text"
              id="password"
              placeholder="password"
            />
          </div>
          <button className="py-2 px-4 bg-primary font-robotoMedium text-lg text-white rounded-sm w-full mb-2 mt-4">
            Sign Up
          </button>
        </from>
        <p className="mb-6">
          Already have an Account
          <span className="text-primary font-robotoMedium cursor-pointer">
            Sign In
          </span>
        </p>
      </div>
    </>
  )
}

export default RegFromCom
