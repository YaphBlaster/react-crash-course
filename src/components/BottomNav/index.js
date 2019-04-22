import React from "react";
import styled from "styled-components/macro";

import { Link } from "react-router-dom";

import { Button } from "semantic-ui-react";

const StyledBottomNav = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    margin: 10px !important;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    max-width: 200px;
    margin: 0 auto;
  }
`;

const BottomNav = ({
  disableBack,
  disableForward,
  backRoute,
  forwardRoute,
  backTitle,
  forwardTitle
}) => {
  return (
    <StyledBottomNav>
      {disableBack ? (
        <div />
      ) : (
        <Button
          as={Link}
          to={`/${backRoute}`}
          content={backTitle}
          icon="left arrow"
          labelPosition="left"
        />
      )}
      {disableForward ? (
        <div />
      ) : (
        <Button
          as={Link}
          to={`/${forwardRoute}`}
          content={forwardTitle}
          icon="right arrow"
          labelPosition="right"
        />
      )}
    </StyledBottomNav>
  );
};

export default BottomNav;
