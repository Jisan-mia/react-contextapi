import React, { useContext } from "react";
import { CountContext } from "../App";
import Shop from "./Shop";

const Home = () => {
	const count = useContext(CountContext);
	return (
		<div style={{ border: "1px solid gray", margin: "10px", padding: "5px" }}>
			<h2>Home Component: Count-{count}</h2>

			<Shop count={count}></Shop>
		</div>
	);
};

export default Home;
