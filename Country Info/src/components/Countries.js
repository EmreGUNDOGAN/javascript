import React from "react";
import Card from "./Card";

export default function Countries() {
  const [input, setInput] = React.useState({
    userInput: "",
  });

  const [country, setCountry] = React.useState({});

  const [active, setActive] = React.useState(false);

  async function fetchData(countryName = "germany") {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${countryName} `);
      const data = await res.json();
      console.log(data[0]);
      setCountry(data[0]);
      setActive(true);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  function handleChange(event) {
    setInput((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitBtn(event) {
    event.preventDefault();
    setActive(true);
    fetchData(input.userInput);
  }

  return (
    <>
      <p className="error-message">
        Due to API issues make sure to enter valid country name, on any error refresh the page.
      </p>
      <div className="container">
        <form action="" onSubmit={submitBtn}>
          <input
            required
            type="text"
            name="userInput"
            value={input.userInput}
            onChange={handleChange}
            placeholder="e.g Germany"
          />
        
          <button>Search</button>
        </form>

        {!active && <p>Loading</p>}
        {active && <Card country={country} />}
      </div>
    </>
  );
}
