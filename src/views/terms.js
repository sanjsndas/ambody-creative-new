import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Hero9 from '../components/hero9'
import ContentList4 from '../components/content-list4'
import Contact3 from '../components/contact3'
import './terms.css'

const Terms = (props) => {
  return (
    <div className="terms-container">
      <Helmet>
        <title>Terms - Creative Agency Page</title>
        <meta property="og:title" content="Terms - Creative Agency Page" />
      </Helmet>
      <Hero9
        action1={
          <Fragment>
            <span className="terms-text10">Learn More About Us</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="terms-text11">Explore Our Portfolio</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="terms-text12">
              Building purposeful brands and delivering impactful design
              solutions
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="terms-text13">Welcome to Ambody Creatives</span>
          </Fragment>
        }
      ></Hero9>
      <ContentList4
        content10={
          <Fragment>
            <span className="terms-text14">
              Our legal terms and conditions detail the guidelines for using the
              Ambody Creatives website. By visiting this site, you are
              acknowledging your acceptance of these terms and conditions. If
              you do not agree with all the terms and conditions outlined on
              this page, please refrain from using the Ambody Creatives website.
            </span>
          </Fragment>
        }
        content11={
          <Fragment>
            <span className="terms-text15">
              Our legal terms and conditions outline the rules and regulations
              for the use of Ambody Creatives&apos; Website. By accessing this
              website, we assume you accept these terms and conditions. Do not
              continue to use Ambody Creatives&apos; website if you do not agree
              to take all of the terms and conditions stated on this page.
            </span>
          </Fragment>
        }
        content12={
          <Fragment>
            <span className="terms-text16">
              Our Legal page is dedicated to providing important information
              regarding the terms and conditions of using our website and
              services. By accessing our website, you agree to comply with all
              applicable laws and regulations. Any unauthorized use of the
              materials on this website may violate copyright, trademark, and
              other laws. We reserve the right to modify these terms at any time
              without prior notice. It is your responsibility to review this
              page periodically for updates and changes. If you continue to
              browse and use this website, you are agreeing to comply with and
              be bound by the following terms and conditions of use.
            </span>
          </Fragment>
        }
        content13={
          <Fragment>
            <span className="terms-text17">
              By accessing this website, you agree to comply with our terms of
              service. Ambody Creatives is not liable for any inaccuracies or
              errors on the website. The content on this website is for general
              information purposes only and is subject to change without notice.
              We are not responsible for any third-party websites that may be
              linked to or from this website. It is your responsibility to
              review the terms of service periodically for any updates or
              changes.
            </span>
          </Fragment>
        }
        heading10={
          <Fragment>
            <span className="terms-text18">Terms And Condition</span>
          </Fragment>
        }
        heading11={
          <Fragment>
            <span className="terms-text19">General</span>
          </Fragment>
        }
        heading12={
          <Fragment>
            <span className="terms-text20">Damages and issues</span>
          </Fragment>
        }
        heading13={
          <Fragment>
            <span className="terms-text21">Refunds</span>
          </Fragment>
        }
      ></ContentList4>
      <Contact3
        email1={
          <Fragment>
            <span className="terms-text22">info@ambodycreatives.com</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="terms-text23">+1 (343) 456-7990</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="terms-text24">
              9360 Oak Terrace, Dallas, MI 90581
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="terms-text25">
              We&apos;d love to hear from you. Reach out to us for any inquiries
              or project discussions.
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="terms-text26">
              You can also visit us at our Massachusetts office by appointment.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="terms-text27">
              For general inquiries, please fill out the contact form below.
            </span>
          </Fragment>
        }
        content4={
          <Fragment>
            <span className="terms-text28">
              Follow us on social media for updates and insights.
            </span>
          </Fragment>
        }
        content5={
          <Fragment>
            <span className="terms-text29">
              We aim to respond to all inquiries within 24 hours.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="terms-text30">Get in Touch</span>
          </Fragment>
        }
      ></Contact3>
      <div className="section-container">
        <div className="max-content-container">
          <div className="terms-top-part">
            <div className="terms-links-container">
              <div className="terms-product-container">
                <span className="terms-text31">Product</span>
                <Link to="/terms" className="terms-navlink1">
                  Terms
                </Link>
              </div>
              <div className="terms-navigate-container">
                <span className="terms-text32">Navigate</span>
                <Link to="/privacy" className="terms-navlink2">
                  Privacy Policy
                </Link>
              </div>
              <div className="terms-contact-container">
                <span className="terms-text33">Contact Us</span>
                <span className="terms-text34">
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
            <div className="terms-subscribe-container">
              <span className="terms-text42">Subscribe to our newsletter</span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className="terms-textinput input"
              />
              <button className="button-primary button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="terms-separator"></div>
        <footer className="terms-max-width2 max-content-container">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1607706126952-a5282b3b78a8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ3N3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            className="terms-image"
          />
          <span className="terms-text43">
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

export default Terms
