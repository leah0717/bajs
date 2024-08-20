import React from 'react'
import Typography from './Typography'

describe('<Typography>', () => {
    it('render typography component', () => {
        cy.mount(
            <Typography>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
            </Typography>,
        )
    })
})
