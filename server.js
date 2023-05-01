// import dotenv, { config } from 'dotenv';
const express = require('express')
const next = require('next')
require('dotenv').config()
// import dotenv, { config } from 'dotenv';
// dotenv.config();
const handler = require('./pages/api/contact');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// Обработка запросов к корневому URL
	server.get("/", (req, res) => {
		return app.render(req, res, "/", req.query);
	})

	server.post("/api/contact", handler.handler);

	// Обработка запросов к другим страницам
	server.get("*", (req, res) => {
		return handle(req, res);
	});

	const port = process.env.PORT || 3000;
	server.listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
