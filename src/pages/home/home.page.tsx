// Dependencies
import React, { FunctionComponent, useEffect, useState } from "react";
import {format} from "date-fns";

// Components
import { Hero } from "../../components/sections/hero";
import { Content } from "../../components/sections/content";
import { ContentCard } from "../../components/content-card";
import { LoaderComponent } from "../../components/elements/loader";

// Services
import { restAPI } from "../../services/apiUrl";

// Types
import { RestaurantListDataTypes, SectionDataTypes } from "./home.types";

export const HomePage: FunctionComponent = () => {
  const [sectionData, setSectionData] = useState<SectionDataTypes>();

  const [restaurantListData, setRestaurantListData] = useState<RestaurantListDataTypes>();

  useEffect(() => {
    const fetchData = async () => {
      try {

        const sectionResponse =  await restAPI.get(`/home`)

        const restaurantsListResponse = await restAPI.get(`/restaurants`)

        if (sectionResponse.status !== 200 || restaurantsListResponse.status !== 200) {
          throw new Error("Erro na requisição");
        }

        setSectionData(sectionResponse.data.data);

        setRestaurantListData(restaurantsListResponse.data.data);
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
    <React.Fragment>
      <Hero title={sectionData?.Title} subtitle={sectionData?.Subtitle} />
      <Content contentCards={restaurantListData?.sort((a,b) => a.id - b.id).map(restaurant => (
        <ContentCard key={restaurant.id} restaurantName={`${restaurant.id} - ${restaurant?.Name}`} description={restaurant?.Description} createdAt={`Criado em: ${format(new Date(restaurant?.createdAt), "dd/MM/yyyy")}`} updatedAt={`Última atualização em: ${format(new Date(restaurant?.updatedAt), "dd/MM/yyyy 'às' HH:mm")}`}/>
      ))}/>

    </React.Fragment>
    );

};
