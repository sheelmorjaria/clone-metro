import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import "./App.css"; // Custom styles
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported


//main container for the application
const App = () => {
  //array of articles with title and content, which is passed to the ContentSection component
  const articles = [
    { title: "Latest News", content: "This is the latest news content." },
    { title: "Sports", content: "This is the sports content." },
    { title: "Entertainment", content: "This is the entertainment content." },
    { title: "Lifestyle", content: "This is the lifestyle content." },
    { title: "Soaps", content: "This is the soaps content." },
  ];

  return (
    //app takes up minimum viewport height,using flexbox layout with children in a column
    <div className="app min-vh-100 d-flex flex-column">
      {/*top component that is rendered*/}
      <Header />
      {/*//navbar rendered below the header component*/}
      <NavBar />
      {/*wrap the main content area and expands to fill remaining space in the viewport*/}
      <div className="content-wrapper flex-grow-1">
        {/*center the content and add vertical padding*/}
        <main className="container py-4">
          {/*this component is rendered inside the main element, with title prop set to "Top Stories" and articles prop set to the articles array*/}
          <ContentSection title="Top Stories" articles={articles} />
        </main>
      </div>
      <a href="https://metro.co.uk/" className="metro-link">Metro</a>
      {/*footer component rendered at the bottom*/}
      <Footer />
      {/*link to the original Metro website*/}
      
    </div>
  );
};
{/*make available for import in other files*/}
export default App;
