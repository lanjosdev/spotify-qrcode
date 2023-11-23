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
        setJogou(true);
        setLoading(false);
        // Chama uma function para Direcionar para pagina externa em 10s?
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
      const response = await CALL_SERVER(sessionkey);
      console.log(response);
      console.log('SUCESSO REST API!');

      // Gera um cookie para indicar que já entrou no jogo:
      Cookies.set('SpotifyBiz', JSON.stringify(sessionkey), {
        expires: 1, // Expira em 1dia (24h)
        sameSite: 'None',
        secure: true,
      });
      
      // Direcionar para endereço externo:
      window.location.href = "https://spotify.link/garra";
    } catch(erro) {
      console.log('Erro na Request:');
      console.log(erro);
      // setLoading(false);
    } 
    // finally {
    //   console.log('finalyyy');
    //   setLoading(false);
    // }
  }

  // function direcionarURLexterna(temp=0) {
  //   // Direcionar para endereço externo:
  //   setTimeout(()=> {
  //     window.location.href = "https://spotify.link/garra";           
  //   }, temp);
  // }
  

  return (
    <div className="App-container">
      <div className="grid">

      <div className='content'>
        {loading ? (
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        ) : (
          jogou && (
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