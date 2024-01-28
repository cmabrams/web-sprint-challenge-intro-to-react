import React, { useState } from 'react'

function Character({character,homePlanet}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [homeworldView, setHomeworldView] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeWorld = () => {
    setHomeworldView(!homeworldView);
  }
  return (
    <div className="character-card" onClick={toggleHomeWorld}>
      <h3 className="character-name">{character}</h3>
      
      {homeworldView && (
        <p className="character-planet">
          Planet: {homePlanet}
        </p>
      )}
    </div>
  )
}

export default Character
