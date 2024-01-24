import React, { useEffect } from "react";
import "./ResultCards.scss";
import { useState } from "react";
import { Button } from "../ul/button/Button";

export const ResultCards = () => {
	const [state, setState] = useState([]);
	useEffect(() => {
		async function getUsers() {
			try {
				const res = await fetch("https://jsonplaceholder.typicode.com/users");
				const users = await res.json();
				setState(users);
				console.log(users);
			} catch (e) {
				console.error(e);
			}
		}

		getUsers();
	}, []);

	function deleteUsers() {
		// const result = state.filter((item) => item.id === id);
		// setState(result);
		setState([]);
	}
	async function resultArr() {
		try {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const data = await res.json();
			setState(data);
		} catch (e) {
			console.error(e);
		}
	}
	useEffect(() => {
		resultArr();
	}, []);
	return (
		<div className="container">
			<div className="paddcontainer">
				<div className="cards">
					{state.map((el, index) => {
						return (
							<div className="card" key={index}>
								<p>{el.name}</p>
								<p>{el.email}</p>
							</div>
						);
					})}
				</div>
				<Button onClick={deleteUsers}>Удалить</Button>
				<Button onClick={resultArr}>Add</Button>
			</div>
		</div>
	);
};
