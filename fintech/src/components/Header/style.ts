import styled from "styled-components"
import { gaps } from "../../style"

export const Title = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${gaps.gapDefault};

    @media (max-width: 1000px) {
      
        grid-template-columns: 1fr;
    
        &:last-child {
            grid-row: 1;
        }
    }
`