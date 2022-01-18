import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import logo from './images/logo.png'

export default function Footer() {
  return (
    <section className='footer'>
      <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
        <MDBContainer className='p-4'>
          <MDBRow>
            <MDBCol lg='4' md='12' className='mb-4 mb-md-0'>
              <p className='footer-p'> 
              <a href='/home'><img src={logo} alt="Logo" className="logo-footer"/></a>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat
              pariatur maxime quis culpa corporis sint!
              </p>
            </MDBCol>
            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase footer-h5'>Navigation</h5>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='/home' className='nav-link link-wrap'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='/about' className='nav-link link-wrap'>
                    About
                  </a>
                </li>
                <li>
                  <a href='/careers' className='nav-link link-wrap'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='/contact' className='nav-link link-wrap'>
                    Contact
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase mb-0 footer-h5'>Contact Details</h5>
              <ul className='list-unstyled'>
                <li>
                  <div className='row footer-row text-center'>
                  <div className='col-12 '>
                      Imaginary Avenue, Fakeville</div></div>
                </li>
                <li>
                  <div className='row footer-row text-center'>
                  <div className='col-12 '>
                      metro@notarealbusiness.com</div>
                      </div>
                </li>
                <li>
                  <div className='row footer-row text-center'>
                  <div className='col-12 '>
                      +123 345 6789
                    </div>
                  </div>
                </li>
                <li>
                  <div className='row footer-row text-center'>
                      <div className='col-12 '>
                          <a href="/"><i class="fab fa-twitter-square"></i></a>
                          <a href="/"><i class="fab fa-linkedin"></i></a>
                          <a href="/"><i class="fab fa-github-square"></i></a>
                      </div>
                  </div>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        {/* Copyright Information */}
        <div className='text-center text-light p-3'>
          &copy; {new Date().getFullYear()}{' '}
          <a href='https://github.com/christinec-dev'>
            Christine Coomans
          </a>
        </div>
      </MDBFooter>
    </section>
  );
}