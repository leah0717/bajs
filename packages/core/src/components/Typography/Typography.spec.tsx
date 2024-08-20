import React from 'react'
import { BaThemeProvider, BaLightTheme, BaDarkTheme } from '@bajs/utils'

import Layout from '../Layout/Layout'
import Typography from './Typography'

describe('<Typography>', () => {
    it('render typography component', () => {
        cy.mount(
            <>
                <BaThemeProvider theme={BaLightTheme}>
                    <Layout>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </Typography>
                    </Layout>
                </BaThemeProvider>

                <BaThemeProvider theme={BaDarkTheme}>
                    <Layout>
                        <Typography>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </Typography>
                    </Layout>
                </BaThemeProvider>
            </>,
        )
    })
})
