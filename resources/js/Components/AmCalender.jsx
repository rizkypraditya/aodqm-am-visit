import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Attribute from "./Attribute";

export default function AmCalender() {
    const [date, setDate] = useState(new Date());

    const namaHari = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"]

    const prevMonth = () => {
        setDate(
            (prevDate) =>
                new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
        );
    };

    const nextMonth = () => {
        setDate(
            (prevDate) =>
                new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
        );
    };

    const monthName = () => {
        return (
            date.toLocaleString("default", { month: "long" }) +
            " " +
            date.getFullYear()
        );
    };

    const daysInMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        return new Date(year, month, 0).getDate();
    };

    const firstDayOfMonth = () => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const renderDays = () => {
        const days = [];
        const daysCount = daysInMonth();
        const startDay = firstDayOfMonth();
        const today = new Date().getDate();

        for (let i = 0; i < startDay; i++) {
            days.push(
                <div
                    key={`empty-${i}`}
                    className="h-full w-full p-2 flex flex-col items-start justify-start text-center text-body border border-secondary-300 bg-secondary-100"
                ></div>
            );
        }

        for (let day = 1; day <= daysCount; day++) {
            const isToday =
                day === today &&
                date.getMonth() === new Date().getMonth() &&
                date.getFullYear() === new Date().getFullYear();
            days.push(
                <div
                    key={day}
                    className={`h-full w-full p-2 flex flex-col items-start justify-start text-center text-body border border-tertiary `}
                >
                    <div className={`${
                        isToday ? "bg-primary text-white" : ""
                    } mb-2 p-1 rounded-full aspect-square w-8`}>
                        <p>{day}</p>
                    </div>
                    <a href="" className="flex flex-col justify-start items-start text-body-sm p-2 border border-tertiary w-full rounded-md bg-white hover:bg-secondary-100 mb-2">
                        <p className="text-body-sm-heavy text-start">Title Laporan</p>
                        <Attribute name="Done">
                            <CheckCircleIcon className="text-primary w-4" />
                        </Attribute> 
                    </a>
                    <a href="" className="flex flex-col justify-start items-start text-body-sm p-2 border border-tertiary w-full rounded-md bg-white hover:bg-secondary-100 mb-2">
                        <p className="text-body-sm-heavy text-start">Title Laporan</p>
                        <Attribute name="Done">
                            <CheckCircleIcon className="text-primary w-4" />
                        </Attribute>
                    </a>
                </div>
            );
        }

        return days;
    };

    return (
        <div className="w-full mx-auto text-tertiary">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-h2">Kalender</h2>
                <div className="flex">
                    <p className="text-body-heavy">{monthName()}</p>
                    <button
                        className="w-6"
                        onClick={prevMonth}
                    >
                        <ChevronLeftIcon className="h-6 w-6 text-tertiary hover:text-tertiary-500" />
                    </button>
                    <button
                        className="w-6"
                        onClick={nextMonth}
                    >
                        <ChevronRightIcon className="h-6 w-6 text-tertiary hover:text-tertiary-500" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {namaHari.map((item) => (
                    <div className="h-full w-full flex items-center justify-center text-center text-body">
                        {item}
                    </div>
                ))}
                {renderDays()}
            </div>
        </div>
    );
};