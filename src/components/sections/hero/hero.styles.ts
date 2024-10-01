// Dependencies
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #181a1b;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 384px 108px 80px;
  width: 100%;
  gap: 40px;
  max-width: 1440px;
  
`;

export const Title = styled.h1`
    color: #ffffff;
    font-size: 48px;
    font-weight: 600;
    line-height: 1.2;
`;

export const Subtitle = styled.h3`
color: #ffffff;
font-size: 24px;
font-weight: 500;
line-height: 1.5;
`;