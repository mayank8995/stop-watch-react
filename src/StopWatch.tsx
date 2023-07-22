import * as React from 'react';

export default function StopWatch() {
  const [time, setTime] = React.useState(5400);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (active) {
      interval = setInterval(() => {
        setTime((time) => {
          if (time > 0) {
            return time - 1;
          } else {
            setActive(false);
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [active]);

  const formatTime = (time) => {
    const hr = Math.floor(time / 3600)
      .toString()
      .padStart(2, '0') as any; // seconds to hour
    let min = Math.floor((time % 3600) / 60);
    let sec = (time % 60).toString().padStart(2, '0');
    return `${hr}:${min}:${sec}`;
  };

  const handleStart = () => {
    setTime(5400);
    setActive(true);
  };

  const handlePauseResume = () => {
    setActive((prev) => !prev);
  };

  const handleEnd = () => {
    setTime(0);
    setActive(false);
  };

  return (
    <div>
      <div>{formatTime(time)}</div>
      <button onClick={handleStart}>Start</button> &nbsp;{' '}
      <button onClick={handlePauseResume}>Pause/Resume</button> &nbsp;{' '}
      <button onClick={handleEnd}>End</button>
    </div>
  );
}
