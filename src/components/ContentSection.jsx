// enable React features
import React from 'react';
// import Bootstrap CSS for styling
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import Article component that is used to display individual articles wijthin the content section
import Article from './Article';
// The content section component receives a title and an array of articles as props and renders them in a section.
const ContentSection = ({ title, articles }) => {
  return (
    //section element with centered content, vertical margin
    <section className="content-section container my-4">
      {/*heading with large font size*, title prop used */}
      <h2 className="display-4">{title}</h2>
      {/*//map() is used to render each article in the articles array passing the title and content as props to the Article component.*/}
      {articles.map((article, index) => (
        //Article component with title and content props set to the title and content of the article
        <Article key={index} title={article.title} content={article.content} />
      ))}
    </section>
  );
};
//export ContentSection component for import in other files
export default ContentSection;