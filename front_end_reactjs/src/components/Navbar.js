import React, {useState, useEffect} from 'react' ;
import { Button } from './Button' ;
import { Link } from 'react-router-dom' ;
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        SF Crime Dashboard <i class="fas fa-database"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sf_safety' className='nav-links' onClick={closeMobileMenu}>
                            SF Safety
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/neighborhood_safety' className='nav-links' onClick={closeMobileMenu}>
                            Neighborhood Safety
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/police_effectiveness' className='nav-links' onClick={closeMobileMenu}>
                            Police Effectiveness
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/crime_categorization' className='nav-links' onClick={closeMobileMenu}>
                            Crime Categorization
                        </Link>
                    </li>                    
                    <li className='nav-item'>
                        <Link to='/crime_resolution' className='nav-links' onClick={closeMobileMenu}>
                            Crime Resolution
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sf_tourism' className='nav-links' onClick={closeMobileMenu}>
                            SF Tourism
                        </Link>
                    </li>                    
                    <li className='nav-item'>
                        <Link to='/all_records' className='nav-links-mobile' onClick={closeMobileMenu}>
                            All Records
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>All Records</Button>}
            </nav>
        </>
    )
}

export default Navbar