"use client";
import styled from "styled-components";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="boton-elegante ">Search</button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .boton-elegante {
    padding: 12px 16px;
    border: 2px solid #2c2c2c;
    background-color: #1a1a1a;
    color: #ffffff;
    font-size: 0.9rem;
    cursor: pointer;
    border-radius: 30px;
    transition: all 0.4s ease;
    outline: none;
    position: relative;
    overflow: hidden;
    font-weight: bold;
  }

  .boton-elegante::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0) 70%
    );
    transform: scale(0);
    transition: transform 0.5s ease;
  }

  .boton-elegante:hover::after {
    transform: scale(4);
  }

  .boton-elegante:hover {
    border-color: #666666;
    background: #292929;
  }
`;

export default Button;
