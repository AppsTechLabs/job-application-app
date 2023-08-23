import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { Header, Footer } from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="text-primary">hello world</h1>
      <Footer />
    </div>
  );
}  

export default App;


