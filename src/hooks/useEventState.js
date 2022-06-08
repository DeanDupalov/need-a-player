import { useState, useEffect } from 'react';

import * as api from '../api/data';


const useEventState = (eventId) => {
    const [event, setEvent] = useState({});


    useEffect(() => {
        api.getEventById(eventId)
            .then(result => {
                setEvent(result);
            })
    }, [eventId]);

    return [
        event,
        setEvent
    ]
}

export default useEventState;