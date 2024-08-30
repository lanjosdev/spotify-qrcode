// Funcionalidades / Libs:
import { useRef } from 'react';

// Assets:
import VideoBack from '../../assets/video-teste.mp4';
import ImageBack from '../../assets/logo_branco.png';

// Estilo:
import './fim.scss';


export default function Fim() {
    const videoRef = useRef();
    const thumbRef = useRef();


    document.getElementById('root').addEventListener('click', ()=> {
        videoRef.current.play();
        // thumbRef.current.style.display = 'none';
    });

    async function playVideo() {
        thumbRef.current.style.display = 'none';
    }

  

    return (
        <div className="Home-container Fim">
            <div ref={thumbRef} className="thumb">
                <div className="content-thumb">
                    <img src={ImageBack} alt="" />
                    <ion-icon name="play-circle"></ion-icon>
                </div>
            </div>
            <video ref={videoRef} autoPlay muted loop onPlay={playVideo}>
                <source src={VideoBack} type="video/mp4" />
            </video>


            <div className="grid">

                <div className="content">
                    <h1>Obrigado por participar!</h1>
                    <a className='btn-link' href="https://www.bizsys.com.br" target='_blank' rel="noreferrer">Visite nosso site</a>
                </div>
            </div>
        </div>
    )
}