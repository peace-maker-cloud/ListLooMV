import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignLogiIn } from "./signLogiIn";
import { Content } from "./Content";
import { SearchBar } from "./workPage/taskComponents/searchBar";
import { Inputlist } from "./workPage/taskComponents/inputlist";
import { Calendar } from "./workPage/calendar";
import listloom from "../assets/Images/listloom logo.png";
import login from "../assets/Images/login logo.png";
import { AboutApp } from "./About App";

export const AppUI = ({
  home,
  setHome,
  show,
  setShow,
  action,
  setAction,
  logged,
  setLogged,
  userTask,
  newitem,
  setNewitem,
  search,
  setSearch,
  fetchErr,
  isLoading,
  submitted,
  fullName,
  setFullName,
  firstLetter,
  username,
  setUsername,
  password,
  setPassword,
  greet,
  visible,
  setVisible,
  go,
  setGo,
  Cal,
  setCal,
  handleSubmit,
  handleLogin,
  handleLogout,
  credentials,
  setCredentials,
  uservalidate,
  passvalidate,
  namevalidate,
  setUservalidate,
  setPassvalidate,
  setNamevalidate,
  checks,
  deletes,
  currentMonth,
  today,
  setToday,
  selectDate,
  setSelectDate,
}) => {
  // codeSpace

  const navigate = useNavigate();
  const homeSign = useNavigate();

  // useEffect(() => {
  //   if (go === "") {
  //     if (go === "List") {
  //       navigate("/listwork");
  //     } else {
  //       navigate("/taskwork");
  //     }
  //   } else {
  //     navigate("/");
  //   }
  // }, [go, navigate]);

  useEffect(() => {
    if (logged === "Signed Out") {
      homeSign("sign-login");
    } else {
      homeSign("/");
    }
  }, [logged, homeSign]);

  return (
    <div className="heading md:mx-auto md:rounded-md bg-slate-400 md:p-3 p-1 md:w-3/5 outline-none h-screen flex flex-col justify-between">
      <div className="header ">
        <div className="navbar flex md:justify-between justify-around border-b-2">
          <img
            className="md:w-[25%] w-[30%] h-[50%] mt-2 gap-2 p-2"
            src={listloom}
            alt="listloom png"
          />
          <h1 className="greeting text-white md:text-xl md:font-bold font-semibold my-auto text-center">
            {logged === "Signed Out" ? "HI" : `${greet} ${fullName}`}
          </h1>
          <div className="bg-white md:w-[10%] w-[15%]  rounded-full cursor-pointer">
            {logged === "Signed Out" ? (
              <img className="sign_in_up cursor-auto" src={login} alt="" />
            ) : (
              <div
                onMouseOver={() => {
                  setVisible(true);
                }}
                onMouseLeave={() => {
                  setVisible(false);
                }}
              >
                <p className="relative md:top-6 top-3 md:text-7xl text-5xl text-center">
                  {firstLetter.toUpperCase()}
                </p>
                {logged === "Signed In" ? (
                  <div
                    id="profile"
                    className={`absolute md:top-[12%] top-[7%] md:left-[72%] left-[70%] flex flex-col gap-2 bg-slate-100 p-3 px-6 rounded-md outline-none z-50 ${
                      visible ? "" : "hidden"
                    }`}
                  >
                    <p className="text-xl border-b-2 border-b-slate-300">
                      {username}
                    </p>
                    <p
                      onClick={() => {
                        handleLogout(username);
                        setVisible(false);
                        setAction("Sign In");
                        setShow("hidden");
                      }}
                      className="text-xl border-b-2 border-b-slate-300 hover:text-sky-500"
                    >
                      Log Out
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Be careful with Content div */}
      <div className="bg-slate-300 md:rounded md:min-h-[80%] min-h-[90%] md:p-2 ">
        <AboutApp />
      </div>

      {/* Be Careful with Content div */}
      {logged === "Signed In" ? (
        <div className="footer flex gap-0 justify-center border-t-2 p-2">
          <Link
            to="/listwork"
            className="text-center bg-transparent border-r-2 border-l-2 border-l-slate-300 rounded-l-md border-r-slate-300  p-1 px-3  text-2xl text-black hover:text-white w-full"
            onClick={() => {
              setGo("List");
            }}
          >
            List
          </Link>

          <Link
            to="/taskwork"
            className="text-center bg-transparent border-r-2 border-l-2 border-l-slate-300  border-r-slate-300 rounded-r-md p-1 px-3 text-2xl text-black hover:text-white w-full"
            onClick={() => {
              setGo("Task");
            }}
          >
            Task
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
