import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker"; //Instale esta libreria//
 
import "react-datepicker/dist/react-datepicker.css";
 

const  DateSelector = (props) => {
        let { //Desestructuramos toda la info introducida//
            checkinDate,
            checkoutDate,
            totalDays,
            onCheckinChange,
            onCheckoutChange,
            invalidRange
        } = props;
        return (
            <div>
                <h6>Selecciona las fechas</h6>

                <DatePicker
                    selected={checkinDate}
                    onChange={onCheckinChange}
                />

                <DatePicker
                    selected={checkoutDate}
                    onChange={onCheckoutChange}
                />

                <span> {totalDays} noches </span>

                { invalidRange && <p>Ud. ha seleccionado un rango de fechas invalido</p> } {/*Si el huesped pone una fecha extensa sera invalida*/}
            </div>
        );
    }


DateSelector.propTypes = {
    checkinDate: PropTypes.instanceOf(Date).isRequired,
    checkoutDate: PropTypes.instanceOf(Date).isRequired,
    onCheckinChange: PropTypes.func.isRequired,
    onCheckoutChange:PropTypes.func.isRequired,
    totalDays: PropTypes.number.isRequired
}

export default DateSelector;