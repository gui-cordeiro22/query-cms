// Dependencies
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  width: 100%;
  border-radius: 6px;
  transition: box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 3px 3px 15px #fff;
  
    h4 {
      font-style: italic;
    }
  }
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

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
`;

export const Details = styled.p`
  font-size: 10px;
  color: #999;
`;