import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const Footer = () => {
    return (
        <footer className="footer  py-2 mt-3 bg-dark">
            
                    
                    <Col md={12} className='py-3'>
                        <p className="text-white text-center">
                            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                        </p>
                    </Col>
                
        </footer>
    );
};

export default Footer;
