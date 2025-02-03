(async () => {
  const fetch = await import('node-fetch');

  // Fetch Exchange Rates
  fetch.default("https://v6.exchangerate-api.com/v6/b11b7775a7d823efffd22253/latest/USD")
    .then((res) => res.json())
    .then((data) => {
      console.log("Exchange Rates:", data.conversion_rates);
    })
    .catch((error) => console.error("Error fetching exchange rates:", error));

  // Fetch Countries
  fetch.default("https://country-items-api-ebc8cb908cd2.herokuapp.com/countries")
  .then((res) => res.text())  // Read the response as text first
  .then((data) => {
    console.log("Raw Response:", data);  // Log the raw response

    // Try parsing it as JSON if it looks correct
    try {
      const jsonData = JSON.parse(data);
      console.log("Fetched Countries:", jsonData.map((country) => country.country));
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  })
  .catch((error) => console.error("Error fetching countries:", error));

})();
