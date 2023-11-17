// ClubList.js
import React from 'react';

const ClubList = () => {
  return (
    <section id="clubList">
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
      {/* Add more clubs as needed */}
    </section>
  );
};

export default ClubList;
