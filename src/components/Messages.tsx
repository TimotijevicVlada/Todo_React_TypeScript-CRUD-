import React from 'react';

type MotivateProps = {
    motivateMsg: {
        author: string
        quote: string
    }[]
}

const Messages = ({ motivateMsg }: MotivateProps) => {
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
