import React, { useState } from 'react';
import './home.css';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


//BEM block element modifier

const Menu = () => (
    <>
        <p>
          <button type='button'>Sign up</button>  
        </p>
        <p>Sign in</p>

    </>
)
function Home() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
        <div className='home__navbar'>
            <div className='home__navbar-links'>
                <div className='home__navbar-links_logo'>
                    Technical Assesment
                </div>

            </div>
            <div className='home__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='home__navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='home__navbar-menu_container scale-up-center'>
                        <div className='home__navbar-menu_container-link'>
                            <Menu />
                            <div className='home__navbar-menu_container-links-sign'>
                                <p><a href="/login">Sign in</a></p>
                                <button type='button'>Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
        <div className='information  section__margin'>
            <h3><strong>Important information!</strong></h3> <hr />
            <p><h4>For Admin User Details</h4>  </p>
           <p> Username:technical@assesment.com</p>
            <p>Password: 1234</p>
        </div>
    </>
    )
}

export default Home