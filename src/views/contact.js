import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar3 from '../components/navbar3'
import ContactForm7 from '../components/contact-form7'
import Logos2 from '../components/logos2'
import Testimonial13 from '../components/testimonial13'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Creative Agency Page</title>
        <meta property="og:title" content="Contact - Creative Agency Page" />
      </Helmet>
      <Navbar3
        link1={
          <Fragment>
            <span className="contact-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="contact-text11">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="contact-text12">Portfolio</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="contact-text13">Blog</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="contact-text14">Contact</span>
          </Fragment>
        }
        logoSrc="https://images.unsplash.com/photo-1538492291710-e34afd2ae349?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NTg1OXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
      ></Navbar3>
      <ContactForm7
        email={
          <Fragment>
            <span className="contact-text15">Email</span>
          </Fragment>
        }
        phone={
          <Fragment>
            <span className="contact-text16">Phone</span>
          </Fragment>
        }
        action={
          <Fragment>
            <span className="contact-text17">Submit</span>
          </Fragment>
        }
        address={
          <Fragment>
            <span className="contact-text18">
              9360 Oak Terrace, Dallas, MI 90581
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="contact-text19">Get in touch with us</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="contact-text20">
              We&apos;d love to hear from you. Fill out the form below to get in
              contact with our team.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text21">Contact Us</span>
          </Fragment>
        }
      ></ContactForm7>
      <Logos2></Logos2>
      <Testimonial13
        review1={
          <Fragment>
            <span className="contact-text22">
              Ambody Creatives exceeded our expectations in every way. Their
              attention to detail and creativity helped elevate our brand to new
              heights.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="contact-text23">
              Working with Ambody Creatives was a game-changer for us. Their
              innovative designs and strategic approach significantly impacted
              our online presence.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text24">Client Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="contact-text25">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="contact-text26">Jane Smith</span>
          </Fragment>
        }
      ></Testimonial13>
      <div className="section-container">
        <div className="max-content-container">
          <div className="contact-top-part">
            <div className="contact-links-container">
              <div className="contact-product-container">
                <Link to="/terms" className="contact-navlink1">
                  Terms
                </Link>
              </div>
              <div className="contact-navigate-container">
                <Link to="/privacy" className="contact-navlink2">
                  Privacy Policy
                </Link>
              </div>
              <div className="contact-contact-container">
                <span className="contact-text27">Contact Us</span>
                <span className="contact-text28">
                  <span>2157 Village View</span>
                  <br></br>
                  <span>
                    Drive, Old Fort
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Myers Florida
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>33901</span>
                </span>
              </div>
            </div>
            <div className="contact-subscribe-container">
              <span className="contact-text36">
                Subscribe to our newsletter
              </span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className="contact-textinput input"
              />
              <button className="button-primary button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="contact-separator"></div>
        <footer className="contact-max-width2 max-content-container">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1607706126952-a5282b3b78a8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ3N3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            className="contact-image"
          />
          <span className="contact-text37">
            <span>
              All rights received @
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>Ambody Creatives</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Contact
