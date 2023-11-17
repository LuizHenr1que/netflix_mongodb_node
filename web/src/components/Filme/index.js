import React from "react";

const Filme = ({ filme }) => {

    const selectFilme = () => {
        const event = new CustomEvent('selectFilme', {
            detail: filme,
        });
    
        window.dispatchEvent(event);
    }
    
    

    return (     
                <li className="filme" data-toggle="modal" data-target="#modal-filme" onClick={selectFilme}>
                    <img className="img-fluid" src={filme.thumb} alt=""/>
                    <div className="filme_info">
                        <div className="col-12">
                            <a href="#" className=" btn btn-light rounded-circle">
                                <i className="fa-solid fa-play"></i>
                            </a>
                            <a href="#" className="btn-custom-round btn-custom-round btn btn-light rounded-circle opacity-50">
                                <i className="fa-solid fa-thumbs-up"></i>
                            </a>
                            <a href="#" className="btn-custom-round btn btn-light rounded-circle opacity-50">
                                <i className="fa-solid fa-thumbs-down"></i>
                            </a>
                            <a href="#" className="btn-custom-round btn btn-light rounded-circle opacity-50">
                                <i className="fa-solid fa-plus"></i>
                            </a>
                        </div>
                        <p>T3:EPS <text>"Meu Episódio</text></p>
                    </div>
                </li>
            );
};

export default Filme;