import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return <StyledFooter>TodoList App 2024 </StyledFooter>;
};

const StyledFooter = styled.p`
  background-color: #0c0a3e;
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border-top: 1px solid #fff;
  font-weight: bold;
`;
