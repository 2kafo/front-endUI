import React, { useState } from 'react';
import './home.css';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";



//BEM block element modifier

const Menu = () => (
    <>
        <p>
          <button type='button'> <a href="/signup">Sign up</a> </button>  
        </p>
        <p><a href="/login">Sign in</a></p>

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
                <p><a href="/login">Sign in</a></p>
                <button type='button'><a href="signup">Sign up</a></button>
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
                                {/* <a href="/login">Sign in</a> */}
                                <Link to="/login">Sign in</Link>
                                
                                <Link className="link" to="/signup"><button>Sign up</button></Link>
                                 
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