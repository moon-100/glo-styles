import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`  
  ${reset}
  * {
    box-sizing: border-box;
    font-family: 'Spoqa Han Sans Neo', 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif' !important;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  body {
    background-color: #181924;
    color: white;
    font-size: 0.875rem;
    overflow: hidden;
  }

  .capitalize {
    text-transform: capitalize;
  }
`

export default GlobalStyle
