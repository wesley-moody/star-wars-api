import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  //  Keep track of and show loading status while fetching from API
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people");
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch("http swapi.dev/api/planets");
      let data = await res.json();
      setPlanets = res.json(data.results);
    }

    fetchPeople();
    fetchPlanets();
  }, []);
  console.log("people", people);
  console.log("planets", planets);

  return <div className='App'>Hello from App!</div>;
}

export default App;
