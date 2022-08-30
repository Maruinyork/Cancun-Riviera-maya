import React from "react";
import hotelImage from "../assets/conoce-cancun.png";
export default function Hero() {
  return (
    <div id="hero">
      <div className="background">
        <img src={hotelImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h2>Riviera Maya | Hotel</h2>
          <p>
          Experimenta una interminable lista de amenidades que deleitarán a todos. Desde menús especiales de servicio a la habitación solo para niños, hasta mesas de billar, actividades familiares organizadas y un espacio único de video juegos, no hay nada como una estadía en nuestro Hotel.
          </p>
          <button><a href="../habitaciones">Reserve ahora</a></button>
        </div>
      </div>
    </div>
  );
}
