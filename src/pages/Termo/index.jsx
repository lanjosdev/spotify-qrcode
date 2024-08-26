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
                        <span>{'>'} EMPRESA PROMOTORA:</span> <br />
                        • O presente regulamento apresenta e disciplina a ativação de campanha publicitária no abrigo de ônibus da Av Paulista nº 900, São Paulo - SP  promovida pela RECOFARMA INDUSTRIA DO AMAZONAS LTDA (“Campanha”), pessoa jurídica de direito privado, inscrita no CNPJ sob o n° 61.454.393/0006-02, com sede à Praia de Botafogo, nº 374, Botafogo, Rio de Janeiro – Rio de Janeiro (“RECOFARMA”).<br />
                        • A RECOFARMA INDUSTRIA DO AMAZONAS LTDA é a detentora dos direitos para os fins propostos nesta Campanha e dos direitos da marca Crystal (“Termo”).
                    </p>
                    <br />

                    <p>
                        <span>{'>'} ELEGIBILIDADE</span> <br />
                        • A presente Campanha é destinada a todo e qualquer consumidor desde que pessoa física, capaz, e com idade igual ou superior a 18 (dezoito) anos (ou menores de 18 (dezoito) anos, emancipados legalmente, conforme Código Civil Brasileiro), residente e domiciliado no Brasil, ou desde que acompanhados do seu responsável legal para autorizar a participação deste na ativação, que preencha as condições estabelecidas neste Regulamento, com plenos poderes e autoridade para conceder à RECOFARMA todos os direitos contemplados nestes Termo("Participante").
                    </p>
                    <br />

                    <p>
                        <span>{'>'} REGULAMENTO</span> <br />
                        • A Campanha é uma iniciativa organizada pela RECOFARMA para promover o divulgação da marca e distribuição de brindes de águas Crystal. <br />
                        • O projeto se trata de uma dinâmica, onde o objetivo dos Participantes é dançar por aproximadamente 1 minuto e 30 segundos através da interação digital com câmera e música na tela do Mobiliário Urbano do abrigo de ônibus (“MUB”), para ganhar um brinde: uma garrafa de água da marca Crystal (“Ação”). <br />
                        • A dinâmica só poderá ser iniciada através da leitura de um QRCode, que fará a captação do IP Mask do celular, somente com a finalidade de organizar e limitar o número de participantes na ação, e com a abertura de câmera após o aceite expresso do Participante a este Termo para iniciar a interação digital com o MUB, de modo que a RECOFARMA não armazenará, sob qualquer hipótese os dados pessoais coletados para esta Campanha. <br />
                        • Todos os usuários que participarem da Ação e finalizarem a dinâmica, poderão retirar o brinde, que serão liberados de forma randômica para cada Participante. <br />
                        • Os brindes a serem disponibilizados serão garrafas de: água saborizada, água natural e água com gás da marca Crystal. 
                    </p>
                    <br />

                    <p>
                        <span>{'>'} AUTORIZAÇÃO DE USO DE IMAGEM</span> <br />
                        • Neste ato, e para todos os fins de direito, você, na qualidade de Participante desta Campanha, autoriza através do aceite deste Termo a captação temporária da sua imagem para fins de participação e divulgação institucional e publicitária da Campanha, em caráter definitivo e gratuito, de forma total, definitiva, irretratável e irrevogável, bem como licencia e autoriza à RECOFARMA também de forma total, definitiva, irretratável e irrevogável os direitos de captação temporária de sua imagem para serem utilizados pela RECOFARMA ou por terceiros autorizados por esta.  <br />
                        • Ao aceitar este Termo você declara e garante que a RECOFARMA  e terceiros autorizados por esta não possuem qualquer obrigação de restituição econômica pela sua imagem na Campanha, não sendo devido a você, qualquer direito sobre o mesmo. <br />
                        • O aceite deste Termo garante que: (i) é o único titular de todos os direitos da imagem; (ii) tem plenos poderes e autoridade para conceder à RECOFARMA todos os direitos contemplados nestes Termos; (iii) o uso da imagem pela RECOFARMA conforme estabelecido acima, não viola ou infringe, nem tampouco violará ou infringirá os direitos de qualquer pessoa física ou jurídica e que tal uso autorizado por meio do presente não dará origem a quaisquer alegações de violação, difamação, invasão de privacidade, publicidade, pedidos de pagamento de taxas de reutilização ou residuais, ou quaisquer outras reivindicações.
                    </p>
                    <br />

                    <p>
                        <span>{'>'} PERÍODO</span> <br />
                        • Esta Campanha iniciará no dia 27/08/2024 e terminará no dia 02/09/2024, com período de ativação de cada dia das 10h às 16h, sendo certo que nenhum dado pessoal, incluindo a sua imagem ficarão armazenados no MUB utilizado para a Campanha.
                    </p>
                    <br />

                    <p>
                        <span>{'>'} CONSIDERAÇÕES FINAIS</span> <br />
                        • A participação do Consumidor nesta Campanha é voluntária e gratuita, a simples participação do consumidor caracteriza, por si só, a aceitação total e irrestrita de todos os seus termos e condições e demais comunicados a ela relacionados. <br />
                        • O presente Regulamento poderá ser alterado ou suspenso a qualquer tempo, principalmente, mas não somente, por motivo de caso fortuito, força maior ou qualquer outro fator ou motivo imprevisto. <br />
                        • A RECOFARMA é a única responsável pela Campanha isentando o Grupo Eletromidia de quaisquer danos, materiais ou morais, que tenham sido ocasionados em função da Campanha.
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