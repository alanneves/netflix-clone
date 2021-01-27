import React, { useEffect, useState } from 'react';
import './Nav.css';
function Nav(){

    const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () =>{
            window.removeEventListener("scroll");
        }
    },[])
    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
                alt="Netflix Logo"
            />
            <img
                className="nav__avatar"
                src="https://occ-0-2986-1123.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABZGtcgpuRS-mm0ZzgiZsL021Wo02r3bSeDatzkndjp3wVvFRwiXNIqhNCeJryh8NlYTB2-RlI5kt1g4n3pfvUsM.png?r=893"
                alt="avatar"
            />
        </div>
    )
}

export default Nav;