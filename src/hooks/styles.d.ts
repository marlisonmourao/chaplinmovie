import styled from 'styled-components';

import theme from '../theme/index';

declare module "styled-components" {
  type themeType = typeof theme;

  export interface DefaultTheme extends themeType {}

}