import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
ul{
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  margin: 2rem;
  @media (max-width: 1010px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }
  li{
    padding: 3rem;
    background-color: ${colors.texto};
  }
  list-style-type: none;
}
`


