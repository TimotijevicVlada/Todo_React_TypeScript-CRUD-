import React from 'react';
import { MotivateProps } from '../types/types';

const Messages: React.FC<MotivateProps> = ({ motivateMsg }) => {

    return (
        <div className='messages'>
            {motivateMsg.map((item, index) => (
                <div className="msg" key={index}>
                    <div className="quote">"{item.quote}"</div>
                    <div className="author">-{item.author}</div>
                </div>
            ))}
        </div>

    )
}

export default Messages;
