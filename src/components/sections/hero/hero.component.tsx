// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper, Subtitle, Title } from "./hero.styles";

// Types
import { HeroProps } from "./hero.types";

export const Hero: FunctionComponent<HeroProps> = ({title,subtitle}) => {
    return (
        <Container>
            <ContentWrapper>
                <Title>
                    {title}
                </Title>
                
                <Subtitle>
                    {subtitle}
                </Subtitle>
            </ContentWrapper>
        </Container>
    );
}