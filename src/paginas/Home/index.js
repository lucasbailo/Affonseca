import fotoHome from 'imagens/Affonseca.svg';
import styles from './Home.module.css'
import imagemFundo from 'imagens/imagemFundo.png'
import apresentacao from './Apresentação Affonseca.pdf'

export default function Home() {
    return(
        <main className={styles.mainContainer}>
            <img className={styles.homeImage} src={fotoHome} alt='Foto principal'/>
            <section className={styles.firstSection}>
                <img className={styles.imagemFundo} src={imagemFundo} alt='Foto de fundo' />
                <div className={styles.boxSobre}>
                    <h1>SOBRE A CONSTRUTORA</h1>
                    <p className={styles.textServicos}>Com mais de 60 anos de liderança no setor de construção, a Construtora Affonseca é uma referência em excelência, inovação e comprometimento. Nossa trajetória é marcada por projetos icônicos que moldaram o cenário brasileiro e internacional, transformando sonhos em estruturas sólidas e duradouras.</p>
                    <a 
                        href={apresentacao}
                        download='Apresentação Affonseca'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className={styles.button}>Baixar Apresentação</button>
                    </a>
                </div>
            </section>
            <section className={styles.secondSection}>
                <div className={styles.servicosDivOne}>
                    <h1>SERVIÇOS</h1>
                    <p>Nossa história é um conto de sucesso fundamentado em solidez e tradição. A base de nossa experiência no Brasil nos permitiu expandir nossas operações para entregar importantes obras públicas e privadas no exterior. De obras rodoviárias a projetos de urbanização e saneamento, nossa marca está presente em empreendimentos que unem comunidades e nações.</p>
                    <button className={styles.button}>Contato</button>
                </div>
                <div className={styles.servicosDivTwo}>
                    <span className={styles.servicosTags}>Obras Rodoviárias</span>
                    <span className={styles.servicosTags}>Obras Aeroportuárias</span>
                    <span className={styles.servicosTags}>Urbanização e Saneamento</span>
                    <span className={styles.servicosTags}>Construção Civil</span>
                    <span className={styles.servicosTags}>Pontes e Barragens</span>
                </div>
            </section>
        </main>
    )
}