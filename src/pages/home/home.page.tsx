// Dependencies
import { FunctionComponent, useEffect, useState } from "react";
import {format} from "date-fns";

// Components
import { Hero } from "../../components/sections/hero";
import { Content } from "../../components/sections/content";
import { ContentCard } from "../../components/content-card";
import { LoaderComponent } from "../../components/elements/loader";

// Services
import { homeDataApi, allRestaurants, apiToken } from "../../services/apiUrl";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const sectionResponse = await fetch(`${homeDataApi}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
          },
        });

        
        const restaurantsListResponse = await fetch(`${allRestaurants}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${apiToken}`,
            "Content-Type": "application/json",
          },
        });

        
        if (!sectionResponse.ok || !restaurantsListResponse.ok) {
          throw new Error("Erro na requisição");
        }

       
        const sectionResult = await sectionResponse.json();
        setSectionData(sectionResult.data);

        const restaurantsListResult = await restaurantsListResponse.json();
        setRestaurantListData(restaurantsListResult.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  if (!sectionData && !restaurantListData) {
    return <LoaderComponent />
  }
  
  return (
    <>
      <Hero title={sectionData?.Title} subtitle={sectionData?.Subtitle} description={sectionData?.Description}/>
      <Content contentCards={restaurantListData?.sort((a,b) => a.id - b.id).map(restaurant => (
        <ContentCard key={restaurant.id} restaurantName={`${restaurant.id} - ${restaurant?.Name}`} description={restaurant?.Description} createdAt={`Criado em: ${format(new Date(restaurant?.createdAt), "dd/MM/yyyy")}`} updatedAt={`Última atualização em: ${format(new Date(restaurant?.updatedAt), "dd/MM/yyyy 'às' HH:mm")}`}/>
      ))}/>
      
    </>
    );
    
};
