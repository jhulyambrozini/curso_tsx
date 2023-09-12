import styled from "styled-components"
import { colors, gaps } from "../../style"

export const InputGroup = styled.div`
    color: ${colors.color2};
    padding: ${gaps.gapSmall} .75rem;
    background-color: ${colors.color4};
    border-radius: ${gaps.gapDefault};

    input {
        border: none;
        font-family: monospace;
        padding: ${gaps.gapSmall} .75rem;
        background-color: ${colors.color4};
        border-radius: ${gaps.gapDefault};
    }

    label {
        display: block;
        margin-bottom: ${gaps.gapSmall};
        font-weight: 600; 
    }
`