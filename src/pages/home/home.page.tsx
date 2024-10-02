// Dependencies
import { FunctionComponent, useEffect, useState } from "react";
import {format} from "date-fns";

// Components
import { Hero } from "../../components/sections/hero";
import { Content } from "../../components/sections/content";
import { ContentCard } from "../../components/content-card";
import { LoaderComponent } from "../../components/elements/loader";

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
      updatedAt: string;
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

  if (!sectionData && !restaurantListData) {
    return <LoaderComponent />
  }
  
  return (
    <>
      <Hero title={sectionData?.Title} subtitle={sectionData?.Subtitle} description={sectionData?.Description}/>
      <Content contentCards={restaurantListData?.sort((a,b) => a.id - b.id).map(restaurant => (
        <ContentCard key={restaurant.id} restaurantName={`${restaurant.id} - ${restaurant?.Name}`} description={restaurant?.Description} createdAt={`Criado em: ${format(new Date(restaurant?.createdAt), "dd/MM/yyyy")}`} updatedAt={`Última atualização em: ${format(new Date(restaurant?.updatedAt), "dd/MM/yyyy 'às' HH:mm:ss")}`}/>
      ))}/>
      
    </>
    );
    
};
