export function formatTime(time) {
    const hours = Math.floor(Math.random() * 24); // 0-23
    const minutes = Math.floor(Math.random() * 60); // 0-59
    const seconds = Math.floor(Math.random() * 60); // 0-59

    time = { hours, minutes, seconds };

    const formattedHours = String(time.hours).padStart(2, '0');
    const formattedMinutes = String(time.minutes).padStart(2, '0');
    const formattedSeconds = String(time.seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}