import express from "express";
export const app = express();
import path from "path";
const PORT = process.env.PORT || 5000;

import { engine } from "express-handlebars";

app.engine(
  "hbs",
  engine({
    defaultLayout: "base",
    partialsDir: path.join(__dirname, "/views/partials"),
    layoutsDir: path.join(__dirname, "/views/layouts"),
    extname: "hbs",
    helpers: {
      inc: function (value, options) {
        return parseInt(value) + 1;
      },
    },
  })
);

app.set("view engine", "hbs");

import { router } from "./router";
app.use(express.static(path.join(__dirname, "public")));
app.use(router);
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
