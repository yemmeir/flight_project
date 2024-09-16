const { Pool } = require("pg");

const pool = new Pool({
  user: "flightdata_bvom_user",
  host: "dpg-cpsabeg8fa8c73944td0-a.oregon-postgres.render.com",
  database: "flightdata_bvom",
  password: "fGsT9qcCVWmdWf4Gb3aUu9LLzb3YdceT",
  port: 5432,
});

module.exports = pool;
