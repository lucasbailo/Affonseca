import styles from './Header.module.css'
import logotipo from 'imagens/logotipo.svg'
import logotipoMobile from 'imagens/logotipoMobile.svg'
import MenuLink from 'componentes/MenuLink'

export default function Header() {

    return(
        <header className={styles.headerContainer}>
            <div className={styles.leftContainer}>
                <img className={styles.logotipo} src={logotipo} alt='Logotipo Affonseca'/>
                <img className={styles.logotipoMobile} src={logotipoMobile} alt='Logotipo Affonseca Mobile'/>
                <ul className={styles.linksContainer}>
                    <MenuLink to='/'>Home</MenuLink>
                    <MenuLink to='/sobrenos'>Sobre</MenuLink>
                    <MenuLink to='/contato'>Contato</MenuLink>   
                </ul>
            </div>
            <h4 className={styles.rioTag}><a className={styles.headerLink} href='https://maps.app.goo.gl/ECRp4496uGW9zZkT8' target='_blank' rel='noreferrer' >Rio de Janeiro</a></h4>
        </header>
    )
}