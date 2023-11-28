// Funcionalidades / Libs:
import { useState, useEffect } from 'react';
import { CALL_SERVER } from './API/postApi';
import Cookies from "js-cookie";

// Estilo:
import './App.scss';


export default function App() {
  const [loading, setLoading] = useState(true); 
  const [jogou, setJogou] = useState(false);

  useEffect(()=> {
    function verificaCookie() {
      const hasCookie = Cookies.get('SpotifyBiz');

      if(hasCookie) {
        setLoading(false);
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
    verificaCookie();
  }, []);

  async function registerSessionKey(sessionkey) {
    try {
      // Contagem inicial antes da await
      const startTime = performance.now();

      const response = await CALL_SERVER(sessionkey);

      // ===================================================
      // Faz algo com a promessa
      const data = await response;
      console.log(data);
      // ====================================================      

      console.log('SUCESSO REST API!');

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
      if(timeElapsed > 3000) {
        window.location.href = "https://spotify.link/garra";        
      } else if(timeElapsed > 2000 && timeElapsed < 2999) {
        setTimeout(()=> {
          window.location.href = "https://spotify.link/garra";           
        }, 1000);
      } else {
        setTimeout(()=> {
          window.location.href = "https://spotify.link/garra";           
        }, 2500);
      }
    } catch(erro) {
      console.log('Erro na Request:');
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
            <h1>Bora Jogar!</h1>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </>
        ) : (
          jogou && ( //nem precisava dessa linha e o state jogou, a nao ser se for tratar if-else
            <>
              <h1>Obrigado por participar!</h1>
              <p>Volte outro dia para <br /> participar novamente.</p>
            </>
          )
        )}
      </div>

      </div>
    </div>
  )
}