import React from "react";
import styled from "styled-components/macro";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai as stylePrism } from "react-syntax-highlighter/dist/esm/styles/prism";

const StyledBreakdown = styled.div`
  li {
    margin-left: 10px;
  }
  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledHightlighter = styled(SyntaxHighlighter)`
  border: none !important;
  border-radius: 0 !important;
  overflow: visible !important;
  li {
    margin-top: -25px;
  }
`;

const Breakdowns = styled.div`
  background-color: #2a2a2a;
`;
const CodeBreakdown = ({ breakdowns }) => {
  return (
    <StyledBreakdown>
      <h4>Code Breakdown</h4>

      <Breakdowns>
        {Object.values(breakdowns).map((breakdown, index) => {
          const { line, explanations } = breakdown;
          return (
            <div key={index}>
              <StyledHightlighter language="jsx" style={stylePrism}>
                {line}
              </StyledHightlighter>
              <StyledHightlighter language="jsx" style={stylePrism}>
                {explanations.map((explanation, index) => (
                  <li key={index}>{explanation}</li>
                ))}
              </StyledHightlighter>
            </div>
          );
        })}
      </Breakdowns>
    </StyledBreakdown>
  );
};

export default CodeBreakdown;
