// Dependencies
import { FunctionComponent, useEffect, useState } from "react";

// Styles
import {
  Container,
  ContentWrapper,
  Loader,
  LoaderElement,
  Title,
} from "./query.styles";

export const Query: FunctionComponent = () => {
  const [restaurants, setRestaurants] = useState<{
    id: number;
    Name: string;
    Description: string;
    createdAt: string;
  }>();

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}`);
      if (!response.ok) {
        throw new Error("Erro na requisição");
      }

      const result = await response.json();
      setRestaurants(result.data);
      console.log(result);
    };

    fetchData();
  }, [apiUrl]);

  if (!restaurants)
    return (
      <Loader>
        <LoaderElement />
      </Loader>
    );

  return (
    <Container>
      <ContentWrapper>
        <Title>{restaurants.Name}</Title>
        <p>{restaurants.Description}</p>
        <br />
        <p>{restaurants.createdAt}</p>
      </ContentWrapper>
    </Container>
  );
};
