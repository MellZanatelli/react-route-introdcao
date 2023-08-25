import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  display: inline-flex;
  justify-content: center;
  
  h1{
      width: 100%;
      padding: 3rem;
      background-color: ${colors.titulo};
    }
  
`