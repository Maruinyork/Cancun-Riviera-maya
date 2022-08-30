import { useState } from 'react'
import '../styles/Contact.css'
import axios from 'axios'
import ContactImage from '../assets/beach2.jpg'

const Contact = (props) => {
  const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  }

  const [sending, setSending] = useState(false)
  const [msg, setMsg] = useState('')
  const [formData, setFormData] = useState(initialForm)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((oldData) => ({
      ...oldData,
      [name]: value, //forma dinamica
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMsg('')
    setSending(true)
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/contacto`,
      formData,
    )
    setSending(false)
    setMsg(response.data.message)
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h2>Formulario de contacto para reservaciones</h2>
        <p className="mx-3 mt-4">
          Complete este formulario para proceder con la reservación o para
          hacernos alguna consulta
        </p>
        <form
          action="/contacto"
          method="post"
          onSubmit={handleSubmit}
          id="contact-form"
        >
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="phone"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
          <label htmlFor="mensaje">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="¿En qué podemos ayudarlo? ¿Qué habitación desea reservar?"
            rows="7"
          ></textarea>
          <input type="submit" value="Enviar" className="button"></input>
          <p>
            Nuestro staff se contactará con usted a fin de completar su reserva.
          </p>
        </form>
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}
      </div>
    </div>
  )
}

export default Contact
