import React from "react";
import moment from "moment";
import "moment/locale/pt-br";
import MovieRoutes from "./movieRoutes";

function App() {
  moment.locale("pt-br");
  return (
    <div className="App">
      <MovieRoutes />
    </div>
  );
}

export default App;
