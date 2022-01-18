import React, {useState} from 'react'
import './Sidebar.css'
import logo from '../assets/dharmish-college-logo.jpg'


function sidebar() {
    const [inactive, setInactive] = useState(false);
    return (
        <div className='App'>
        <div className={`sidebar ${!inactive ? 'inactive' : ''}`}>
            <div className='logo-section'>
                <div className='logo'>
                    <img src={logo}/>
                </div>

                <div className='logo-name'>
                    Dharmsinh Desai University
                </div>

                <div 
                    onClick = {() => {
                        setInactive(!inactive);
                    }}
                    className='toggle-btn'
                >
                    {!inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
                </div>
            </div>

            <div className='divider'></div>
            <div className='sidebar-links'>
                <ul>
                    <li>
                        <a className='links'>
                            <div className='links-icon'>
                                <i class="bi bi-house-fill"></i>
                            </div>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    <li>
                        <a className='links'>
                            <div className='links-icon'>
                                <i class="bi bi-card-checklist"></i>
                            </div>
                            <span>Opening-Closing Rank</span>
                        </a>
                    </li>

                    <li>
                        <a className='links'>
                            <div className='links-icon'>
                                <i class="bi bi-calendar-date"></i>
                            </div>
                            <span>Important Dates</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className='navbar'>
            <div className=''>

            </div>
        </div>

        {/* <div className='navbar'>
            <div className='navbar-name'>
                {!inactive ? 'Dharmsinh Desai University' : ''}
            </div>  
        </div> */}
        </div>
    )
}

export default sidebar
