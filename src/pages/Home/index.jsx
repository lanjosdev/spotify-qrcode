// Funcionalidades / Libs:
import { useState, useEffect } from 'react';
import { CALL_SERVER } from '../../API/postApi';
import { useNavigate } from 'react-router-dom';

// Estilo:
import './Home.scss';


export default function Home() {
  const [loading, setLoading] = useState(true); 
  const [jogoLiberado, setJogoLiberado] = useState(true);

  const navigate = useNavigate();


  useEffect(()=> {
    registerSessionKey();
  }, []); //Não precisa de dependencia, é apenas para executar na 1a redenrização

  async function registerSessionKey() {
    const inicio = performance.now();
    let sessionKey = geraSessionKey();

    try {
        const response = await CALL_SERVER(sessionKey);
        console.log(response.data);
        console.log('SUCESSO REST API!');
        setLoading(false);

        const fim = performance.now();
        const timeElapsed = fim - inicio;
        console.log(timeElapsed);
        // Direcionar para endereço externo:
        if(timeElapsed > 2000) {
            direcionaRota(0);       
        } else {
            direcionaRota(2500);
        }
    } 
    catch(erro) {
        console.log('ERRO na API:', erro);
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

  async function direcionaRota(temp=4000) {
    setTimeout(()=> {
        navigate('/fim');
    }, temp);
  }
  

  return (
    <div className="Home-container">
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