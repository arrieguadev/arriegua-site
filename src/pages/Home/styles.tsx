import styled from 'styled-components';
import bgHeader from '../../assets/bg-header.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bgHeader});
  background-repeat: no-repeat;
  background-size: contain;
  height: 960px;
`;

export const Presentation = styled.div`
  border: 1px solid #fff;
  margin: 100px 150px;
  width: 40%;
  padding: 30px;
`;

export const PresentationText = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 30px;
  color: #fff;
`;
