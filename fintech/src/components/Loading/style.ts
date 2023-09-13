import styled, { keyframes } from "styled-components"
import { colors, gaps } from "../../style"

const LoadingAnimation = keyframes`
    to {
        transform: rotate(360deg);
    }
`

export const LoadingIcon = styled.div`
    border: ${gaps.gapSmall} solid ${colors.color2};
    border-right-color: ${colors.color4};
    width: ${gaps.gapDefault};
    height: ${gaps.gapDefault};
    border-radius: 50%;
    animation: ${LoadingAnimation} 1s inifinite;
`

