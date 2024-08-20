import React from 'react'
import { styled } from 'styled-components'

interface IconProps {
    stroke?: string
}

const BaAnimatedLoadingIcon = styled.svg<IconProps>`
    height: 2rem;
    width: 2rem;
    stroke: green;
`

const AnimatedLoadingIcon = ({ stroke }: IconProps) => {
    return (
        <BaAnimatedLoadingIcon>
            <circle
                cx="25"
                cy="25"
                fill="transparent"
                stroke={stroke}
                strokeWidth="3"
                r="15"
                strokeDasharray="47.123889803846895 16.041189668484067"
            >
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 25 25;360 25 25"
                    keyTimes="0;1"
                ></animateTransform>
            </circle>
        </BaAnimatedLoadingIcon>
    )
}

export default AnimatedLoadingIcon
