const app = require("express")();
const http = require("http").createServer(app);
const bodyParser = require("body-parser");

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
