const setupRoutes = app => {
	app.get("/route1", (req, res, next) => {
		return res.json({ message: "AO" });
	});
};

export default setupRoutes;
