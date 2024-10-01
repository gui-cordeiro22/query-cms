// Dependencies
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 100%;
  border-radius: 6px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  width: 100%;
  gap: 32px; 
`;

export const Name = styled.h4`
    font-size: 24px;
    font-weight: 500;
`

export const Description = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #333;
`;

export const CreatedAt = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    font-size: 8px;
    color: #999;
`;