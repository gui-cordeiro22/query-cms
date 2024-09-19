// Dependencies
import { FunctionComponent, Fragment } from "react";

// Styles
import { GlobalStyle } from "./styles/global";
import { ApplicationRoutes } from "./routes";

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ApplicationRoutes />
    </Fragment>
  );
};
