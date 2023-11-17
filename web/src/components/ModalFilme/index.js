import React, { useState ,useEffect} from "react";
import Episodeo from "../Episodeo";
import api from '../../services/api';

const ModalFilme = () => {

    const [filme, setFilme] = useState({});
    const [episodeos, setEpisodeos] = useState([]);



    const selectFilmeListener = () => {
        window.addEventListener('selectFilme', (data) => {
            setFilme(data.detail);
        });
    };


    //funcao que pega temproada e cada ep

    const getEpisodeos = async (temporada_id) => {
        try {
            const response = await api.get(`/episodeo/temporada/${temporada_id}`);
            const res = response.data;

            if (res.error) {
                alert(res.message);
                return false;
            }
            setEpisodeos(res.episodeos);

        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        selectFilmeListener();
    }, [])

    useEffect(() => {
        if ( filme.tipo == "serie") {
        getEpisodeos(filme.temporadas[0]?._id);
        }
    }, [filme])

    return (
        <div className="modal fade" id="modal-filme">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-hero" style={{backgroundImage:`url(${filme.capa})`}}>
                        <img src={filme.logo} alt="Diabo de Cada Dia Filme" />
                        <div className=" modal-hero-infos">
                            <button className="btn btn-lg btn-custom-white">
                                <i className="fa-solid fa-play"></i> Assistir
                            </button>
                            <a href="#" className="btn btn-light btn-lg rounded-circle">
                                <i className="fa-solid fa-play"></i>
                            </a>
                            <a href="#" className="btn-custom-round btn btn-light btn-lg rounded-circle opacity-50">
                                <i className="fa-solid fa-thumbs-up"></i>
                            </a>
                            <a href="#" className="btn-custom-round btn btn-light rounded-circle btn-lg opacity-50">
                                <i className="fa-solid fa-thumbs-down"></i>
                            </a>
                        </div>
                    </div>
                    <div className="modal-infos">
                        <div className="container">
                            <div className="row">
                                <div className="col-7">
                                    <p className="filme_descricao">
                                        {filme.descricao}
                                    </p>
                                </div>
                                <div className="col-5">
                                    <p className="filme_elenco">
                                        Elenco: <span>{filme.elenco?.join(', ')}</span>
                                        <br />
                                        <br />
                                        Gêneros: <span>{filme.generos?.join(', ')}</span>
                                        <br />
                                        <br />
                                        Cenas e momentos: <span>{filme.cenas_momentos?.join(', ')}</span>
                                    </p>
                                </div>
                            </div>
                            <br />
                            {filme.tipo === "serie" && <>
                            
                            <div className="row">
                                <div className="col-7">
                                    <h3 className="text-white">Episódios</h3>
                                </div>
                                <div className="col-5 text-right">
                                    <select onChange={(e) => {
                                        getEpisodeos(e.target.value)
                                    }} className="form-control">
                                        {filme.temporadas?.map((temporada) => ( <option value={temporada._id}>{temporada.titulo}</option> ))} 
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <ul id="lista_episodeos">

                                    {episodeos.map(episodeo => <Episodeo episodeo={episodeo} />)}

                                </ul>
                            </div>
                             </>}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalFilme;
