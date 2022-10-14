import 'styled-components';
import { themeSC } from './theme';

declare module 'styled-components' {
  type ThemeType = typeof themeSC

  export interface DefaultTheme extends ThemeType { }
}
