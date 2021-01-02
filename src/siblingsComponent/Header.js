import React, { useContext } from "react";
import { CountContext } from "../App";

const Header = () => {
	const [count, setCount] = useContext(CountContext);
	return (
		<div style={{ border: "1px solid gray", margin: "10px", padding: "5px" }}>
			<h2>Headder Component</h2>
			<h3>Increase count: {count}</h3>
			<button onClick={() => setCount(count + 1)}>Increase</button>
		</div>
	);
};

export default Header;
