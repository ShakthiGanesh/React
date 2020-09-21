
import React from 'react'
import '../css/About.css'
import {LEADERS} from '../leaders'
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Leader from './Leader'

function About() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/"> Home</Link>
                    </BreadcrumbItem>
                    <Breadcrumb.Item active>About</Breadcrumb.Item>
                </Breadcrumb>
                <div className="about">
                    <h4>About Us</h4>
                    <div className='about-restaurant'>
                        <div className='about-history'>
                            <h2>History</h2>
                            <p>The first restaurant was started
                                in 2019 by Pentavalent in SASTRA University,Tanjavur, TamilNadu. They bought appliances
                                for their small hamburger restaurant
                                from salesman Ray Kroc, who was intrigued
                                    by their need for eight malt and shake mixers. 
                                    When Kroc visited the brothers in 2020 to see
                                    how a small shop could sell so many milk shakes,
                                    he discovered a simple, efficient format that permitted 
                                    the brothers to produce huge quantities of food at low prices</p>
                        </div>
                        <div className='about-facts'>
                            <p className='facts-title'>Facts At a Glance</p>
                            <table className='facts-content'>
                            <tr>
                                <th>Started</th>
                                <td>1 Sep, 2019</td>
                            </tr>
                            <tr>
                                <th>Major Stake Holder</th>
                                <td>Bill Gates</td>
                            </tr>
                            <tr>
                                <th>Lat Year's Turnover</th>
                                <td>$1,234,567</td>
                            </tr>
                            <tr>
                                <th>Employees</th>
                                <td>30</td>
                            </tr>
                            </table>
                        </div>
                    </div>

                    <div className='about-quote-whole'>
                        <p className='about-quote'>You better cut the pizza in four pieces because I'm not hungry enough to eat six.</p>
                        <p className='about-quote-author'>--Yogi Berra, The Wit and Wisdom of Yogi Berra, P.Pepe, Diversion Books, 2014</p>
                    </div>

                    <div className='about-leaders'>
                        <h3>Corporate Leadership</h3>
                        {LEADERS.map(leader => 
                            <Leader leader={leader}/>   
                        )}
                    </div>
                </div>

            </div>
            
        )
        
    
}
export default About