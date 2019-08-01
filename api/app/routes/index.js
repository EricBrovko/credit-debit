const API_PATH_SUBROUTES = "/subroutes";

module.exports = app => {
  app.use("/auth", require("../auth"));
  // app.use("/auth", require("./" + API_PATH_SUBROUTES + "/auth"));
  app.use("/user", require("./" + API_PATH_SUBROUTES + "/user"));

  app.all("*", (req, res) => res.status(404).send());
};
