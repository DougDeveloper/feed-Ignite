import styles from "./Avatar.module.css"

                        //hasBorder possui, agora, um valor padrão, o true. aqui estamos
                        // desestruturando o Avatar e pegando somente essas duas propriedades
export function Avatar({ hasBorder = true, src }){
    return(
                        //se o avatar possui borda, aplique-se, se não, sem borda.
        <img className={hasBorder ? styles.AvatarWithBorder : styles.Avatar} src={src} />
    )
}