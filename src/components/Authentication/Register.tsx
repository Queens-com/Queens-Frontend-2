'use client'
import React from "react";
import Link from "next/link";
import apple from "../../../public/apple.png";
import facebook from "../../../public/facebook.png";
import google from "../../../public/google.png";
import queensLogo from "../../../public/Q.png";
import { useState } from "react";
import Image from "next/image";

function Register() {
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     const formData = new FormData(event.target);

  //     const data = {
  //       first_name: formData.get("firstName"),
  //       last_name: formData.get("lastName"),
  //       middle_name: formData.get("middleName"),
  //       email: formData.get("email"),
  //       country: formData.get("country"),
  //       country_code: formData.get("countryCode"),
  //       phone: formData.get("phoneNumber"),
  //       password: formData.get("password"),
  //       profile_photo: formData.get("profilePicture"),
  //     };

  //     try {
  //       const response = await axios.post("/accRegister", data);
  //       console.log(response.data);
  //       navigate("/");
  //     } catch (error) {
  //       console.error("There was an error signing up.", error.response || error);

  //       const errorMessage =
  //         error.response?.data?.detail ||
  //         "An error occurred during signup. Please try again.";
  //       setErrorMessage(errorMessage);
  //       setShowModal(true);

  //       setTimeout(() => {
  //         setShowModal(false);
  //         setErrorMessage("");
  //       }, 5000);
  //     }
  //   };

  return (
    <div className="grid justify-center">
      <div className="grid items-center justify-center p-6 sm:max-w-sm w-full">
        <div className="text-black max-w-screen-sm m-auto text-center">
          <Image
            src={queensLogo}
            alt="logo"
            className="w-20 md:w-100 m-auto mb-8"
          />
          <div>
            <h1 className="bricolage font-bold text-xl md:text-3xl mb-3">
              Let’s get you started!
            </h1>
            <div className="flex items-center justify-between gap-2 ms-4 me-4">
              <p className="font-semibold text-gray-600 text-sm md:text-md ">
                Sign up with
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center justify-between mt-4">
            <div className="flex gap-2 items-center ps-2.5 pe-2.5 pt-2 pb-2 border border-black rounded-full">
              <Image src={google} alt="google" />
              <h1 className="text-gray-700 text-xs md:text-base">Google</h1>
            </div>
            <div className="flex gap-2 items-center ps-2.5 pe-2.5 pt-2 pb-2 border border-black rounded-full">
              <Image src={apple} alt="apple" />
              <h1 className="text-gray-700 text-xs md:text-base">Apple</h1>
            </div>
            <div className="flex gap-2 items-center ps-2.5 pe-2.5 pt-2 pb-2 border border-black rounded-full">
              <Image src={facebook} alt="facebook" />
              <h1 className="text-gray-700 text-xs md:text-base">Facebook</h1>
            </div>
          </div>

          <form className="grid gap-3 mt-4">
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                First Name
              </label>
              <input
                name="firstName"
                type="text"
                placeholder="e.g John"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
                required
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                Last Name
              </label>
              <input
                name="lastName"
                type="text"
                placeholder="e.g Doe"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
                required
              />
            </div>

            <div className="grid gap-1.5">
              <label htmlFor="email" className="font-medium text-sm text-left">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="yourname@email.com"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
                required
              />
            </div>

            <div className="grid gap-1.5">
              <label
                htmlFor="password"
                className="font-medium text-sm text-left"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter password"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
            </div>
            <div className="grid gap-1.5">
              <label
                htmlFor="confirmPassword"
                className="font-medium text-sm text-left"
              >
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Enter password"
                className="bg-gray-100 rounded-full pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm"
              />
            </div>
            <div className="grid gap-1.5">
              <p className="font-medium text-xs">
                By clicking, you agree to Queen’s{" "}
                <span className="text-[#3D8DFF] underline">Privacy Policy</span>{" "}
                and{" "}
                <span className="text-[#3D8DFF] underline">
                  terms of service
                </span>
              </p>
              <span className="switch" />
            </div>
            <button
              type="submit"
              className=" hover:bg-[#1E1E1E] text-[#1E1E1E] bg-[#F5F5F5] hover:text-white pt-2 pb-2 ps-4 pe-4 placeholder:font-normal placeholder:text-sm rounded-full"
            >
              Sign up
            </button>
          </form>

          <div className="grid gap-3 mt-4">
            <Link
              href="/login"
              className="text-sm text-[#3D8DFF] font-medium underline"
            >
              Login
            </Link>
            <p className="text-[#8D8D8D] text-xs font-normal">
              Copyright © 2024 Queens. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
