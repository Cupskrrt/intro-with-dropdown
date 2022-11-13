import React from "react";
import todo from '../images/icon-todo.svg'
import calendar from '../images/icon-calendar.svg'
import reminder from '../images/icon-reminders.svg'
import planning from '../images/icon-planning.svg'

export default function FeatureDropdownItem() {
    return(
        <div className="absolute left-[7rem] top-[4rem] shadow-2xl rounded-xl">
            <ul className="flex flex-col w-[10rem] items-start gap-2 p-5 text-gray">
                <li className="flex gap-3"><img src={todo} alt="todo" /> Todo List</li>
                <li className="flex gap-3"><img src={calendar} alt="calendar" /> Calendar</li>
                <li className="flex gap-3"><img src={reminder} alt="reminder" /> Reminders</li>
                <li className="flex gap-3"><img src={planning} alt="planning" /> Planning</li>
            </ul>
        </div>
    )
}