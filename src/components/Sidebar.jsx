import { PencilLine } from "phosphor-react"

import styles from "./Sidebar.module.css"

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            
            <img className={styles.cover} src="https://images.unsplash.com/photo-1616004655123-818cbd4b3143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/DougDeveloper.png" />
                <strong>Douglas Ferreira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil</a>
            </footer>

        </aside>
    )
}