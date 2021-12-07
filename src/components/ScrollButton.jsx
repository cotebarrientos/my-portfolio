import React, {useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa'
import {Button} from 'react-bootstrap'

const ScrollButton = () => {

    // code from https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      }
      
    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        })
      }
      
    window.addEventListener('scroll', toggleVisible);
    //End comment

    return (
        <div className="d-none d-md-block d-lg-block d-xl-block d-xxl-bock">
            <Button 
            onClick={scrollToTop}
            className="scroll-button shadow-sm rounded-0 border"
            style={{display: visible ? 'inline' : 'none'}}>
                <FaArrowCircleUp  
                    className="mx-auto my-auto" />
            </Button>
        </div>
    )
}

export default ScrollButton
