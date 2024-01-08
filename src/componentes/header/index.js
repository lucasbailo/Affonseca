import styles from './Header.module.css'
import logotipo from 'imagens/logotipo.svg'
import MenuLink from 'componentes/MenuLink'

export default function Header() {

    return(
        <header className={styles.headerContainer}>
            <div className={styles.leftContainer}>
                <img src={logotipo} alt='logotipo'/>
                <ul>
                    <MenuLink to='/'>Home</MenuLink>
                    <MenuLink to='/sobrenos'>Sobre</MenuLink>
                    <MenuLink to='/contato'>Contato</MenuLink>   
                </ul>
            </div>
            <h4>Rio de Janeiro</h4>
        </header>
    )
}