"use client";
import styled from "styled-components";
import Button from "./Btn";
import { useDispatch } from "react-redux";
import { setCity } from "@/app/_RTK/City";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";
import { AppDispatch } from "@/app/_RTK/Slice";
import { FaCaretDown } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { egyptCities } from "@/app/constants/EgyptionCities";
const Input = () => {
  const showAllSites = () => {
    return egyptCities.map((city, index) => (
      <div key={index}>
        <button
          onClick={() => {
            dispatch(setCity(city.value));
            setIsOpen(false);
          }}
          className="hover:bg-neutral-200 duration-200 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          {city.name}
        </button>
      </div>
    ));
  };
  useGSAP(() => {
    gsap.to("#input-container", {
      opacity: 1,
      delay: 0.5,
      duration: 1,
      x: 0,
    });
  }, []);

  const dispatch: AppDispatch = useDispatch();
  const [val, setVal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div id="input-container" className="opacity-0 z-50 flex-1 w-full mt-10">
      <StyledWrapper>
        <div className="group w-full flex-wrap sm:flex-nowrap flex flex-1">
          <div className="w-3/4">
            <input
              onChange={(e) => setVal(e.target.value)}
              required
              type="text"
              className="input  w-full  text-white"
            />

            <span className="highlight" />
            <span className="bar" />
            <label>Search</label>
          </div>
          <div className="flex items-center mt-3 sm:mt-0 gap-3">
            <div
              onClick={() => {
                if (val !== "") {
                  dispatch(setCity(val));
                  setIsOpen(false);
                }
              }}
            >
              <Button />
            </div>
            <FaCaretDown
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              className={`${
                isOpen && "rotate-180"
              } text-white text-3xl duration-200 cursor-pointer`}
            />
          </div>
        </div>
        {isOpen && (
          <div className="absolute h-[300px] overflow-y-auto bg-white top-32 w-full rounded-md ">
            <IoCloseCircle
              onClick={() => {
                setIsOpen(false);
              }}
              className="absolute top-2 right-2 text-2xl cursor-pointer text-red-500"
            />
            <div className="">{showAllSites()}</div>
          </div>
        )}
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .group {
    position: relative;
  }

  .input {
    font-size: 16px;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    border-bottom: 1px solid #515151;
    background: transparent;
  }

  .input:focus {
    outline: none;
  }

  label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .input:focus ~ label,
  .input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #fff;
  }

  .bar {
    position: relative;
    display: block;
    width: 200px;
  }

  .bar:before,
  .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: orange;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  .bar:before {
    left: 100%;
  }

  .bar:after {
    right: 0%;
  }

  .input:focus ~ .bar:before,
  .input:focus ~ .bar:after {
    width: 108%;
  }

  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  .input:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
  }

  @keyframes inputHighlighter {
    from {
      background: #5264ae;
    }

    to {
      width: 0;
      background: transparent;
    }
  }
`;
export default Input;
