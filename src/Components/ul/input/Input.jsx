import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Input.scss";
export const Input = () => {
	const [inputValue1, setInputValue1] = useState("");
	const [inputValue, setInputValue] = useState("");
	useEffect(() => {
		console.log(inputValue1.length);
	}, [inputValue1]);
	const handleChange = (event) => {
		setInputValue1(event.target.value);
	};
	const resultValue = (text) => {
		localStorage.setItem("key", inputValue);
		setInputValue(text);
	};
	useEffect(() => {
		resultValue();
	}, []);
	return (
		<div>
			<label>Введите слово: </label>
			<input
				type="text"
				value={inputValue1}
				onChange={handleChange}
				placeholder="text is console.log"
			/>
			{/* <button>Add</button> */}
			<input
				type="text"
				onChange={(e) => {
					resultValue(e.target.value);
				}}
				placeholder="text is localStorage"
			/>
			{/* <button>Add</button> */}
		</div>
	);
};
