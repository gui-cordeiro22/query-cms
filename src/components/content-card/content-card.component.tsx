// Dependencies
import { FunctionComponent } from "react";


// Styles
import { Container, ContentWrapper, CreatedAt, Description, Name } from "./content-card.styles";

// Types
import { ContentCardProps } from "./content-card.types";

export const ContentCad: FunctionComponent<ContentCardProps> = ({restaurantName,description,createdAt}) => {
    return (
        <Container>
            <ContentWrapper>
                <Name>
                    {restaurantName}
                </Name>

                <Description>
                    {description}
                </Description>
                
                <CreatedAt>
                    {createdAt}
                </CreatedAt>
                    
            </ContentWrapper>
        </Container>
    )
}