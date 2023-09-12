import styled from "styled-components"
import { colors, gaps } from "../../style"

export const ButtonMonth = styled.button`
    padding: ${gaps.gapDefault} ${gaps.gapSmall};
    background-color: ${colors.color3};
    color: ${colors.color2};
    border: none;
    border-radius: ${gaps.gapDefault};
    font-weight: 600;
    text-transform: capitalize;
`