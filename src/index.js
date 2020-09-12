const app = require("express")();
const http = require("http").createServer(app);
const morgan = require("morgan");
const cookParser = require("cookie-parser");
const bodyParser = require("body-parser");
const passport = require("passport");

app.use(passport.initialize());
app.use(passport.session());
app.use(morgan("dev"));
app.use(cookParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.raw());

const { router: shoesRouter } = require("./shoesRouter");

const port = "8000";

app.use("/shoes", shoesRouter);

http.listen(port, () => console.log(`listening on port ${port}`));
