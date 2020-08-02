import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Dimmer, Loader } from "semantic-ui-react";
import Home from "./components/Home";
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  //  State variables all go here with initial state == empty array
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  //  Keep track of and show loading status while fetching from API with initial state == true
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  Callback function for first arg
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people");
      let data = await res.json();
      setPeople(data.results);
    }

    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets");
      let data = await res.json();
      setPlanets(data.results);
    }

    fetchPeople();
    fetchPlanets();
    setLoading(false);
    //  Second arg is empty dependency array since only called once when component mounts to DOM
  }, []);
  // console.log("people", people);
  // console.log("planets", planets);

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/people'>
                <People data={people} />
              </Route>
              <Route exact path='/planets'>
                <Planets data={planets} />
              </Route>
            </Switch>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
