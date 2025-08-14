import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to September 15, 2025
    const targetDate = new Date('2025-09-15T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="bg-gradient-to-r from-primary to-primary-light text-white">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">Pre-Order Campaign Ends:</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm opacity-90">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm opacity-90">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm opacity-90">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm opacity-90">Seconds</div>
            </div>
          </div>
          <p className="text-sm opacity-90">September 15, 2025</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;