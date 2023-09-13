import styled from "styled-components"
import { colors, gaps } from "../../style"
import { NavLink } from "react-router-dom"

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

        .navLink, & a {
            flex: 1;
            font-size: 1rem;
            text-decoration: none;
            color: ${colors.color1};
            padding: ${gaps.gapSmall} 0;
            margin: 0%.25rem 0;
        }

        &:hover span {
            background-color: ${colors.color3};
        }

        @media (max-width: 700px) {
            & a, .navLink {
                font-size: 0.875rem;
            }
        }
    }

    @media (max-width: 700px) {
        ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

`