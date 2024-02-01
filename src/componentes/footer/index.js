import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footerBox}>
            <h1 className={styles.footerTitle}>CONSTRUTORA AFFONSECA INTERNACIONAL</h1>
            <div className={styles.footerDiv}>
                <div className={styles.footerSubDiv}>
                    <h3 className={styles.footerSubDivTitle}>RIO DE JANEIRO/RJ</h3>
                    <p className={styles.footerSubDivText}><a className={styles.footerLink} href='https://maps.app.goo.gl/ECRp4496uGW9zZkT8' target='_blank' rel='noreferrer'>O2 Corporate & Offices - Av. José Silva de Azevedo Neto, 200 Barra da Tijuca. BL 06 - Sl. 417. CEP: 22.775-056</a></p>
                </div>
                <div className={styles.footerSubDiv}>
                    <h3 className={styles.footerSubDivTitle}>CONTATO</h3>
                    <p><a className={styles.footerLink} href='https://wa.me//5517997935439?text=Olá,%20tudo%20bem?%20Gostaria%20de%20falar%20com%20vocês.%20Tem%20alguém%20disponível?' target='_blank' rel='noreferrer'>+55 17 99793-5439</a></p>
                    <p className={styles.footerSubDivText}><a href="mailto:contato@construtoraaffonseca.com.br" className={styles.footerLink}>contato@construtoraaffonseca.com.br</a></p>
                </div>
            </div>
            <div className={styles.footerDivTwo}>
                <span className={styles.footerSpan}>CNPJ: 30.895.544/0001-20</span>
                <span className={styles.footerSpanTwo}>Todos os direiros reservados @2023</span>
            </div>
        </footer>
    )
}