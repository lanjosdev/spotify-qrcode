// Funcionalidades / Libs:
import { useState, useEffect } from 'react';
import { CALL_SERVER } from './API/postApi';
import Cookies from "js-cookie";

// Estilo:
import './App.scss';


export default function App() {
  const [loading, setLoading] = useState(true); 
  const [jogoLiberado, setJogoLiberado] = useState(true);
  const [jogou, setJogou] = useState(false);

  useEffect(()=> {
    function verificaHora() {
      const atual = new Date(); //cria uma nova instância do objeto Date 
      const horaAtual = atual.getHours();
      const minutoAtual = atual.getMinutes();
      // Ou poderia ser com o metodo .toLocaleTimeString(), que retorna em strg
      
      if(horaAtual >= 10 && (horaAtual < 20 || (horaAtual === 20 && minutoAtual === 0))) {
        // Dentro do horario de funcionamento
        verificaCookie();
      } else {
        // Fora do horario de funcionamento
        setLoading(false);
        setJogoLiberado(false);
      }
    }
    verificaHora();
  }, []); //Não precisa de dependencia, é apenas para executar na 1a redenrização

  function verificaCookie() {
    const hasCookie = Cookies.get('SpotifyBiz');
    setLoading(false);

    if(hasCookie) {
      setJogou(true);

      // Chama uma function para Direcionar para pagina externa em 25s?
      direcionarURLexterna(25000);
    } else {
      let session_key = null;
      console.log('criando novo record, vamos enviar');
      let randomNumber = (Math.random() * 100 ) + 1;
      let date = (Date.now() / 1000) + randomNumber;
      let dateEncoded = btoa(""+date);
      session_key = dateEncoded; //parametro para o request API
      // console.log(session_key);
      
      // CHAMA FUNÇAO ASYNC P/ REQUEST API:
      registerSessionKey(session_key);    
    }        
  }

  async function registerSessionKey(sessionkey) {
    // Contagem inicial antes da await
    const startTime = performance.now();

    try {
      const response = await CALL_SERVER(sessionkey);
      console.log('SUCESSO REST API!: ' + response);

      // ===================================================
      // Faz algo com a promessa
      // const data = await response;
      // console.log(data);
      // ====================================================      

      // Gera um cookie para indicar que já entrou no jogo:
      Cookies.set('SpotifyBiz', JSON.stringify(sessionkey), {
        expires: 1, // Expira em 1dia (24h)
        sameSite: 'None',
        secure: true,
      });
      
      // ====================================================
      // Calcula o tempo decorrido
      const endTime = performance.now();
      const timeElapsed = endTime - startTime;
      // Retorna o tempo decorrido
      console.log(timeElapsed);
      // ====================================================

      // Direcionar para endereço externo:
      if(timeElapsed > 2000) {
        direcionarURLexterna(0);       
      } else {
        direcionarURLexterna(2200);
      }
    } catch(erro) {
      console.log('ERRO na Request:');
      console.log(erro);
      // setLoading(false);
      // algoritmo para tratar erro de resquest, tipo setErro(true)...
    } 
    // finally {
    //   console.log('finalyyy');
    //   setLoading(false);
    // }
  }

  async function direcionarURLexterna(temp=5000) {
    // Direcionar para endereço externo:
    setTimeout(()=> {
      window.location.href = "https://spotify.link/garra";           
    }, temp);
  }
  

  return (
    <div className="App-container">
      <div className="grid">

      <div className='content'>
        {loading ? (
          <>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </>
        ) : (
          jogoLiberado ? (
            jogou ? (
              <>
                <h1>Obrigado por participar!</h1>
                <p>Volte outro dia para <br /> participar novamente.</p>
              </>
            ) : (
              <>
                <h1>Bora Jogar!</h1>
                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
              </>              
            )
          ) : (
            <>
              <h1>Horário de funcionamento:</h1>
              <p>Estamos funcionando a partir das 10:00 até 20:00.</p>
            </>
          )
        )}
      </div>

      </div>
    </div>
  )
}