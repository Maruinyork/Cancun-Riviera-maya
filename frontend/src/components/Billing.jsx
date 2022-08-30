import React, { Component } from "react";

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCharge: 0,
      occupantCharges: 0,
      totalRoomCharges: 0,
      totalOccupantCharges: 0,
      discount: 0,
      grandTotal: 0,
      afterTax: 0,
    };
  }

  //Metodo static//
  static getDerivedStateFromProps(props, state) {
    const { roomType, totalDays, occupants } = props;

    const roomCharge = roomType === "Estandar" ? 1000 : 2000;
    const occupantCharges = occupants === 1 ? 0 : (occupants - 1) * 200;
    const totalRoomCharges = totalDays * roomCharge;
    const totalOccupantCharges = totalDays * occupantCharges;

   //Descuento por compra//
    const discount = totalDays >= 5 ? 15 : 0;
    //Total//
    const grandTotal = Math.ceil(
      totalRoomCharges - (totalRoomCharges * discount) / 100.0
    );

    const afterTax = (totalOccupantCharges + grandTotal) * 1.20;

    return {
      roomCharge,
      occupantCharges,
      totalRoomCharges,
      totalOccupantCharges,
      discount,
      grandTotal,
      afterTax,
    };
  }

  render() {
    return (
      <div>
        <h4>Resumen de su reserva</h4><br/>
        <table>
          <tbody>
            <tr>
              <td>Costo habitación</td>
              <td>{this.state.roomCharge} USD</td>
            </tr>
            <tr>
              <td>Noches</td>
              <td>{this.props.totalDays} noches</td>
            </tr>

            <tr>
              <td><b>Total Habitación</b></td>
              <td>{this.state.totalRoomCharges} USD</td>
            </tr>

            <tr>
              <td>Desc. aplicado</td>
              <td>{this.state.discount} %</td>
            </tr>

            <tr>
              <td>Total con desc.</td>
              <td>{this.state.grandTotal} USD </td>
            </tr>

            <tr>
              <td>Total huespedes</td>
              <td>{this.props.occupants}</td>
            </tr>

            <tr>
              <td>Costo por huesped</td>
              <td>{this.state.occupantCharges} USD por dia</td>
            </tr>

            <tr>
              <td>Total huesped extra</td>
              <td>{this.state.totalOccupantCharges} USD</td>
            </tr>

            <tr>
              <td><b>Total + impuestos</b></td>
              <td>{this.state.afterTax} USD </td>
            </tr>
          </tbody>
        </table>
        <br/>
        <p>IMPORTANTE: El impuesto esta conformado por el impuesto sobre hospedaje de un 4% y el impuesto al valor agregado de un 16%.</p>
      </div>
    );
  }
}

export default Billing;
