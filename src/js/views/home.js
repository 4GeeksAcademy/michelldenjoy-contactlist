import React, { useEffect } from "react";
import "../../styles/home.css";

export const Home = () => {

	useEffect(() => {
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
		createAgenda()
	}, [])


	return (


		<div>


		</div>

	)
}
