import React from 'react'
import axios from 'axios'
import Character from './Character'
import { useEffect, useState } from 'react'

const urlPlanets = 'http://localhost:9009/api/planets';
console.log(urlPlanets);
const urlPeople = 'http://localhost:9009/api/people';
console.log(urlPeople);

function App() {
  const [starWarsPeople, setStarWarsPeople] = useState([]);
  console.log(starWarsPeople);

  useEffect(() => {
    axios.get(urlPeople).then(res => {
      console.log("test")
      const peopleData = res.data;
      axios.get(urlPlanets).then(res2 => {
        const addressData = res2.data;

        const peopleWithAddresses = peopleData.map((person) => {
          const planet = addressData.find((address) => address.id === person.homeworld);

          return {
            id: person.id,
            name: person.name,
            address: planet.name
          };
        });

        setStarWarsPeople(peopleWithAddresses);
        console.log(starWarsPeople);
      });
    });
  }, []);

  if (!starWarsPeople.length) return "Searching for Star Wars Characters.."

  return (
    <div>
      <h1>Star Wars Characters </h1>
      <p>{starWarsPeople.length < 1 && 'Loading'}</p>
      { starWarsPeople.length > 0 && starWarsPeople.map((characterInfo) => {
        return (<Character
        key = {characterInfo.id}
        character = {characterInfo.name}
        homePlanet = {characterInfo.address}
      
      />)
      })}
    </div>
  );
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
