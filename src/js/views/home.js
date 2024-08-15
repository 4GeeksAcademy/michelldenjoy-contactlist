import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Card from "../component/Card";


//LO SIENTO POR MI SPANGLISH EN ALGUNAS VARIABLES//
//LA PRIMERA VEZ QUE SE GUARDA UN CONTACTO HAY QUE ACTUALIZAR A LA PAGINA PORQUE A VECES NO SE MUESTRA CUANDO RENDERIZA ://

export const Home = () => {

	const [contacts, setContacts] = useState([])
	const createAgenda = () => {
		fetch('https://playground.4geeks.com/contact/agendas/michell', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify()
		})
			.then(resp => resp.json())
			.then(data => data)
			.catch(error => console.log(error))
	};

	const getContacts = () => {
		fetch('https://playground.4geeks.com/contact/agendas/michell')
			.then(resp => resp.json())
			.then(data => setContacts(data.contacts))
			.catch(error => console.log(error))
	};
	
	//Boton para eliminar contacto//
	const handleDeleteContact = (id) => {
		fetch(`https://playground.4geeks.com/contact/agendas/michell/contacts/${id}`, {
			method: "DELETE"
		})
			.then(resp => {
				if (resp.ok) {
					setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
				}
			})
			.catch(error => console.log(error));
	};

	useEffect(() => {
		createAgenda()
		getContacts()
	}, [])

	return (

		<>
			<h2 className="text-center">Contact List</h2>

			<div className="m-5">
				{contacts.map((contact) => (<Card key={contact.id} name={contact.name} phone={contact.phone} address={contact.address} email={contact.email} id={contact.id} onDelete={handleDeleteContact} />))}
			</div>

		</>







	);

}
