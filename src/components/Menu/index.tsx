import * as S from "./styles"

export function Menu() {
    return (
        <S.Menu>
            <li>
                <a id="noticia" href="/">Notícias</a>
            </li>
            <li>
                <a id="topico" href="/">Tópicos</a>
            </li>
            <li>
                <a id="descricao" href="/List">Descrição</a>
            </li>
        </S.Menu>
    )
}