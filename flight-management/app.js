document
  .getElementById("register-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const email = document.getElementById("register-email").value;

    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, email }),
    });

    const data = await response.json();
    console.log(data);
  });

document
  .getElementById("login-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log(data);
    localStorage.setItem("token", data.token);
  });

document.getElementById("load-flights").addEventListener("click", async () => {
  const response = await fetch("/api/flights", {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
  const flights = await response.json();

  const flightsList = document.getElementById("flights-list");
  flightsList.innerHTML = "";
  flights.forEach((flight) => {
    const li = document.createElement("li");
    li.textContent = `Flight ID: ${flight.id}, Departure: ${flight.departure_time}, Arrival: ${flight.landing_time}`;
    flightsList.appendChild(li);
  });
});
