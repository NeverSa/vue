module.exports = function(app) {
    app.use("/api/user", require("./user.js"));
};
