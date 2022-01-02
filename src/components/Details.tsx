import { useRef } from 'react';
import { TodosProps } from './types/Types';

type DetailsProps = {
    detailsItem: TodosProps[]
    setDetailsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Details = ({ detailsItem, setDetailsVisible }: DetailsProps) => {

    const detailsRef = useRef<HTMLDivElement>(null);
    //Function that exit the form when we click out of the form
    //Insted of "React.MouseEvent<HTMLDivElement>" I put "any" because I couldn't solve the error with target
    const handleExit = (event: any) => {
        if (!detailsRef.current?.contains(event.target)) {
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
                    <p>{detailsItem[0].date}</p>
                </div>
            </div>
        </div>
    )
}

export default Details;
