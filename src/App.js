import React, { Component } from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import ContactUs from "./components/contact/ContactUs";
import Footer from "./components/footer/Footer";
import resumeData from "./resumeData";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}
export default App;
