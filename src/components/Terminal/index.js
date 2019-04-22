import React from "react";
import styled from "styled-components/macro";

const TerminalWindow = styled.div`
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: white;
`;

const Bar = styled.div`
  height: 25px;
  background-color: #dad9d9;
  border-radius: 8px 8px 0 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 70px;
  margin-left: 10px;
  div {
    border-radius: 100%;
    width: 15px;
    height: 15px;
    margin: 0 auto;
    margin-top: 5px;
  }
`;

const Terminal = () => {
  const buttonColours = ["#e94b35", "#f0f000", "#1aaf4c"];
  return (
    <TerminalWindow>
      <Bar>
        <ButtonContainer>
          {buttonColours.map((colour, index) => {
            console.log(colour);
            return <div key={index} style={{ backgroundColor: colour }} />;
          })}
        </ButtonContainer>
      </Bar>
      <div id="screen" className="about transition">
        <div>
          <div className="category">
            > <div className="cursor" />
          </div>
        </div>
      </div>
    </TerminalWindow>
  );
};

export default Terminal;
