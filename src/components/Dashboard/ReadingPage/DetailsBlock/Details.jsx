


import {Diary} from './Diary';
import {Statistics} from './Statistics';

export const Details = ({ readingData, onDeleteEvent }) => {
  return (
    <div>
      <h2>Reading Details</h2>
      <Diary events={readingData.diaryEvents} onDeleteEvent={onDeleteEvent} />
      <Statistics data={readingData.statistics} />
    </div>
  );
};