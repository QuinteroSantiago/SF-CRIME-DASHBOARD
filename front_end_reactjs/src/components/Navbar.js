  
import React, {useState, useEffect} from 'react' ;
import MenuTabs from './MenuTabs';
import { Button } from './Button' ;
import { Link } from 'react-router-dom' ;
import './Navbar.css';
import Divider from '@material-ui/core/Divider';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);

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
                    <Link to="/" className="navbar-logo">
                        SF Crime Dashboard<i class="fas fa-balance-scale"/>
                    </Link>
                    
                    
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <div className='nav-menu'>
                </div>
                {button && <Button buttonStyle='btn--outline'>All Records</Button>}
            </nav>
            <Divider/>
            <div className = 'menu-tabs'>
            <MenuTabs/>
            </div>
        </>
    )
}

export default Navbar