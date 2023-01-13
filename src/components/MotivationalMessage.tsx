import { useState, useEffect } from 'react';
import Messages from './Messages';
import axios from 'axios';
import { MessagesProps } from '../types/types';

const MotivationalMessage = () => {

    //For some reason this state doesn't accept when I put  "<MotivateProps | null>"
    const [motivateMsg, setMotivateMsg] = useState<MessagesProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        getMotivate();
    }, []);

    //Function that get motivational message from API
    const getMotivate = async () => {
        try {
            const response = await axios.get("https://run.mocky.io/v3/dee319cd-aa8b-4e30-b86e-3743237fca55");
            setMotivateMsg(response.data.motivational_quotes);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='motivate'>
            <div className="title">
                <h2>Motivational messages</h2>
            </div>
            {isLoading ?
                <h2 className='loading'>Loading...</h2>
                :
                <Messages motivateMsg={motivateMsg} />
            }
        </div>
    )
}

export default MotivationalMessage;
