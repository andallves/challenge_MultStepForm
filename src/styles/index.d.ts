import { ComponentClass } from 'react';
import { ThemedStyledComponentsModule } from 'styled-components';

declare module 'styled-components' {
  export interface ThemedStyledComponentsModule<T> {
    createGlobalStyle(
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): ComponentClass;
  }

  export function createGlobalStyle(
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ): ComponentClass;
};
