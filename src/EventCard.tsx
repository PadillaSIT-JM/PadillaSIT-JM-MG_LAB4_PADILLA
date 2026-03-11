type EventProps = {
    eventName: string;
    venue: string;
    date: string;
    organizer: string;
    capacity: number;
    registeredStudents: string[];
};

function EventCard({
  eventName,
  venue,
  date,
  organizer,
  capacity,
  registeredStudents

}: EventProps) {
  return (
    <div className="Event-card">
      <h4>{eventName}</h4>
      <p>Venue: {venue}</p>
      <p>Date: {date}</p>
      <p>Organizer: {organizer}</p>
      <p>Capacity: {capacity}</p>
      <p>Registered Students: {registeredStudents.join(", ")}</p>

 
    </div>
  );
}

export default EventCard;