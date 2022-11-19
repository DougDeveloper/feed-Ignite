import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/DougDeveloper.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}></div>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Douglas Ferreira</strong>
                            <time title="19 de novembro de 2022 às 15:30" dateTime="2022-11-19 03:30pm">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}