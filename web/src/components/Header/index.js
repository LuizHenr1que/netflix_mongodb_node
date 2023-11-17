import React, {useState, useEffect} from "react";


const Header = () => {
    const [user, setUser] = useState({});

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('@user')));
    }, []);

    return (
        <header className="row">
            <div className="col-2">
                <img src={require("../../assets/img/logo.png")} alt="Netflix"/>
            </div>

            <div className="dropdown">
                <a href="#"><b>Navegar ˬ </b></a>
                <div className="dropdown-content">
                    <ul className="menu_list_dropdown">
                        <li><a href="#">Início</a></li>
                        <li><a href="#">Séries</a></li>
                        <li><a href="#">Filmes</a></li>
                        <li><a href="#">Mais Recentes</a></li>
                        <li><a href="#">Minha Lista</a></li>
                    </ul>
                </div>
            </div>

            <div className="col-8 menu">
                <ul className="menu_list">
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Séries</a>
                    </li>
                    <li>
                        <a href="#">Filmes</a>
                    </li>
                    <li>
                        <a href="#">Mais Recentes</a>
                    </li>
                    <li>
                        <a href="#">Minha Lista</a>
                    </li>
                </ul>
            </div>

            <div className="col-2">
                <a onClick={logout} className="text-white">Olá, {user.nome} Sair</a>
            </div>
        </header>
    )
}

export default Header;