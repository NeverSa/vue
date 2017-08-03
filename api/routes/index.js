module.exports = function(app) {
    app.use("/api/user", require("./user.js"));
    app.use("/api/goods", require("./goods.js"));
};
