'use client';

import { createGlobalStyle } from 'styled-components';
import { poppinsRegular } from './local-fonts';
import { colors } from './colors';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        font-family: ${poppinsRegular.style.fontFamily};
        color: ${colors.textPrimary};
        font-size: 15px;
    }

    button {
        &:hover {
            cursor: pointer;
        }
    }
`;

export default GlobalStyles;
