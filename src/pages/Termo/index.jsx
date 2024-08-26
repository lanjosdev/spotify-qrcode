// Funcionalidades / Hooks / Libs:
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { POST_API } from '../../API/requestApi';
import Cookies from "js-cookie";

// Components:
import { Header } from '../../components/Header';

// Assets:

// Estilo:
import './style.css';


export default function Termo() {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    

    useEffect(()=> {
        function verificaCookie() {
            const hasCookie = Cookies.get('sessionCrystalBiz');

            if(hasCookie) {
                console.log('Já participou');
                navigate('/participou');
            } 
            else { 
                console.log('Nova participação'); 
            }
        }
        verificaCookie();
    }, [navigate]);


    async function handleAceitaTermosRequest() {
        setLoading(true);

        const hasCookie = Cookies.get('sessionCrystalBiz');
        if(hasCookie) {
            console.log('Já participou');
            setLoading(false);
            navigate('/participou');
            return;
        }

        let sessionKey = newSessionKey();
        let participated = 0;

        try {
            const response = await POST_API(sessionKey, participated);
            console.log('SUCESSO REQUEST API!');
            console.log(response.data);
      
            console.log('Salvando cookie...');
            Cookies.set('sessionCrystalBiz', JSON.stringify(sessionKey), {
                // expires: 1/144 //10min,
                expires: 1, // Expira em 1dia (24h)
                sameSite: 'None',
                secure: true,
            });

            console.log('Direcionando...');
            direcionarURLexterna();
        } 
        catch(erro) {
            console.log('ERRO na API: ', erro);
        } 
        // finally {
        //   direcionarURLexterna();
        // } 

        console.log('fim handleAceitaTermosRequest()');
        //// setLoading(false);   
    }

    function direcionarURLexterna(temp = 500) {
        setTimeout(()=> {
            window.location.href = "https://urldefense.com/v3/__https://www.coca-cola.com/br/pt/brands/crystal__;!!JhKdOwKRoV0QTA!r9x6SiEdCll3QE4CeAr-dzjWDBvTz-dO4OkFinDn3E943-kMveyHAn7PAQKjeyvnr-OsCpdBmp_vDYvUSVuzkbUc8Prfi3QCrnFbmg$";   
            // console.log('$direciona...')     
            setLoading(false); ////
        }, temp);
    }

    function newSessionKey() {
        let session_key = null;
    
        let randomNumber = (Math.random() * 100 ) + 1;
        let date = (Date.now() / 1000) + randomNumber;
        let dateEncoded = btoa(""+date);
        session_key = dateEncoded;
        // console.log(session_key);
        
        return session_key;
    }


    return (
        <div className='Termo'>
  
          <Header />
  
          <main>

            <div className="content grid">

                <h3>Termos e Condições Gerais de Uso</h3>
                <h3 className='nao-aceite'>Atenção</h3>
            
                <div className="termo-container">
                    <div className="termo-texto">
                    <p>
                        > EMPRESA PROMOTORA: <br />
                        • O presente regulamento apresenta e disciplina a ativação de abrigo de ônibus especial promovida pela RECOFARMA INDUSTRIA DO AMAZONAS LTDA, pessoa jurídica de direito privado, inscrita no CNPJ sob o n° 61.454.393/0006-02, com sede à Rio de Janeiro – Rio de Janeiro. <br />
                        • A RECOFARMA INDUSTRIA DO AMAZONAS LTDA é a detentora dos direitos para os fins propostos na Campanha.> ELEGIBILIDADE: <br />
                        • A presente Campanha é destinada a todo e qualquer consumidor desde que pessoa física, capaz, e com idade igual ou superior a 18 (dezoito) anos (ou menores de 18 (dezoito) anos desde que emancipados legalmente, conforme Código Civil Brasileiro), residente e domiciliado no Brasil, que preencha as condições estabelecidas neste Regulamento ("Consumidor").
                    </p>
                    <br />

                    <p>
                        > REGULAMENTO <br />
                        • A campanha é uma iniciativa organizada pela RECOFARMA INDUSTRIA DO AMAZONAS LTDA para promover o divulgação das águas Crystal. <br />
                        • O projeto se trata de uma dinâmica, onde o objetivo dos participantes é dançar por aproximadamente 1 minuto e 30 segundos, para ganhar um brinde. <br />
                        • A dinâmica só poderá ser iniciada através da leitura de um QRCode, que fará a captação do IP Mask do celular, somente com a finalidade de organizar e limitar o número de participantes na ação, a RECOFARMA INDUSTRIA DO AMAZONAS LTDA não armazenará, sob qualquer hipótese o dado coletado. <br />
                        • Todos os usuários que participarem da ação e finalizarem a dinâmica, poderão retirar a o brinde, que serão liberados de forma randômica. <br />
                        • Os brindes que serão disponibilizados serão água saborizada, água natural e água com gás.
                    </p>
                    <br />

                    <p>
                        > AUTORIZAÇÃO DE USO DE IMAGEM <br />
                        • Neste ato, e para todos os fins de direito, você autoriza através do aceite deste Termo o uso da sua imagem para fins de divulgação e publicidade da Campanha, em caráter definitivo e gratuito, de forma total, definitiva, irretratável e irrevogável os direitos de uso, edição, inserção, exibição, sincronização, reprodução e exploração comercial da fotografia/vídeo especificamente para a Campanha, bem como licencia e autoriza à RECOFARMA INDUSTRIA DO AMAZONAS LTDA também de forma total, definitiva, irretratável e irrevogável os direitos de uso de sua imagem para serem utilizados pela RECOFARMA INDUSTRIA DO AMAZONAS LTDA ou por terceiros autorizados por esta, no todo ou em parte nesta Campanha. <br />
                        • Você concorda que a RECOFARMA INDUSTRIA DO AMAZONAS LTDA será proprietária exclusiva de todos os direitos autorais e quaisquer outros direitos sobre a Campanha, e que a RECOFARMA INDUSTRIA DO AMAZONAS LTDA seus licenciados, sucessores e/ou cessionários, bem como terceiros autorizados pela RECOFARMA INDUSTRIA DO AMAZONAS LTDA terão o direito de usar, editar, inserir exibir, transmitir, licenciar, comercializar e distribuir a Campanha pelo prazo definido neste Termo contendo ou não sua imagem, no todo ou em parte, em todos os meios de comunicação, em todas e quaisquer formas de mídia hoje ou no futuro existentes, incluindo, mas não se limitando a, todas as formas de rádio e de televisão seja aberta ou fechada/por assinatura e qualquer outra forma de televisão por assinatura, telefonia celular, banda larga, sem fio, (conjuntamente, TV Every-where) e outras plataformas de distribuição que integrem ou venham a integrar o conceito de TV Everywhere, bem como via internet (mídia sem fio wireless), video sob demanda e todas as suas modalidades, Catch Up, em salas de cinema, através de fonogramas (incluindo cassetes, CDs, discos a laser e DVDs, e a veiculação do fonograma em rádios), em circuito cinematográfico, circuito fechado, inclusão em obras audiovisuais em geral, programas de computador, em publicações impressas em geral. <br />
                        • Você ainda reconhece e concorda que a RECOFARMA INDUSTRIA DO AMAZONAS LTDA poderá usar sua imagem de acordo com os termos e condições estabelecidos nestes T&C havendo compensação em razão da exploração comercial de sua imagem, bem como pela utilização de marca, incluindo os seus elementos nominativos necessários à sua inserção em sua promoção de captação de vídeo, seja a que tempo e a que título for, em todas as mídias, modalidades de utilização e territórios estabelecidos neste instrumento, sem limite máximo quanto ao número de exibições, ficando a RECOFARMA INDUSTRIA DO AMAZONAS LTDA responsável por qualquer consequência decorrente da utilização de sua imagem direta e exclusivamente pela RECOFARMA INDUSTRIA DO AMAZONAS LTDA, nos termos deste T&C. <br />
                        • Designar as disposições previstas nestes T&C que criam para a RECOFARMA INDUSTRIA DO AMAZONAS LTDA qualquer obrigação de utilização econômica de sua imagem na Campanha, não sendo devido a você, na ausência de utilização pela RECOFARMA INDUSTRIA DO AMAZONAS LTDA, qualquer direito sobre o mesmo. <br />
                        • O aceite do T&C garante que: (i) é o único titular de todos os direitos da imagem; (ii) tem plenos poderes e autoridade para conceder à RECOFARMA INDUSTRIA DO AMAZONAS LTDA todos os direitos contemplados nestes T&C; (iii) o uso da imagem pela RECOFARMA INDUSTRIA DO AMAZONAS LTDA, conforme estabelecido acima, não viola ou infringe, nem tampouco violará ou infringirá os direitos de qualquer pessoa física ou jurídica e que tal uso autorizado por meio do presente não dará origem a quaisquer alegações de violação, difamação, invasão de privacidade, publicidade, pedidos de pagamento de taxas de reutilização ou residuais, ou quaisquer outras reivindicações.
                    </p>
                    <br />

                    <p>
                        > PERÍODO <br />
                        • Esta Campanha iniciará no dia 27/08/2024 e terminará no dia 02/09/2024.
                    </p>
                    <br />

                    <p>
                        > CONSIDERAÇÕES FINAIS: <br />
                        • A participação do Consumidor nesta Campanha é voluntária e gratuita, a simples participação do consumidor caracteriza, por si só, a aceitação total e irrestrita de todos os seus termos e condições e demais comunicados a ela relacionados. <br />
                        • O presente Regulamento poderá ser alterado ou suspenso a qualquer tempo, principalmente, mas não somente, por motivo de caso fortuito, força maior ou qualquer outro fator ou motivo imprevisto. <br />
                        • Todos os termos, condições e disposições deste Regulamento são independentes, sendo certo que, na hipótese de qualquer um de seus termos, condições ou disposições serem considerados inválidos, inexequíveis ou ilegais, no todo ou em parte, por qualquer motivo, a validade e exequibilidade dos demais termos, condições e disposições, ou de partes dos mesmos, não serão afetadas. <br />
                        • A RECOFARMA INDUSTRIA DO AMAZONAS LTDA é a única responsável pela Campanha isentando o Grupo Eletromidia de quaisquer danos, materiais ou morais, que tenham sido ocasionados em função da Campanha.
                    </p>

                    </div>
                    <div className="termo-texto nao-aceite">
                        <p>
                        Precisamos que aceite os termos da página anterior para prosseguir.
                        </p>
                    </div>

                    <div className="termo-btns">
                        <button className='btn primary' onClick={handleAceitaTermosRequest} disabled={loading}>
                            {loading ? (
                                <span className="loader"></span>
                            ) : (
                                'Aceito os termos e quero prosseguir'
                            )}
                        </button>

                        <label className='btn secundary' htmlFor="toggle" disabled={loading}>
                            <span>Não Aceito os termos</span>
                            <span className='nao-aceite'>Voltar para a página de termos</span>
                        </label>
                        <input type="checkbox" id="toggle" disabled={loading}/>
                    </div>
                </div>
            </div>

          </main>
          
        </div>
      )
  
}