// Funcionalidades / Libs:
import { useState, useEffect } from 'react';
import { CALL_SERVER } from './API/postApi';
// import Cookies from "js-cookie";

// Estilo:
import './App.scss';


export default function App() {
  const [loading, setLoading] = useState(true); 
  const [jogoLiberado, setJogoLiberado] = useState(true);


  useEffect(()=> {
    registerSessionKey();
  }, []); //Não precisa de dependencia, é apenas para executar na 1a redenrização

  async function registerSessionKey() {
    // ====================================================
    // Contagem inicial antes da await
    const startTime = performance.now();

    let sessionKey = geraSessionKey();

    try {
      const response = await CALL_SERVER(sessionKey);
      console.log('SUCESSO REST API!');
      console.log(response.data);
      setLoading(false);
      
      
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
        direcionarURLexterna(2500);
      }
    } catch(erro) {
      console.log('ERRO na API:');
      console.log(erro);
      setLoading(false);
      setJogoLiberado(false);
    } 
    // finally {
    //   console.log('finalyyy');
    //   setLoading(false);
    // }
  }

  function geraSessionKey() {
    let session_key = null;
    console.log('criando novo record, vamos enviar');
    let randomNumber = (Math.random() * 100 ) + 1;
    let date = (Date.now() / 1000) + randomNumber;
    let dateEncoded = btoa(""+date);
    session_key = dateEncoded; //parametro para o request API
    // console.log(session_key);
    
    return session_key;
  }

  async function direcionarURLexterna(temp=4000) {
    setTimeout(()=> {
      window.location.href = "https://www.bizsys.com.br";        
    }, temp);
  }
  

  return (
    <div className="App-container">
      <div className="grid">

      <div className='content'>
        {loading ? (
          <> 
            <h1>Liberando a <br />máquina...</h1>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </>

        ) : (

          jogoLiberado ? (
            <>
              <h1>Bora Jogar!</h1>
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </>
          ) : (
            <>
              <h1>Ocorreu um Erro :(</h1>
              <p>Tente novamente.</p>
            </>
          )
        )}
      </div>

      </div>
    </div>
  )
}