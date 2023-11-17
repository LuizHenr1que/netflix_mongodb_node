import React, { useState } from "react";
import Filme from "../Filme";

const Secao = ({ secao }) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - wrapperRef.current.offsetLeft);
    setScrollLeft(wrapperRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - wrapperRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ajuste a sensibilidade do arrasto
    wrapperRef.current.scrollLeft = scrollLeft - walk;
  };

  const wrapperRef = React.createRef();

  return (
    <section>
      <div className="container-fluid pl-5">
        <div className="row">
          <div className="col-12">
            <h5 className="text-white">{secao[0]?.generos[0]}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul
              className="filme_lista"
              id="filme_lista"
              ref={wrapperRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {secao.map((filme, index) => (
                <Filme key={index} filme={filme} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Secao;
