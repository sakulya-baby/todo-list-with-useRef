import React from "react";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <StyledNavbar>
      ReactJS TodoList <span>APP</span>
    </StyledNavbar>
  );
};
const StyledNavbar = styled.h1`
  background-color: #0c0a3e;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-bottom: 1px solid #fff;

  span {
    color: #f9564f;
  }
`;
