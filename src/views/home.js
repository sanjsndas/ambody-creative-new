import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ServicesCard from '../components/services-card'
import PortofolioCard from '../components/portofolio-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Creative Agency Page</title>
        <meta property="og:title" content="Creative Agency Page" />
      </Helmet>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-heading-container1">
              <h1 className="home-text10">Ambody Creatives</h1>
              <span className="home-text11">
                Welcome to our full-service digital creative agency based in
                Massachusetts. We specialize in website design, app development,
                branding, social media, UI/UX, product design, and advertising.
                Explore our portfolio, blog, and process as we focus on
                purposeful brand building and impactful design execution.
              </span>
              <button className="home-primary1 button-primary button-lg button">
                Get in touch with us
              </button>
            </div>
            <div className="home-gallery">
              <div className="home-container2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1540805294384-58f82ea831c0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDUzMnw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1000"
                  className="home-image1"
                />
              </div>
              <div className="home-container3">
                <div className="home-container4">
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1650484542345-2cd49a141efb?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ4NHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                    className="home-image2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-services section-container">
          <div className="home-max-width2 max-content-container">
            <div className="home-heading-container2">
              <div className="home-text-container1">
                <span className="home-text12">our services</span>
                <h2 className="Heading2">
                  <span>
                    We provide a wide range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>creative solutions</span>
                </h2>
              </div>
              <div className="home-controls">
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                  </svg>
                </button>
                <button className="control-btn">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="home-cards-container">
              <ServicesCard imageSrc="https://images.unsplash.com/photo-1539552891477-e08e54fbfee4?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ3OHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"></ServicesCard>
              <ServicesCard
                text="Copy-writting"
                imageSrc="https://images.unsplash.com/photo-1646801593129-084f15cb1e3e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ3OHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              ></ServicesCard>
              <ServicesCard
                text="Product Design"
                imageSrc="https://images.unsplash.com/photo-1595245714262-88541dcb2b67?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ3OXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              ></ServicesCard>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="home-max-width3 max-content-container">
            <div className="home-text-container2">
              <span className="home-text17">our work</span>
              <h2 className="home-text18 Heading2">
                <span>Explore our portfolio</span>
              </h2>
              <span className="home-text20">
                Welcome to our full-service digital creative agency based in
                Massachusetts. We specialize in website design, app development,
                branding, social media, UI/UX, product design, and advertising.
                Explore our portfolio, blog, and process to see how we build
                purposeful brands and execute impactful designs.
              </span>
              <button className="button-secondary button-lg button">
                See all projects
              </button>
            </div>
            <div className="home-tab-selector-header">
              <span className="home-text21 tab-selector-btn">Advertising</span>
              <span className="home-text22 tab-selector-btn">Social Media</span>
              <span className="home-text23 tab-selector-btn">Branding</span>
              <span className="home-text24 tab-selector-btn">UI / UX</span>
              <span className="home-text25 tab-selector-btn">Packaging</span>
              <span className="tab-selector-btn">Product Design</span>
            </div>
            <div className="home-tab-selector-cards-container">
              <PortofolioCard
                imageSrc="https://images.unsplash.com/photo-1619170927458-1fbfd4c8c2b5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ3OXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                rootClassName="portofolio-cardroot-class-name"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://images.unsplash.com/photo-1656231896473-77c67f574d65?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ3OXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                projectTitle="A brand-new advertising idea"
                rootClassName="portofolio-cardroot-class-name5"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://images.unsplash.com/photo-1656905825038-0e8377f10da9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ4MHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                projectTitle="Coca-Cola Summer Concept Campaign - 2021"
                rootClassName="portofolio-cardroot-class-name4"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://images.unsplash.com/photo-1741680581152-8ac5fb23ef47?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ4MHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                projectTitle="Ad Campaign - I love you as much as I love Nutella"
                rootClassName="portofolio-cardroot-class-name3"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://images.unsplash.com/photo-1691551415121-cb557676a952?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ4MHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                projectTitle="Neighborhood Campaign - conceptual"
                rootClassName="portofolio-cardroot-class-name2"
              ></PortofolioCard>
              <PortofolioCard
                imageSrc="https://images.unsplash.com/photo-1586074299757-dc655f18518c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ4MXw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
                projectTitle="Our secret ingredient is a smile when you receive your latte"
                rootClassName="portofolio-cardroot-class-name1"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div className="home-about section-container">
          <div className="home-max-width4 max-content-container">
            <div className="home-text-container3">
              <span className="home-text27">about us</span>
              <h2 className="home-text28 Heading2">
                <span>
                  We build brands with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>purpose and impact</span>
              </h2>
              <span className="home-text32">
                We are a full-service digital creative agency with brick and
                mortar offices and plenty of in-house talent.
              </span>
              <div className="home-checklist">
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon14">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text33">
                    Quality services and support all time
                  </span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon16">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text34">
                    Long-term strategy development
                  </span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text35">
                    FREE Brand Audit for startups
                  </span>
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon20">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text36">
                    Over 10 years in the business
                  </span>
                </div>
                <div className="home-check-item5">
                  <svg viewBox="0 0 1024 1024" className="home-icon22">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text37">Future-Proofing Projects</span>
                </div>
                <div className="home-check-item6">
                  <svg viewBox="0 0 1024 1024" className="home-icon24">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text38">
                    Support in any implementation
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1613231320165-ac77671dc6db?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDY1MHw&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1000"
                className="home-image3"
              />
            </div>
          </div>
        </div>
        <div className="home-process section-container">
          <div className="home-max-width5 max-content-container">
            <span className="home-text39">Our process</span>
            <h2 className="home-text40 Heading2">
              <span>
                We use a simple three step process.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Take a look.</span>
            </h2>
            <div className="home-step1">
              <span className="home-text44">01</span>
              <div className="home-container5">
                <span className="home-text45">Finding the best idea</span>
                <span className="home-text46">
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-text47">02</span>
              <div className="home-container6">
                <span className="home-text48">
                  Intense Brain storming
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text49">
                  Brainstorming is a process of toiling and generating new ideas
                  alone or by holding intensive group discussions between team
                  members in a team.
                </span>
              </div>
            </div>
            <div className="home-step3">
              <span className="home-text50">03</span>
              <div className="home-container7">
                <span className="home-text51">Strong design execution</span>
                <span className="home-text52">
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width6 max-content-container">
            <span className="home-text53">what are you waiting?</span>
            <h2 className="home-text54 Heading2">
              <span>Let’s collaborate!</span>
            </h2>
            <span className="home-text56">
              Welcome to Ambody Creatives, your go-to digital creative agency in
              Florida. Specializing in website design, app development,
              branding, social media, UI/UX, product design, and advertising, we
              are dedicated to building purposeful brands and delivering
              impactful design solutions. Explore our portfolio showcase, read
              our blog content, and learn more about our process.
            </span>
            <button className="home-primary3 button-lg button-secondary-white button">
              Contact us
            </button>
          </div>
        </div>
      </main>
      <div className="section-container">
        <div className="max-content-container">
          <div className="home-top-part">
            <div className="home-links-container">
              <div className="home-product-container">
                <span className="home-text57">Product</span>
                <Link to="/terms" className="home-navlink1">
                  Terms
                </Link>
              </div>
              <div className="home-navigate-container">
                <span className="home-text58">Navigate</span>
                <Link to="/privacy" className="home-navlink2">
                  Privacy Policy
                </Link>
              </div>
              <div className="home-contact-container">
                <span className="home-text59">Contact Us</span>
                <span className="home-text60">
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
            <div className="home-subscribe-container">
              <span className="home-text68">Subscribe to our newsletter</span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className="home-textinput input"
              />
              <button className="button-primary button">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
        <footer className="home-max-width8 max-content-container">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1607706126952-a5282b3b78a8?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NDQ3N3w&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            className="home-image4"
          />
          <span className="home-text69">
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

export default Home
