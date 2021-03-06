import React from 'react';
import styled from 'styled-components';
import { mainFont, depth2 } from '../util/theme';

const Notipication = (props) => {
  return (
    <PopContainer>
      <NotipicationBox>
        <Contents>여기에 알림 내용이 들어가지요!</Contents>
      </NotipicationBox>
    </PopContainer>
  );
};

const PopContainer = styled.div`
  position: relative;
`;
const NotipicationBox = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${(props) => props.theme.point};
  color: ${(props) => props.theme.white};
  border-radius: 10px;
  ${depth2}
`;
const Contents = styled.p`
  ${mainFont}
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  padding: 25px 40px;
`;

export default Notipication;
