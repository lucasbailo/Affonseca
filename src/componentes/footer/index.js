import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footerBox}>
            <h1 className={styles.footerTitle}>CONSTRUTORA AFFONSECA INTERNACIONAL</h1>
            <div className={styles.footerDiv}>
                <div className={styles.footerSubDiv}>
                    <h3>RIO DE JANEIRO/RJ</h3>
                    <p className={styles.footerSubDivText}>O2 Corporate & Offices - Av. José Silva de Azevedo Neto, 200 Barra da Tijuca. BL 06 - Sl. 417. CEP: 22.775-056</p>
                </div>
                <div className={styles.footerSubDiv}>
                    <h3>CONTATO</h3>
                    <p>+55 17 99621-0402<br/>contato@construtoraaffonseca.com.br</p>
                </div>
            </div>
            <div className={styles.footerDivTwo}>
                <span className={styles.footerSpan}>CNPJ: 30.895.544/0001-20</span>
                <span className={styles.footerSpanTwo}>Todos os direiros reservados @2023</span>
            </div>
        </footer>
    )
}