import React, { useContext } from "react";
import { CountContext } from "../App";

const Contact = () => {
	const [count, setCount] = useContext(CountContext);

	return (
		<div style={{ border: "1px solid gray", margin: "10px", padding: "5px" }}>
			<h2>Contact Component</h2>
			<h3>
				<button onClick={() => setCount(count + 1)}>
					Increase from Contact
				</button>
			</h3>
		</div>
	);
};

export default Contact;
