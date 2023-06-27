import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
