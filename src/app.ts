import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";

import { Pool } from "pg";
import express from "express";

const app = express();
const port = process.env.PORT || 3011;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
});

Sentry.init({
  dsn: "",
  release: "logging-test@" + process.env.SHA,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
    new Tracing.Integrations.Postgres(),
  ],
  debug: true,
  tracesSampleRate: 1.0,
});

app.get("/", async (req, res) => {
  const query = "SELECT NOW()";

  const version = await pool.query(query);

  res.send(version);
});

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
