import styles from './SobreNos.module.css'
import imagemFundoSobre from 'imagens/imagemFundoSobre.png'

export default function Sobre() {
    return (
        <main>
            <section className={styles.firstSection}>
                <img className={styles.imagemFundo} src={imagemFundoSobre} alt='Foto de fundo' />
                <div className={styles.boxSobreNos}>
                    <h1>QUEM SOMOS</h1>
                    <div className={styles.sobreNosDiv}>
                        <div className={styles.subDiv}>
                            <p>Fundada em 1951 no coração do Rio de Janeiro, a Construtora Affonseca é sinônimo de expertise em obras de grande complexidade e escala. Com sede no Rio de Janeiro/RJ e escritório em Brasília/DF, atuamos em obras públicas e privadas.</p>
                            <p>Nossa jornada nos levou a explorar diversos desafios, moldando um conhecimento inestimável que nos permite superar obstáculos técnicos e entregar resultados excepcionais.</p>
                            <p>O <b>Grupo AFFONSECA</b>, com mais de 60 anos de vida, participou de algumas das mais importantes obras,que em seu campo marcaram o desenvolvimento do BRASIL.</p>
                        </div>
                        <div className={styles.subDiv}>
                            <p>Com base em sua experiência, solidez e tradição, o Grupo expandiu suas operações para além do território brasileiro, participando de importantes obras no exterior.</p>
                            <p>A <b>CONSTRUTORA AFFONSECA INTERNACIONAL LTDA</b> foi fundada em 1980, voltada inicialmente para a exportação de serviços de engenharia e, posteriormente, atuando também no território nacional.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.secondSectionSobre}>
                <div className={styles.boxAbordagem}>
                    <h1>NOSSA ABORDAGEM</h1>
                    <div className={styles.sobreNosDiv}>
                        <div className={styles.subDiv}>
                            <p>Acreditamos que cada projeto é uma oportunidade de criar soluções inovadoras. Nossa abordagem centrada no cliente e focada na qualidade, assegura que cada empreendimento receba atenção meticulosa desde o planejamento até a entrega. Com parcerias estratégicas, tecnologia de ponta e um compromisso inabalável com a excelência, levamos a construção a um novo patamar.</p>
                        </div>
                        <div className={styles.subDiv}>
                            <p>Com base em sua experiência, solidez e tradição, o Grupo expandiu suas operações para além do território brasileiro, participando de importantes obras no exterior.</p>
                            <p>A <b>CONSTRUTORA AFFONSECA INTERNACIONAL LTDA</b> foi fundada em 1980, voltada inicialmente para a exportação de serviços de engenharia e, posteriormente, atuando também no território nacional.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.thirdSectionSobre}>
                <div className={styles.boxAbordagem}>
                    <h1>CONSTRUINDO UM FUTURO SÓLIDO E SUSTENTÁVEL</h1>
                    <div className={styles.sobreNosDiv}>
                        <div className={styles.subDiv}>
                            <p>Nossa história é um conto de sucesso fundamentado em solidez e tradição. A base de nossa experiência no Brasil nos permitiu expandir nossas operações para entregar importantes obras públicas e privadas no exterior. De obras rodoviárias a projetos de urbanização e saneamento, nossa marca está presente em empreendimentos que unem comunidades e nações.</p>
                        </div>
                        <div className={styles.subDiv}>
                            <p>Com mais de seis décadas de história, a Construtora Affonseca tem liderado o cenário da construção, deixando sua marca no desenvolvimento do Brasil e além. Fundada em 1951 no Rio de Janeiro, expandimos nossas fronteiras para atuar no exterior, deixando uma marca sólida no Chile e na Bolívia.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}