import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Menu = styled.ul`
ul{
    align-items: left;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    li{
      padding: 2rem;
      margin: 1rem;
      a#noticia{
        background-color: ${colors.white};
        color: ${colors.black};
      }
      a#topico{
        background-color: ${colors.menu};
        color: ${colors.white};
      }
      a#descricao{
        background-color: ${colors.menuI};
        color: ${colors.black};
      }
    }
   
  }
  `