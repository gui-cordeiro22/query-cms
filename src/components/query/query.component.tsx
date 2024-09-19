// Dependencies
import { FunctionComponent, useEffect, useState } from "react";
import { Item, SiteClient } from "datocms-client";

// Service
import { API_Token } from "../../services/datoClient";

// Styles
import {
  Container,
  ContentWrapper,
  Loader,
  LoaderElement,
  Title,
} from "./query.styles";

export const Query: FunctionComponent = () => {
  const [data, setData] = useState<Item[]>([]);
  const [dataProduct, setDataProduct] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const client = new SiteClient(API_Token);

      const recordsInformation = await client.items.all({
        filter: {
          type: "information",
        },
      });

      const recordsProduct = await client.items.all({
        filter: {
          type: "product",
        },
      });

      setData(recordsInformation);

      setDataProduct(recordsProduct);
    };

    fetchData();
  }, []);

  if (!data.length)
    return (
      <Loader>
        <LoaderElement />
      </Loader>
    );

  return (
    <Container>
      <ContentWrapper>
        {data.map((item) => (
          <Title>{item?.titlesection}</Title>
        ))}

        {dataProduct.map((product) => (
          <p>{`${product?.productName} - R$${product?.productPrice}`}</p>
        ))}
      </ContentWrapper>
    </Container>
  );
};
