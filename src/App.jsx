// Funcionalidades / Libs:
import { useState, useEffect } from 'react';
// import {CALL_SERVER} from '../../API/postApi';
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
        // Chama uma function para Direcionar para pagina externa em 10s
      } else {
        // let session_key = null;        
        console.log('criando novo record, vamos enviar');

        // let randomNumber = (Math.random() * 100 ) + 1;
        // let date = (Date.now() / 1000) + randomNumber;
        // let dateEncoded = btoa(""+date);
        // console.log(dateEncoded);


        // Gera um cookie para indicar que já entrou no jogo:
        Cookies.set('SpotifyBiz', 'JOGOU', {
          expires: 1, // Expira em 1dia (24h)
          sameSite: 'None',
          secure: true,
        });
        // Cookies.set('SpotifyBiz', JSON.stringify(dateEncoded), { expires: 1 }); // Expira em 1dia (24h)

        // session_key = dateEncoded;
        

        // REQUEST API...


        // Direcionar para endereço externo:
        setTimeout(()=> {
          window.location.href = "https://www.spotify.com/br-pt/premium/";           
        }, 2000);        
      }

      // setLoading(false);            
    }
    verificaCookie();
  }, []);
  

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