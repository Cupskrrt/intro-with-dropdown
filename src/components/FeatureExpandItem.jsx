import React from 'react';
import todo from '../images/icon-todo.svg';
import calendar from '../images/icon-calendar.svg';
import reminder from '../images/icon-reminders.svg';
import planning from '../images/icon-planning.svg';

export default function FeatureExpandItem() {
  return (
    <>
      <ul className='flex flex-col gap-4 ml-7'>
        <li className="flex gap-3">
          <img
            src={todo}
            alt="todo"
          />{' '}
          Todo List
        </li>
        <li className="flex gap-3">
          <img
            src={calendar}
            alt="calendar"
          />{' '}
          Calendar
        </li>
        <li className="flex gap-3">
          <img
            src={reminder}
            alt="reminder"
          />{' '}
          Reminders
        </li>
        <li className="flex gap-3">
          <img
            src={planning}
            alt="planning"
          />{' '}
          Planning
        </li>
      </ul>
    </>
  );
}
