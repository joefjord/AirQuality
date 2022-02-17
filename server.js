"use strict";

const app = require("./app");
const PORT = 8000;

//This are declarations for the app.listen
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";
 
app.listen(PORT, () => {
    const BLUE = "\u001b[34;1m";
	const GREEN = "\u001b[32;1m";
	const RESET = "\u001b[0m";
	
	// Default to development mode
	let mode = process.env.NODE_ENV || "development";
	// Then add some color
	const color = isProduction ? GREEN : BLUE;
	mode = `${color}${mode}${RESET}`;
	
	console.log(`Server is listenting on http://localhost:${PORT} in ${mode} mode`);
});