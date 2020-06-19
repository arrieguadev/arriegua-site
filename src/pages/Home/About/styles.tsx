import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: contain;
  height: 960px;
  margin-top: 400px;
`;

export const Box = styled.div`
  border: 1px solid;
  border-image: linear-gradient(
    to right top,
    rgb(0, 0, 0, 0) 40%,
    #FA9473 40%,
    #FA9473 60%,
    rgb(0, 0, 0, 0) 60%,
    rgb(0, 0, 0, 0) 60%
  );
  border-image-slice: 1;
  margin: 70px 150px;
  width: 80%;
`;

export const Title = styled.h3`
  color: #FA9473;
  font-size: 50px;
  margin-left: 150px;
  font-weight: bold;
`

export const AboutText = styled.p`
  font-style: normal;
  font-size: 24px;
  line-height: 30px;
  color: #3D3D3D;
  margin: 60px;
`;
