import React, { useState, useEffect } from "react";
import WOW from "wowjs";

const CoutDown = ({ dateTime }) => {
    const [months, setMonths] = useState('00');
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    // Función para analizar el formato DD/MM/YYYY HH:MM
    const parseDateTime = (dateTimeString) => {
        const [datePart, timePart] = dateTimeString.split(" ");
        const [day, month, year] = datePart.split("/").map(Number);
        const [hour, minute] = timePart.split(":").map(Number);
        return new Date(year, month - 1, day, hour, minute).getTime();
    };

    const targetTime = parseDateTime(dateTime);

    useEffect(() => {
        const countdown = () => {
            const currentDate = new Date().getTime();
            const diff = targetTime - currentDate;

            const month = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12)));
            const days = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12))) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setSeconds(seconds < 10 ? '0' + seconds : seconds);
            setMinutes(minutes < 10 ? '0' + minutes : minutes);
            setHours(hours < 10 ? '0' + hours : hours);
            setDays(days < 10 ? '0' + days : days);
            setMonths(month < 10 ? '0' + month : month);
        };

        const interval = setInterval(countdown, 1000);

        return () => clearInterval(interval);
    }, [targetTime]);

    const [wow, setWow] = useState(new WOW.WOW());
    useEffect(() => {
        setWow(wow.init());
    }, []);

    return (
        <>            
            <div className="box wow zoomIn" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <div>
                    <div className="time">{days}</div> 
                    <span>Días</span> 
                </div>
            </div>
            <div className="box wow zoomIn" data-wow-delay="0.5s" data-wow-duration="0.8s">
                <div>
                    <div className="time">{hours}</div> 
                    <span>Horas</span> 
                </div>
            </div>
            <div className="box wow zoomIn" data-wow-delay="0.6s" data-wow-duration="0.8s">
                <div>
                    <div className="time">{minutes}</div> 
                    <span>Minutos</span> 
                </div>
            </div>
            <div className="box wow zoomIn" data-wow-delay="0.7s" data-wow-duration="0.8s">
                <div>
                    <div className="time">{seconds}</div> 
                    <span>Segundos</span> 
                </div>
            </div>
        </>
    );
}

export default CoutDown;
