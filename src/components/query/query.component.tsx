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
  const [sectionData, setSectionData] = useState<{
    id: number;
    Name: string;
    Description: string;
    createdAt: string;
  }>();

  const [restaurantListData, setRestaurantListData] = useState<
    {
      id: number;
      Name: string;
      Description: string;
      createdAt: string;
    }[]
  >();

  const apiUrl = import.meta.env.VITE_API_URL;
  const allRestaurants = import.meta.env.VITE_API_URL_ALL_RESTAURANTS;

  useEffect(() => {
    const fetchData = async () => {
      const sectionResponse = await fetch(`${apiUrl}`);

      const restaurantsListResponse = await fetch(`${allRestaurants}`);

      if (!sectionResponse.ok && !restaurantsListResponse.ok) {
        throw new Error("Erro na requisição");
      }

      const sectionResult = await sectionResponse.json();
      setSectionData(sectionResult.data);

      const restaurantsListResult = await restaurantsListResponse.json();
      setRestaurantListData(restaurantsListResult.data);

      console.log(restaurantsListResult.data);
    };

    fetchData();
  }, [allRestaurants, apiUrl]);

  if (!sectionData && !restaurantListData)
    return (
      <Loader>
        <LoaderElement />
      </Loader>
    );

  return (
    <Container>
      <ContentWrapper>
        <Title>{sectionData?.Name}</Title>
        {restaurantListData?.map((restaurant) => (
          <ul key={restaurant.id}>
            <li>{restaurant.Name}</li>
          </ul>
        ))}
      </ContentWrapper>
    </Container>
  );
};
