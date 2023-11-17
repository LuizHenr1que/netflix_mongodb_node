import React from "react";

const Hero = ({ filme }) => {

    return (
        <div id="hero" className="container-fluid" style={{
            backgroundImage: `url(${filme.capa})`,
        }}

            >
        
            <div id="hero_infos" className="row">
                <div className="col-10 ">
                    <img src={filme.logo} alt="logo" className="logo"/>
                    <h1 className="text-white">
                        <img src={require("../../assets/img/badge-top-10.png")} alt="Top 10"/>
                        Top 1 de hoje no Brasil.
                    </h1>
                    <p className="text-white">
                        {filme.descricao?.substr(0, 190)}...
                    </p>
                    <br/>
                    <button className="btn btn-lg btn-custom-white">
                        <i className="fa-solid fa-play"></i> Assistir
                    </button>
                    <button className="btn btn-lg btn-custom-translucent">
                        <i className="fa-solid fa-circle-info"></i> Mais Informações
                    </button>
                </div>
            </div>
        
      </div>
    )
}

export default Hero;