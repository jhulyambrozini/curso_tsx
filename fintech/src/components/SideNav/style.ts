import styled from "styled-components"
import { colors, gaps } from "../../style"

export const SidenavContainer = styled.nav`
    
    li {
        display: flex;
        align-items: center;
        gap: ${gaps.gapSmall};

        & span {
            width: 2rem;
            height: 2rem;
            background-color: ${colors.color4};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: ${gaps.gapDefault};
        }

        & a {
            flex: 1;
            font-size: 1rem;
            text-decoration: none;
            color: ${colors.color1};
            padding: ${gaps.gapSmall} 0;
        }

        &:hover span {
            background-color: ${colors.color3};
        }
    }

`