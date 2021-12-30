import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>My Todos</div>
            <div className='btn'>
                <Link to="/motivate" className='button'>Motivate me!</Link> 
            </div>
        </div>
    )
}

export default Navbar;
