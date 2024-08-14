import React, { useEffect, useState } from "react";
import "../../styles/home.css";
import Card from "../component/Card";
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
	}
	const getContacts = () => {
		fetch('https://playground.4geeks.com/contact/agendas/michell')
			.then(resp => resp.json())
			.then(data => setContacts(data.contacts))
			.catch(error => console.log(error))
	}

	useEffect(() => {
		createAgenda()
		getContacts()
	}, [])

	
	

	return (

		<div>
			{contacts.map((contact) => (<Card name={contact.name} phone={contact.phone} address={contact.address} email={contact.email} id={contact.id}/>))}
		</div>




	)
}
