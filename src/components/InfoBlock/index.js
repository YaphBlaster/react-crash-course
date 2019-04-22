import React from "react";
import { Message, Icon } from "semantic-ui-react";
import styled from "styled-components/macro";

const StyledMessage = styled(Message)`
  i {
    font-size: 1.2em !important;
    align-self: flex-start;
  }
  margin-top: 20px !important;
  margin-bottom: 20px !important;
`;
const InfoBlock = ({ content, icon, header }) => {
  return (
    <StyledMessage icon info>
      <Icon name={icon || "info"} circular />
      <StyledMessage.Content>
        <StyledMessage.Header>{header}</StyledMessage.Header>
        {content}
      </StyledMessage.Content>
    </StyledMessage>
  );
};

export default InfoBlock;
