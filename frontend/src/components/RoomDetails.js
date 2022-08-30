import React, { Component } from "react";

const Select = ({ selectedValue, options, onDataChange }) => (
  <select
    onChange={({ target: { value } }) => onDataChange(value)}
    value={selectedValue}
  >
    {options.map((option) => (
      <option value={option.value} key={option.name}>
        {option.name}
      </option>
    ))}
  </select>
);

const occupantOptions = [
  { name: "1", value: 1 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
];

const roomTypeOptions = [
  { name: "Estandar", value: "Estandar" },
  { name: "Double Vista al mar", value: "Double Vista al mar" },
  { name: "Double Premium", value: "Double Premium" },
];

const RoomDetail = (props) => {
  const { roomType, occupants, onRoomTypeChange, onOccupantsChange } = props;
  return (
    <div>
      <h5>Detalle de la habitación</h5>
      <label>Tipo de habitación</label>
      <Select
        selectedValue={roomType}
        options={roomTypeOptions}
        onDataChange={onRoomTypeChange}
      />

      <label>Ocupantes</label>
      <Select
        selectedValue={occupants}
        options={occupantOptions}
        onDataChange={onOccupantsChange}
      />
    </div>
  );
};

export default RoomDetail;
