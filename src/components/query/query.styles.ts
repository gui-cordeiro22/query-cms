// Dependencies
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 540px;
  color: #000;

  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  padding: 25px;
`;

export const Loader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #fff;
`;

export const LoaderElement = styled.div`
  animation: is-rotating 0.5s infinite;
  border: 6px solid #e5e5e5;
  border-top-color: #51d4db;
  border-radius: 50%;
  height: 50px;
  width: 50px;

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;

export const Title = styled.h1`
  color: #000;
  font-size: 32px;
  line-height: 40px;
`;
