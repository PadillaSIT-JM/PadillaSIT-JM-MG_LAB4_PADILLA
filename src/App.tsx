import './App.css'
import EventCard from './EventCard'

function App() {
  const eventName = [
    {
      eventName: "Culminating",
      venue: "UB Legacy Gymnasium",
      date: "February 16,2026",
      organizer: "Nicolette Kervyn",
      capacity: 100,
      registeredStudents: ["Archi", "Mica", "Joe", "Miguel"]
    },
    {
      eventName: "Tech Symposium",
      venue: "SIT Laboratory",
      date: "February 24,2026",
      organizer: "Josephine Dela Cruz",
      capacity: 100,
      registeredStudents: ["Miko", "Javen", "Tremi", "Dave"]

    },
    {
      eventName: "Sports Fest",
      venue: "UB Gymnasium",
      date: "March 19,2026",
      organizer: " Quincy De Guzman",
      capacity: 100,
      registeredStudents: ["Jaze", "Klye", "Ryan", "Zack"]
    }
  ];

  return (
    <>
      <h1>University Event Registration Dashboard</h1>
      <section>

        {eventName.map((event, index) => (
          <EventCard
            key={index}
            eventName={event.eventName}
            venue={event.venue}
            date={event.date}
            organizer={event.organizer}
            capacity={event.capacity}
            registeredStudents={event.registeredStudents}
          />
        ))}
      </section>
    </>
  );
}

export default App