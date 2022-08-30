import React from "react";
import RoomDetails from "./RoomDetails";
import DateSelector from "./DateSelector";
import Billing from "./Billing.jsx";
import { Component } from "react";

const _MS_PER_DAY = 1000 * 60 * 60 * 24; //Para unificar los datos se convierte todo a milisegundos
function dateDiffInDays(a, b) { //los parametros son las dos fechas que colocara el huesped
  //Usare el objeto Date para establecer las fechas
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

class Booking extends Component {
  constructor(props) {
    super(props);

    const today = new Date();
    const checkout = new Date();
    checkout.setDate(today.getDate() + 1);

    this.state = { //Asi estará por default
      checkinDate: today,
      checkoutDate: checkout,
      occupants: 1,
      roomType: "Estandar", 
    };
  }

  static getDerivedStateFromProps(props, state) {
    const totalDays = dateDiffInDays(state.checkinDate, state.checkoutDate);
    const invalidRange = totalDays <= 0 || totalDays >= 10; //Sera invalido si el huesped coloca 0 o mas de 10 personas en su reserva

    return {
      totalDays,
      invalidRange,
    };
  }

  //Metodos//
  onCheckinChange = (checkinDate) => {
    this.setState({
      checkinDate,
    });
  };

  onCheckoutChange = (checkoutDate) => {
    this.setState({
      checkoutDate,
    });
  };

  onOccupantsChange = (occupants) => {
    this.setState({
      occupants,
    });
  };

  onRoomTypeChange = (roomType) => {
    this.setState({
      roomType,
    });
  };

  render() {
    return (
      <div>
         <h3 id='reserva'>Reservas</h3>
        
        <DateSelector
          checkinDate={this.state.checkinDate}
          checkoutDate={this.state.checkoutDate}
          totalDays={this.state.totalDays}
          invalidRange={this.state.invalidRange}
          onCheckinChange={this.onCheckinChange}
          onCheckoutChange={this.onCheckoutChange}
        />
        <RoomDetails
          occupants={this.state.occupants}
          roomType={this.state.roomType}
          onRoomTypeChange={this.onRoomTypeChange}
          onOccupantsChange={this.onOccupantsChange}
        />

        {!this.state.invalidRange && (
          <Billing
            roomType={this.state.roomType}
            totalDays={this.state.totalDays}
            occupants={this.state.occupants}
          />
        )}
      </div>
    );
  }
}

export default Booking;
