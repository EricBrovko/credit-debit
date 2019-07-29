// const API_PATH_SUBROUTES = "/subroutes";

module.exports = app => {
  app.use("/auth", require("../auth"));
  // app.use("/auth", require("./" + API_PATH_SUBROUTES + "/auth"));

  app.all("*", (req, res) => res.status(404).send());
};
