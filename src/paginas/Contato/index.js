import Formulario from "componentes/formulario";
import styles from './Contato.module.css'

export default function Contato() {
    return(
        <main className={styles.boxContato}>
            <h1>ENTRE EM CONTATO CONOSCO</h1>
            <Formulario />
        </main>
        
    )
}