import React from "react";

const Episodeo = ({ episodeo }) => {

    return (
                <li>
                    <div className="row">
                        <div className="col-1 my-auto text-center">
                        <h3 className="text-white">{episodeo.titulo.slice("Episódio ".length)}</h3>
                        </div>
                        <div className="col-4">
                            <img className="img-fluid" src={episodeo.capa} alt="" />
                        </div>
                        <div className="col-7">
                            <h6 className="text-white">{episodeo.titulo}</h6>
                            <p className="text-muted">
                            {episodeo.descricao}
                            </p>
                        </div>
                    </div>
                </li>
            );
};

export default Episodeo;