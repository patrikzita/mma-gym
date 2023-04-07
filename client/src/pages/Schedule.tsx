import { useState } from "react";
import { SubHeader } from "../component/Header/SubHeader";
type ButtonProps = {
  day: string;
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
};

const Button = ({ day, selectedDay, setSelectedDay }: ButtonProps) => {
  return (
    <button
      className={`${
        selectedDay === day
          ? "bg-secondary text-white"
          : "bg-gray-200 text-gray-700"
      } py-2 px-4 rounded`}
      onClick={() => setSelectedDay(day)}
    >
      {day}
    </button>
  );
};

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const SCHEDULES = [
  {
    day: "Monday",
    daySchedule: [
      {
        className: "Grapling",
        start: "7:00 AM",
        end: "9:00 AM",
        trainer: "Karlos Vémola",
      },
      {
        className: "Box training",
        start: "9:30 AM",
        end: "10:30 PM",
        trainer: "Jon Jones",
      },
      {
        className: "Kickbox",
        start: "12:00 PM",
        end: "13:00 PM",
        trainer: "André Reinders",
      },
    ],
  },
  {
    day: "Tuesday",
    daySchedule: [
      {
        className: "Grapling",
        start: "10:00 AM",
        end: "11:00 AM",
        trainer: "David Dvořák",
      },
      {
        className: "Box training",
        start: "1:00 PM",
        end: "2:00 PM",
        trainer: "Jon Jones",
      },
      {
        className: "Mental resistance",
        start: "3:00 PM",
        end: "4:00 PM",
        trainer: "Jiří Procházka",
      },
    ],
  },
  {
    day: "Wednesday",
    daySchedule: [
      {
        className: "Complex MMA",
        start: "7:00 AM",
        end: "10:00 AM",
        trainer: "Patrik Kincl",
      },
      {
        className: "Box",
        start: "11:00 AM",
        end: "1:00 PM",
        trainer: "Jon Jones",
      },
      {
        className: "Mental resistance",
        start: "2:00 PM",
        end: "4:00 PM",
        trainer: "Jiří Procházka",
      },
      {
        className: "Box",
        start: "4:00 PM",
        end: "5:00 PM",
        trainer: "Jon Jones",
      },
    ],
  },
  {
    day: "Thursday",
    daySchedule: [
      {
        className: "Grapling",
        start: "10:00 AM",
        end: "11:00 AM",
        trainer: "David Dvořák",
      },
      {
        className: "Box training",
        start: "1:00 PM",
        end: "2:00 PM",
        trainer: "Jon Jones",
      },
      {
        className: "Mental resistance",
        start: "3:00 PM",
        end: "4:00 PM",
        trainer: "Jiří Procházka",
      },
    ],
  },
  {
    day: "Friday",
    daySchedule: [
      {
        className: "Grapling",
        start: "10:00 AM",
        end: "11:00 AM",
        trainer: "David Dvořák",
      },
      {
        className: "Box training",
        start: "1:00 PM",
        end: "2:00 PM",
        trainer: "Jon Jones",
      },
      {
        className: "Mental resistance",
        start: "3:00 PM",
        end: "4:00 PM",
        trainer: "Jiří Procházka",
      },
    ],
  },
  {
    day: "Saturday",
    daySchedule: [
      {
        className: "Grapling",
        start: "10:00 AM",
        end: "11:00 AM",
        trainer: "David Dvořák",
      },
      {
        className: "Box training",
        start: "1:00 PM",
        end: "2:00 PM",
        trainer: "Jon Jones",
      },
      {
        className: "Mental resistance",
        start: "3:00 PM",
        end: "4:00 PM",
        trainer: "Jiří Procházka",
      },
    ],
  },
  {
    day: "Sunday",
    daySchedule: [
      {
        className: "Grapling",
        start: "10:00 AM",
        end: "11:00 AM",
        trainer: "David Dvořák",
      },
    ],
  },
];

type TimeSlotProps = {
  className: string;
  start: string;
  end: string;
  trainer: string;
};

const TimeSlot = ({ className, start, end, trainer }: TimeSlotProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-4 bg-gray-200 px-4 py-6 drop-shadow">
      <div className="flex flex-col text-center flex-1">
        <h1 className="text-gray-500 font-medium">Class Name</h1>
        <h2 className="font-bold text-xl">{className}</h2>
      </div>
      <div className="flex flex-col text-center flex-1">
        <h1 className="text-gray-500 font-medium">Time</h1>
        <h2 className="font-bold text-xl">
          {start} - {end}
        </h2>
      </div>
      <div className="flex flex-col text-center flex-1">
        <h1 className="text-gray-500 font-medium">Trainer</h1>
        <h2 className="font-bold text-xl">{trainer}</h2>
      </div>
      <div className="flex flex-col text-center flex-1">
        <button className="text-white mx-auto bg-gray-600 hover:bg-secondary rounded-full text-lg px-5 py-2.5 ">
          Join Now
        </button>
      </div>
    </div>
  );
};

export const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  const selectedSchedule = SCHEDULES.find(
    (schedule) => schedule.day === selectedDay
  );

  return (
    <main>
      <SubHeader title="Schedule" />
      <div className="flex flex-col gap-y-8 items-center my-32">
        <div className="flex flex-col sm:flex-row flex-nowrap lg:flex-wrap gap-4">
          {DAYS.map((day) => (
            <Button
              key={day}
              day={day}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
            />
          ))}
        </div>
        <div className="w-3/4 flex flex-col gap-y-4">
          {selectedSchedule?.daySchedule.map((timeSlot, index) => (
            <TimeSlot key={timeSlot.className + index} {...timeSlot} />
          ))}
        </div>
      </div>
    </main>
  );
};
