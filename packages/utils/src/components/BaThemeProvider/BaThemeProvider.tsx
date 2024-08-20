import React from 'react'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'

interface Theme {}

interface BaThemeProps {
    children?: React.ReactNode
    theme?: Theme
}

const BaThemeProvider = ({ children, theme }: BaThemeProps) => {
    return (
        <StyleThemeProvider theme={theme as Theme}>
            {children}
        </StyleThemeProvider>
    )
}

export default BaThemeProvider
