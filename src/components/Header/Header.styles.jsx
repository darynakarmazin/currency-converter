import styled from "styled-components";

export const HeaderTag = styled.header`
  background: linear-gradient(
      93deg,
      rgba(43, 46, 51, 0.3) -6.02%,
      rgba(82, 85, 89, 0.16) 113.04%
    ),
    #222831;
  box-shadow: 0px 2px 10px 2px #9e9e9e;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: #212121;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0;
`;

export const Title = styled.h1`
  color: #fcfdfd;
  font-size: 1.5em;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
  color: #fcfdfd;

  span {
    font-size: 14px;
  }
`;
