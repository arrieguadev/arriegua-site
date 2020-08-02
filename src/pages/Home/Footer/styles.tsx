import styled from "styled-components";
import bgFooter from "../../../assets/bg-footer.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${bgFooter});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
  margin-top: 200px;
  align-items: center;
  justify-content: flex-end;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  color: #fff;
  margin: 30px;
`;
