import * as S from "./styles";
export interface ICard {
  nome: string
  conteudo: string
}
export const Card = ({ nome,conteudo }: ICard) => {
  return (
    <S.Aside>
      <p>{nome}: {conteudo}</p>
    </S.Aside>
  );
};
