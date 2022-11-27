import React from "react"

function Jokes(props){

    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }

    return (
      <div className="joke">
        <h4 className="setup">{props.setup}</h4>
        {isShown && <p className="punchline">- {props.punchline}</p>}
        {<button onClick={toggleShown}>{isShown ? "Show" : "Hide"} Punchline</button>}
      </div>
    );
}

export default Jokes