import React from 'react'


function Contactos() {
  return (
    <div className="container d-flex">
      <div className='row'>
        <img className='col-sm-12 col-md-4' src="https://placehold.co/400" />
      </div>
      <div className='row flex flex-column'>
        <h4>Nombre</h4>
        <i className="fa-solid fa-location-dot col-sm-12 col-md-4">direccion</i>
        <i className="fa-solid fa-phone col-sm-12 col-md-4">telefono</i>
        <i className="fa-regular fa-envelope col-sm-12 col-md-4">correo</i>
      </div>

    </div>
  )
}

export default Contactos;