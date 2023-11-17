import React, { useState, useEffect} from "react";
import ModalFilme from "../../components/ModalFilme";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Secao from "../../components/Secao";

import api from '../../services/api'

const Home = () => {

  const [principal, setPrincipal] = useState({});
  const [secoes, setSecoes] = useState([]);


  const getHome = async () => {
    try {
      const response = await api.get('/home');
      const res = response.data;

      if ( res.error) {
        alert(res.message);
        return false;
      }

      setPrincipal(res.principal);
      setSecoes(res.secoes);

      console.log(res);

    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    getHome();
  }, []);

    return (
      <>
        <ModalFilme></ModalFilme>

        <div className="container-fluid">
          <Header></Header>
        </div>
      
        <Hero filme={principal} ></Hero>

        <div id="main-content" className="container-fluid">

        {secoes.map(secao => <Secao secao={secao} />)}

        </div>
      </>
        
    );
}

export default Home;
