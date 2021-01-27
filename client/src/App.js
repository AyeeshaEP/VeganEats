import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom"
import axios from "axios";
import { baseURL, config } from "./services";
import Eatery from "./components/Eatery";
import Form from "./components/Form";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main";



import './App.css';

function App() {
//ones state for places?
  const [eateries, setEateries] = useState([]);
  //one state for toggle
  const [toggleFetch, setToggleFetch] = useState(false);

  //get data from api when toggle changes
  useEffect(() => {
    const getEateries = async () => {
      const resp = await axios.get(baseURL, config);
      setEateries(resp.data.records)
    
    }
    getEateries();
  }, [toggleFetch]);



  return (
    <div className="App">
      <Nav />
      <Route exact path="/list">
        <main>
        {eateries.map((eatery) => (
          <Link key={eatery.id} to={`/eatery/${eatery.id}`}>{eatery.fields.eatery}</Link>
        ))}
          </main>
        </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/eatery/:id">
        <Eatery eateries={eateries} />
      </Route>
      <Route exact path="/">
        <Main
          eateries={eateries}></Main>
        </Route>
    </div>
  );
}

export default App;

