import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [motivateVisible, setMotivateVisible] = useState<boolean>(false);

    return (
        <div className='navbar'>
            <div className='logo'>My Todos</div>
            <div className='btn'>
                {motivateVisible ? <Link to="/" className='button' onClick={() => setMotivateVisible(false)}>I am motivated!</Link> : 
                    <Link to="/motivate" className='button' onClick={() => setMotivateVisible(true)}>Motivate me!</Link>
                }
            </div>
        </div>
    )
}

export default Navbar;
