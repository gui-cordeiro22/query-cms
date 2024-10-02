// Dependencies
import { FunctionComponent } from "react";

// Styles
import { Container, ContentWrapper } from "./content.styles";

// Types
import { ContentProps } from "./content.types";

export const Content: FunctionComponent<ContentProps> = ({contentCards}) => {
    return (
        <Container>
            <ContentWrapper>
                {contentCards}
            </ContentWrapper>
        </Container>
    );
}