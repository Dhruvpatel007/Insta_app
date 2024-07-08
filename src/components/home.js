import React from 'react'
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap'
import Post from './post'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Theme"
import './style.css'

const Home = () => {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyles />
                <div className="">
                    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <div className="row">
                                    <div className="col-md-8 d-flex">
                                        <ul className="navbar-nav my-auto mb-2 mb-lg-0">
                                            <li className="nav-item my-auto d-flex m-3">
                                                <div><i class="fa fa-home m-2" aria-hidden="true"></i></div>
                                                <div><a className="nav-link active" aria-current="page" href="#">HOME</a></div>
                                            </li>
                                            <li className="nav-item my-auto d-flex m-3">
                                                <div><i class="fa fa-bell m-2" aria-hidden="true"></i></div>
                                                <div><a className="nav-link active" aria-current="page" href="#">NOTIFICATION</a></div>
                                            </li>
                                            <li className="nav-item my-auto d-flex m-3">
                                                <div><i class="fa fa-envelope m-2" aria-hidden="true"></i></div>
                                                <div><a className="nav-link active" aria-current="page" href="#">MESSAGE</a></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 d-flex">
                                        <div className="search "><i className="fa fa-search" aria-hidden="true"></i></div>
                                        <div><img className='admin-img' src='avatar.png' alt="avatar" /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </nav>
                    <div className="container">
                        <div className='row'>
                            <div className="col-md-3">
                                <div className="card-main">
                                    <div className="card" style={{ width: '25rem' }}>
                                        <div className="img-top"></div>
                                        <img className="card-img-top avatar" src='avatar.png' alt="Card image cap" />
                                        <div className="card-body ">
                                            <div className='text-center m-0'><h4><b>Boruto Uzumaki</b></h4></div>
                                            <div className='text-center'>@Dorutouzomaki</div>
                                            <div className='d-flex justify-content-around'>
                                                <div>
                                                    <div><h5>Followers</h5></div>
                                                    <div className='text-center'>4843</div>
                                                </div>
                                                <div className="vl"></div>
                                                <div>
                                                    <div><h5>Following</h5></div>
                                                    <div className='text-center'>9000</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <span className='title'> <b> Trending</b></span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1"><div>#MaterialUi</div><div>756K</div><br /></Dropdown.Item>
                                        <Dropdown.Item href="#/action-2"><div>#FixNavbar</div><div>546K</div><br /></Dropdown.Item>
                                        <Dropdown.Item href="#/action-3"><div>#FullWithSearchbar</div><div>501K</div><br /></Dropdown.Item>
                                        <Dropdown.Item href="#/action-2"><div>#SpecialAnimationEffect</div><div>402K</div><br /></Dropdown.Item>
                                        <Dropdown.Item href="#/action-2"><div>#NightModeTheme</div><div>156K</div><br /></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="col-md-6">
                                <Post />
                            </div>
                            <div className="col-md-3">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <span className='title' style={{ marginRight: '94px' }}> <b>Follow now</b></span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            <div className="post-header m-3 d-flex justify-content-between w-100%">
                                                <div className="post-left d-flex">
                                                    <div><img src="avatar.png" alt="" className='admin-img user-img' /></div>
                                                    <div>
                                                        <div><h6 className='justify-content-between'>Name1@Naruto</h6></div>
                                                        <button type="button" className="btn btn-primary">Follow</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            <div className="post-header m-3 d-flex justify-content-between w-100%">
                                                <div className="post-left d-flex">
                                                    <div><img src="avatar.png" alt="" className='admin-img user-img' /></div>
                                                    <div>
                                                        <div><h6 className='justify-content-between'>Name1@Naruto</h6></div>
                                                        <button type="button" className="btn btn-primary">Follow</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            <div className="post-header m-3 d-flex justify-content-between w-100%">
                                                <div className="post-left d-flex">
                                                    <div><img src="avatar.png" alt="" className='admin-img user-img' /></div>
                                                    <div>
                                                        <div><h6 className='justify-content-between'>Name1@Naruto</h6></div>
                                                        <button type="button" className="btn btn-primary">Follow</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>

                                <div class="theme-switch-wrapper">
                                    <div className="form-check form-switch">
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><h2><b>Dark Mode</b></h2></label>
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={themeToggler}/>
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </>
        </ThemeProvider>

    )
}

export default Home