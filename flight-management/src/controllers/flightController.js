const pool = require("../db");

const getFlights = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM Flights");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const addFlight = async (req, res) => {
  const {
    airlineId,
    originCountryId,
    destinationCountryId,
    departureTime,
    landingTime,
    remainingTickets,
  } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO Flights (Airline_Id, Origin_Country_Id, Destination_Country_Id, Departure_Time, Landing_Time, Remaining_Tickets) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        airlineId,
        originCountryId,
        destinationCountryId,
        departureTime,
        landingTime,
        remainingTickets,
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getFlights, addFlight };
