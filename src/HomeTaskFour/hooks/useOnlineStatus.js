import { useState, useEffect } from 'react';

function getOnlineStatus() {
    return window.navigator.onLine;
}

export default function useOnlineStatus() {
    const [onlineStatus, setOnlineStatus] = useState(getOnlineStatus());

    const setOnline = () => setOnlineStatus(true);

    const setOffline = () => setOnlineStatus(false);

    useEffect(() => {
        window.addEventListener("online", setOnline);
        window.addEventListener("offline", setOffline);

        return () => {
            window.removeEventListener("online", setOnline);
            window.removeEventListener("offline", setOffline);
        };
    }, []);

  return onlineStatus;
}