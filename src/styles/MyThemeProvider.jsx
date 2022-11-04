import { ThemeProvider } from "styled-components";
import {theme } from './theme'
import { GlobalStyles } from "./global-styles";
import P from 'prop-types'

export const MyThemeProvider = ({children}) => {
  return <ThemeProvider theme={theme}>
    <GlobalStyles/>
    {children}
  </ThemeProvider>
}

MyThemeProvider.protoTypes = {
  children: P.node.isRequired
}
