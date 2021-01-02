import React, { createContext, useState } from "react";
import ProductCategory from "./ProductShops/ProductCategory";
import Productshop from "./ProductShops/Productshop";
import Contact from "./siblingsComponent/Contact";
import Header from "./siblingsComponent/Header";
import Home from "./siblingsComponent/Home";

export const CountContext = createContext();
export const CategoryContext = createContext();
const App = () => {
	const [count, setCount] = useState(0);
	const [category, setCategory] = useState("Mobile");
	return (
		<>
			<CategoryContext.Provider value={[category, setCategory]}>
				<ProductCategory></ProductCategory>
				<Productshop></Productshop>
			</CategoryContext.Provider>
			<hr />
			<CountContext.Provider value={[count, setCount]} className="App">
				<Header></Header>
				<Home></Home>
				<Contact></Contact>
			</CountContext.Provider>
		</>
	);
};

export default App;
