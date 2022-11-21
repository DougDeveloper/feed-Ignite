import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post(){
    return(
        <article className={styles.post}>
            {/* início do cabeçalho do post */}
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/DougDeveloper.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Douglas Ferreira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="19 de novembro de 2022 às 15:30" dateTime="2022-11-19 03:30pm">Publicado há 1h</time>
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