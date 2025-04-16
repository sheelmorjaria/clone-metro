{/* import StrictMode from react library to highlight potential problems */}
import { StrictMode } from 'react'
{/*create a root for rendering a React component tree*/}
import { createRoot } from 'react-dom/client'
{/*global styles*/}
import './index.css'
{/*import the root component to be rendered in the DOM*/}
import App from './App.jsx'
{/*create a root selecting the DOM element with ID root where the React app will be mounted*/}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* App component is rendered inside the StrictMode element */}
    <App />
  </StrictMode>,
)
