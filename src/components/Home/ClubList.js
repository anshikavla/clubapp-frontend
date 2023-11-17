// ClubList.js
import React from 'react';

const ClubList = () => {
  return (
    
    <section id="clubList">
        <h3 style={{ fontSize: '24px' }}>Explore Clubs</h3>
      {/* Map through club data to render the list */}
      {/* Example: */}
      <article className="club">
        <img src="club1.jpg" alt="Club 1" />
        <h3>Club 1</h3>
        <p>Description of Club 1.</p>
      </article>

      <article className="club">
        <img src="club2.jpg" alt="Club 2" />
        <h3>Club 2</h3>
        <p>Description of Club 2.</p>
      </article>

      <article className="club">
        <img src="club3.jpg" alt="Club 3" />
        <h3>Club 3</h3>
        <p>Description of Club 3.</p>
      </article>

      <article className="club">
        <img src="club4.jpg" alt="Club 4" />
        <h3>Club 4</h3>
        <p>Description of Club 4.</p>
      </article>

      <article className="club">
        <img src="club5.jpg" alt="Club 5" />
        <h3>Club 5</h3>
        <p>Description of Club 5.</p>
      </article>

      <article className="club">
        <img src="club6.jpg" alt="Club 6" />
        <h3>Club 6</h3>
        <p>Description of Club 6.</p>
      </article>

      
      {/* Add more clubs as needed */}
    </section>
  );
};

export default ClubList;
