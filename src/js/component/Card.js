import React from 'react';
import { useNavigate } from 'react-router';

function Card({ name, address, phone, email, id, onDelete }) {  //Recibe onDelete como prop//

  const navigate = useNavigate();

  const handleDelete = () => {
    onDelete(id); //Llama a la función que viene de Home//
  }

  return (
    <div className="row align-items-center p-3 shadow border rounded w-50 m-3">
      <div className="col-sm-12 col-md-4 text-center mb-3 mb-md-0">
        <img
          src="https://placehold.co/400"
          className="img-fluid rounded-circle border border-3 shadow-sm"
          alt="Profile"
        />
      </div>

      <div className="col-sm-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
        <h4 className="fw-bold">{name}</h4>
        <p className="mb-1">
          <i className="fa-solid fa-location-dot me-2 text-primary"></i>{address}
        </p>
        <p className="mb-1">
          <i className="fa-solid fa-phone me-2 text-success"></i>{phone}
        </p>
        <p className="mb-0">
          <i className="fa-regular fa-envelope me-2 text-danger"></i>{email}
        </p>
      </div>

      <div className="col-sm-12 col-md-4 text-center text-md-end">
        <button className="btn btn-primary me-2" onClick={() => {navigate(`/EditContact/${id}`)}}>
          <i className="fa-solid fa-pen"></i> Edit
        </button>
        <button className="btn btn-danger" onClick={handleDelete} >
          <i className="fa-regular fa-trash-can"></i> Delete
        </button>
      </div>
      
    </div>
  );
}

export default Card;
