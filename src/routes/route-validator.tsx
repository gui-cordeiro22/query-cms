// Dependencies
import { Suspense, FunctionComponent } from 'react';

type RouteValidatorProps = {
  component: FunctionComponent;
};

export const RouteValidator: FunctionComponent<RouteValidatorProps> = ({
  component: Component,
}) => {
  return (
    <Suspense>
      <Component />
    </Suspense>
  );
};
