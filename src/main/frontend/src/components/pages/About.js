import React,{ useEffect }  from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <div>
            <div className="main-box">
                <div data-aos="zoom-in"className="content-box py-3">
                    <h1 className="about-title ">About</h1>
                    <p className="about-decription">This webshop is created for learning purpuses to implement and test our skills.
                        The goal is to create fully functional tech webshop using tools like Postgre sql for Back end,
                        Spring boot for rest api and React for Front end. <br/><br/> Best regard from the team!
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default About
