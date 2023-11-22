// TodayEvents.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TodayEvents.css'; // Import the CSS file

function TodayEvents() {
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch events for the initial date
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    console.log(selectedDate);
    try {
      const response = await axios.get('http://localhost:5000/events', {
        params: {
          date: selectedDate,
        },
      });
      setEvents(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      setLoading(false);
    }
  };

  return (
    <div className="today-events">
      <div className="top-left">
        <h1>Events</h1>
        <br></br><br></br>
        {events.length > 0 ? (
          // Use a for loop to iterate through events and display information
          events.map((event, index) => (
            <div key={index} className="event-box">
              <p className="event-info"><i>Name:</i> {event.eventName}</p>
              <p className="event-info"><i>Details:</i><br></br> {event.eventDetails}</p>
              <p className="event-info"><i>Date: </i>{event.eventDate}</p>
              <br></br>
            </div>
            
          ))
        ) : (
          <p></p> // Display an empty paragraph when there are no events
        )}
      </div>
      <div className="top-right">
        <label htmlFor="eventDate">Select Date:</label>
        <input
          type="date"
          id="eventDate"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button onClick={fetchEvents}>Get Events</button>
      </div>
      {events.length > 0 && (
        <div className="content">
          {loading ? (
            <p>Loading events...</p>
          ) : (
            <ul>
              {events.map((event) => (
  <li key={event._id}></li>
))}

            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default TodayEvents;
