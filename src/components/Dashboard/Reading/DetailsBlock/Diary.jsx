



export const Diary = ({ events, onDeleteEvent }) => {
    return (
      <div>
        <h3>Diary</h3>
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <div>Date: {event.date}</div>
              <div>Pages Read: {event.pages}</div>
              <div>Time: {event.time}</div>
              <div>Progress: {event.percentage}%</div>
              <button onClick={() => onDeleteEvent(event.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };