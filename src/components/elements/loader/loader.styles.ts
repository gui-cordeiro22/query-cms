// Dependencies
import styled from "styled-components";

export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #1f2223;
`;

export const LoaderElement = styled.div`
  animation: is-rotating 0.5s infinite;
  border: 6px solid #e5e5e5;
  border-top-color: #fd5656;
  border-radius: 50%;
  height: 50px;
  width: 50px;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;