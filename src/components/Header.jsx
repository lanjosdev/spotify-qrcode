// Funcionalidades / Hooks / Libs:
// import { useState, useEffect } from 'react';

// Assets:
import LogoHeader from '../assets/logo_breakingCrystal.svg';

// Estilo:
import './header.css';


export function Header() {

    return (
        <div className='Header'>
  
          <header>
            <img src={LogoHeader} alt="Logo" />
          </header>
          
        </div>
      )
  
}