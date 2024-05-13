// Imports
import logo from './udara.jpg';
import { useState } from 'react'; // Import useState from react
import './App.css';

// App Component
function App() {
  // State to manage the like status
  const [status, setStatus] = useState('bi bi-hand-thumbs-up');

  // Function to handle the like button click
  const handleLikeClick = () => {
    // Toggle the status between 'bi bi-hand-thumbs-up-fill' and 'bi bi-hand-thumbs-up'
    setStatus((prev_Status) => (prev_Status === 'bi bi-hand-thumbs-up' ? 'bi bi-hand-thumbs-up-fill' : 'bi bi-hand-thumbs-up'));
  };

  // Return JSX
  return (
    <div className='container'>
      <span className='profile-data'>
        <h2>Udara Neminda</h2>
        <img src={logo} alt="No DP" className='dp'/>
      </span>
      {/* Pass status and handleLikeClick to LikeButton component */}
      <LikeButton onLike={status} onClick={handleLikeClick}/>
    </div>
  );
}

// LikeButton Component
function LikeButton({ onLike, onClick }) {
  return (
    <button className='like-btn' onClick={onClick}>
      <i className={onLike}></i> Like
    </button>
  );
}

// Export the App component as default
export default App;