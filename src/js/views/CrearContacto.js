import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function CrearContacto() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const navigate = useNavigate()

  const createContact = (name, phone, email, address) => {
    fetch('https://playground.4geeks.com/contact/agendas/michell/contacts', {
      method: "POST",
      body: JSON.stringify({
        name: name,
        phone: phone,
        email: email,
        address: address
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => {

        return resp.json();
      })
      .then(data => {
      })
      .catch(error => {
        console.log(error);
      });
  }

  //Boton para guardar contacto//
  const handleSubmit = (e) => {
    e.preventDefault()
    createContact(name, phone, email, address)
    navigate("/")
  }

  return (
    < >
      <h2 className='text-center'>Add a new contact</h2>
      <div>
        <form className='m-5' onSubmit={handleSubmit}  >

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" id="InputName" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" id="InputEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" id="InputPhone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input type="text" className="form-control" id="InputAddress" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>

          <button type="submit" className="btn btn-primary w-100">Save</button>



          <Link to="/">
            <span >or get back to contacts</span>
          </Link>

        </form>
      </div>
    </>
  )
}

export default CrearContacto;