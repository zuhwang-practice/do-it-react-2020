import React from 'react';
import styled from 'styled-components';
import BasicBtn from '../components/BasicBtn';
import { flexCenter } from '../util/theme';

const CoinBox = ({ id, name, currentPrice }) => {
  return (
    <Container id={`${id}-${name}-priceUnit`}>
      <H3>{name}</H3>
      <Price>{currentPrice.toLocaleString() + '원'}</Price>
      <ButtonBox>
        <BasicBtn name='매도' color='point' />
        <BasicBtn name='매수' />
      </ButtonBox>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.middleGray};
  background-color: ${(props) => props.theme.white};
  border-radius: 2px;
  color: ${(props) => props.theme.black};
  padding: 40px;
  /* margin-bottom: 10px; */
  width: 16.5%;
`;

const H3 = styled.h3`
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  margin-right: 20px;
`;

const Price = styled.span`
  display: inline-block;
  font-weight: 300;
  color: ${(props) => props.theme.darkGray};
`;

const ButtonBox = styled.div`
  ${flexCenter}
  margin-top: 20px;
`;
export default CoinBox;
