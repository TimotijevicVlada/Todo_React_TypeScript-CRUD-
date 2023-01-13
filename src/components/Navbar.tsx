import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();
    const motivatePage = useMemo(() => location.pathname === "/motivate", [location]);

    return (
        <div className='navbar'>
            <div className='logo'>My Todos</div>
            <div className='btn'>
                <Link to={motivatePage ? "/" : "/motivate"} className='button'>
                    {motivatePage ? "I am motivated!" : "Motivate me!"}
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
