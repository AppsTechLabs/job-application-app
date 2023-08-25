import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import './app.css'
import { Header, Cta, Section, Testimonials, Footer } from './containers'
import { Navbar, Button , Contactus} from './components'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Cta />
      <Button />
      <Section />
      <Contactus />
      <Testimonials />
      <Footer />
      <h1 className="text-primary">hello world</h1>
    </div>
  );
}  

export default App;


