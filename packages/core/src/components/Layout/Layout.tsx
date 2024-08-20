import React from 'react'
import { styled } from 'styled-components'

interface BaLayoutProps {
    children?: React.ReactNode
}

const BaLayout = styled.div`
    background-color: ${props => props.theme.mode};
`

const Layout = ({ children }: BaLayoutProps) => {
    return <BaLayout>{children}</BaLayout>
}

export default Layout
