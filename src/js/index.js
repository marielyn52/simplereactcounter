//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";

//render your react application
//ReactDOM.render(<Home />, document.querySelector("#app"));

let onedigit, twodigits, threedigits, fourdigits, fivedigits, sixdigits;

function SimpleCounter() {
	return (
		<div id="app">
			<div class="counter">
				<div class="clock-img">
					<i class="fas fa-clock" />
				</div>
				<div>{onedigit}</div>
				<div>{twodigits}</div>
				<div>{threedigits}</div>
				<div>{fourdigits}</div>
				<div>{fivedigits}</div>
				<div>{sixdigits}</div>
			</div>
		</div>
	);
}
let digitcounter = 0;
setInterval(function() {
	onedigit = Math.floor((digitcounter / 100000) % 10);
	twodigits = Math.floor((digitcounter / 10000) % 10);
	threedigits = Math.floor((digitcounter / 1000) % 10);
	fourdigits = Math.floor((digitcounter / 100) % 10);
	fivedigits = Math.floor((digitcounter / 10) % 10);
	sixdigits = Math.floor((digitcounter / 1) % 10);
	digitcounter++;
	//console.log(digitone, digittwo, digitthree, digitfour, digitfive, digitsix);
	ReactDOM.render(
		<SimpleCounter
			onedigit
			twodigits
			threedigits
			fourdigits
			fivedigits
			sixdigits
		/>,
		document.querySelector("#app")
	);
}, 1000);
