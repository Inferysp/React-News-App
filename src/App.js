import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import Main from './components/Main/Main';
import LanguageContext from './LanguageContext';
import SemanticHeader from './components/HeaderSUI/SemanticHeader';
import FooterSUI from './components/FooterSUI/FooterSUI'


const App = () => {
  const [lang, setLang] = useState('pl');
  return (
    <BrowserRouter>
      <LanguageContext.Provider value={lang}>
        <SemanticHeader />
        <Main onLanguageChange = {setLang}/>
        <FooterSUI />
      </LanguageContext.Provider>
    </BrowserRouter>
  )
};

export default App;
