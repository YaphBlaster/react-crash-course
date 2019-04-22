import React from "react";
import styled from "styled-components/macro";

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Screenshot = ({ source }) => {
  return <Image src={source} />;
};

export default Screenshot;
