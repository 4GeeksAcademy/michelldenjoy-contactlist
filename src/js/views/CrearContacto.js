import React, { useState } from 'react'

function CrearContacto() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  {/**const [formData, setFormData] = useState({
    name: { name },
    email: { email },
    phone: { phone },
    address: { address }
  })
   */}
  return (
    < >
      <h1 className='text-center'>Add a new contact</h1>
      <div>
        <form className='m-5'  onSubmit={handleSubmit}> 

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
            <label className="form-label">Adress</label>
            <input type="text" className="form-control" id="InputAddress" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>

        </form>
      </div>
    </>
  )
}

export default CrearContacto;