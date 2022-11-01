import Todos from "./components/Todos";
import moment from "moment";
import { useState } from "react";



const App = () => {
  return (
    <main>
      <section className="main-section">
        <div className="date-time-info">
          <h1>{moment().format('dddd')}</h1>
          <p>{moment().format('LL')}</p>
        </div>
        <Todos />
      </section>
    </main>
  );
};

export default App;
