import React from "react";
import Card from "../Card";


// error handle, try if oluştur. ! ise fetch yapma.

export default function Countries() {

    const [input, setInput] = React.useState({
        userInput: ""
    })

    
    const [country, setCountry] = React.useState({});

    const [active, setActive] = React.useState(false)
  
        async function fetchData(countryName= "canada") {
          try {
          const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
          const data = await res.json()
          console.log(data[0]);
          setCountry(data[0])
          setActive(true);
          } catch (error) {
            console.error(error)
          }
        }

    React.useEffect(() => {
      fetchData();
    }, []);


      function handleChange(event){
        setInput (prevData => {
          return {
            ...prevData,
            [event.target.name]: event.target.value
        }
        })
    }

    function submitBtn(event){
      event.preventDefault()
      setActive(true)
      fetchData(input.userInput)

    }

    console.log(country)

    return (
      
        <div className="container">
          <form action="" onSubmit={submitBtn}>
            <input type="text" name="userInput" value={input.userInput} onChange={handleChange} placeholder="e.g Germany" />
            <button>Search</button>
          </form>

          {!active && <p>Loading</p>}
          {active && <Card country={country} />}
        </div>
      
    );
}