import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const FormWrapper = styled.div`
  padding: 60px;
  margin: 100px 0;
  border-radius: 8px;
  box-shadow: 0px 1px 5px 1px #9e9e9e;
  background: linear-gradient(
      93deg,
      rgba(54, 59, 66, 0.4) -6.02%,
      rgba(134, 139, 145, 0.21) 113.04%
    ),
    #222831;
  color: #fcfdfd;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
