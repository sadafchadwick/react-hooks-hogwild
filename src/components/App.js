import React from "react";
import Nav from "./Nav";
import Card from "./Card.js"
import hogs from "../porkers_data";

function App() {
	const hogCards = hogs.map((hog) => {
		// console.log(hog)
		return <Card 
					name = {hog.name}
					image = {hog.image}
				/>
	})
	return (
		<div className="App">
			<Nav />
			{hogCards}
		</div>
	);
}

export default App;
