import styled from "styled-components"
import { gaps } from "../../style"

export const SaleDiv = styled.div`
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: ${gaps.gapDefault};
    margin-bottom: ${gaps.gapSmall};
    align-items: center;

    .sale-price {
        justify-self: end;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`