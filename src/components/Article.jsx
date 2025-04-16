//make React features available
import React from 'react';
 // Bootstrap CSS is imported for styling
import 'bootstrap/dist/css/bootstrap.min.css';
// The article component receives the title and content of an article as props and renders them in a card.
const Article = ({ title, content }) => {
  return (
    //outermost element is a card with a bottom margin
    <div className="card mb-4">
      {/* wrap content of card applying styling */}
      <div className="card-body">
        {/* Bootstrap card styling with title prop used as content of the heading*/}
        <h5 className="card-title">{title}</h5>
        {/*Bootstrap card text styling, with content as prop for content of the paragraph */}
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};
//export Article component, available for import in other files
export default Article;