// Dependencies
import { FunctionComponent, useEffect, useState } from "react";

// Components
import { Hero } from "../../components/sections/hero";
import { Content } from "../../components/sections/content";
import { ContentCad } from "../../components/content-card";

export const HomePage: FunctionComponent = () => {
  const [sectionData, setSectionData] = useState<{
    id: number;
    Title: string;
    Subtitle: string;
    Description: string;
   
  }>();

  const [restaurantListData, setRestaurantListData] = useState<
    {
      id: number;
      Name: string;
      Description: string;
      createdAt: string;
    }[]
  >();
  
  const homeDataApi = import.meta.env.VITE_API_URL_HOME_DATA;
  const allRestaurants = import.meta.env.VITE_API_URL_ALL_RESTAURANTS;

  useEffect(() => {
    const fetchData = async () => {
      const sectionResponse = await fetch(`${homeDataApi}`);

      const restaurantsListResponse = await fetch(`${allRestaurants}`);

      if (!sectionResponse.ok && !restaurantsListResponse.ok) {
        throw new Error("Erro na requisição");
      }

      const sectionResult = await sectionResponse.json();
      setSectionData(sectionResult.data);
      
      const restaurantsListResult = await restaurantsListResponse.json();
      setRestaurantListData(restaurantsListResult.data);
      
    };

    fetchData();
  }, [allRestaurants, homeDataApi]);
  
  return (
    <>
      <Hero title={sectionData?.Title} subtitle={sectionData?.Subtitle} description={sectionData?.Description}/>
      <Content contentCards={restaurantListData?.map((restaurant, index) => (
        <ContentCad key={restaurant.id} restaurantName={`${index + 1} - ${restaurant?.Name}`} description={restaurant?.Description} createdAt={restaurant?.createdAt}/>
      ))}/>
      
    </>
    );
    
};
