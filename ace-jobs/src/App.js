import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './app.css'
import { Header, Cta, Section, Testimonials, Footer, Features, } from './containers'
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cta />
      <Section />
      <Testimonials />
      <Features />
      <Footer />
    </div>
  );
}  

export default App;


