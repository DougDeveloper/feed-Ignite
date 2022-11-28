import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"


export function Post({ author, publishedAt }){
// aqui estamos formatando a data do post
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'de' uuuu 'às' HH:mm'h'", {
        locale: ptBR
    }).format(publishedAt)

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
    })

    return(
        <article className={styles.post}>
            {/* início do cabeçalho do post */}
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                
                <time title={publishedDateFormatted} dateTime="2022-11-19 03:30:00">
                    {publishedDateRelativeToNow}
                </time>
            </header>
            {/* fim do cabeçalho do post */}

            {/* início do conteúdo do post */}
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{" "}<a>jane.design/doctorcare</a></p>
                <p>
                    <a>#novoprojeto</a>{" "}
                    <a>#nlw</a>{" "}
                    <a>#rocketseat</a>
                </p>
            </div>
            {/* fim do conteúdo do post */}

            {/* início da caixa para comentar */}
            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                
                <textarea
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type="submite">Publicar</button>
                </footer>
            </form>
            {/* fim da caixa para comentar */}

            {/* início dos comentários postados*/}
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
            {/* fim dos comentários postados*/}


        </article>
    )
}