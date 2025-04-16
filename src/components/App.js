import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetch a random dog image from the API when the component mounts
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImage(data.message); // `message` contains the image URL
      })
      .catch(error => {
        console.error('Error fetching dog image:', error);
      });
  }, []);

  return (
    <div>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: '100%', height: 'auto' }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
