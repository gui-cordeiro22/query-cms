// Dependencies
import { FunctionComponent } from "react";


// Styles
import { Container, ContentWrapper, Details, Description, Name, DetailsWrapper } from "./content-card.styles";

// Types
import { ContentCardProps } from "./content-card.types";

export const ContentCard: FunctionComponent<ContentCardProps> = ({restaurantName,description,createdAt,updatedAt}) => {
    return (
        <Container>
            <ContentWrapper>
                <Name>
                    {restaurantName}
                </Name>

                <Description>
                    {description}
                </Description>
                
                <DetailsWrapper>
                    <Details>
                        {createdAt}
                    </Details>

                    <Details>
                        {updatedAt}
                    </Details>
                </DetailsWrapper>
                    
            </ContentWrapper>
        </Container>
    )
}