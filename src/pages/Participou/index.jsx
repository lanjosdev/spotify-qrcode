// Funcionalidades / Hooks / Libs:
// import { useState } from 'react';
// import { POST_API } from '../../API/requestApi';
// import Cookies from "js-cookie";

// Components:
import { Header } from '../../components/Header';

// Assets:
import ImgGota from '../../assets/gota.png';
// import ImgGotaErro from '../../assets/gotaErro.png'

// Estilo:
import './style.css';


export default function Participou() {
  // let participou = false;
  // let sessionKey = null;
  // const [erro, setErro] = useState(false);
  

  // useEffect(()=> {
  // function verificaCookie() {
  //   const hasCookie = Cookies.get('sessionCrystalBiz');

  //   if(hasCookie) {
  //     console.log('Já participou');
  //     participou = true;
  //     sessionKey = JSON.parse(hasCookie);
  //   } else { 
  //     console.log('Nova sessão'); 
  //     sessionKey = newSessionKey();
  //   } 

  //   console.log(sessionKey);
  //   requestApi();
  // }
  // verificaCookie();
  // }, []);

  // async function requestApi() {
  //   let participated = participou ? 1 : 0; // se participou recebe 1 senão 0
  //   console.log(participated);
    
  //   if(participated == 0) {
  //     try {
  //       const response = await POST_API(sessionKey, participated);
  //       console.log('SUCESSO REST API!');
  //       console.log(response.data);
  
  //       if(!participou) {
  //         console.log('Salvando cookie...');
  //         Cookies.set('sessionCrystalBiz', JSON.stringify(sessionKey), {
  //           // expires: new Date(Date.now() + 20 * 1000),
  //           expires: 1, // Expira em 1dia (24h)
  //           sameSite: 'None',
  //           secure: true,
  //         });
  //       }
  //     } 
  //     catch(error) {
  //       console.log('ERRO na API:');
  //       setErro(true);
  //       console.log(error);
  //     } 
  //     // finally {
  //     //   direcionarURLexterna();
  //     // }
  //   }

  //   direcionarURLexterna();
  // }

  function direcionarURLexterna(temp = 15000) {
    setTimeout(()=> {
      window.location.href = "https://urldefense.com/v3/__https://www.coca-cola.com/br/pt/brands/crystal__;!!JhKdOwKRoV0QTA!r9x6SiEdCll3QE4CeAr-dzjWDBvTz-dO4OkFinDn3E943-kMveyHAn7PAQKjeyvnr-OsCpdBmp_vDYvUSVuzkbUc8Prfi3QCrnFbmg$";        
    }, temp);
  }
  direcionarURLexterna();


  // if(participou) {
  return (
    <div className='Participou'>

      <Header />

      <main>
        <div className="text-gota">
          <img src={ImgGota} alt="" />

          <div className="text">
            <p>
              <span>que pena</span>
              parece que <br />
              você já participou
              por hoje.
            </p>
            <p>
              você pode dançar
              <span>
                novamente <br />
                amanhã.
              </span>
            </p>
          </div>
        </div>
      </main>

      <footer>
        <p>agradecemos <br /> sua participação.</p>
      </footer>
      
    </div>
  )
  // } 
  // else if(erro) {
  //   return (
  //     <div className='App erro'>

  //       <header>
  //         <img src={LogoHeader} alt="Logo" />
  //       </header>

  //       <main>
  //         <div className="text-gota">
  //           <img src={ImgGotaErro} alt="" />

  //           <div className="text">
  //             <p>
  //               <br />
  //               <span>que pena</span>
  //               parece que <br />
  //               algo deu errado.
  //             </p>
  //             <p>
  //               <span>
  //                 atualize a página
  //               </span>
  //               e tente <br /> novamente.
  //             </p>
  //           </div>
  //         </div>
  //       </main>

  //     </div>
  //   )
  // }
}