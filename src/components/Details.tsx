import { useRef } from 'react';
import { DetailsProps } from '../types/types';

const Details: React.FC<DetailsProps> = ({ detailsItem, setDetailsVisible }) => {

    const detailsRef = useRef<HTMLDivElement>(null);
    //Function that exit the form when we click out of the form
    const handleExit = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!detailsRef.current?.contains(event.target as HTMLDivElement)) {
            setDetailsVisible(false);
        }
    }

    return (
        <div onClick={handleExit} className='details_wrapper'>
            <div className='details' ref={detailsRef}>
                <div className='details_title'>
                    <h2>{detailsItem[0].title}</h2>
                </div>
                <div className='details_description'>
                    <p>{detailsItem[0].description}</p>
                </div>
                <div className='details_date'>
                    <p>{new Date(detailsItem[0].date).toDateString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Details;
