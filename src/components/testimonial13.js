import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial13.css'

const Testimonial13 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial13-max-width thq-section-max-width">
        <div className="testimonial13-section-title">
          <h2 className="testimonial13-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial13-text8">Client Testimonials</span>
              </Fragment>
            )}
          </h2>
        </div>
        <div className="testimonial13-container thq-flex-row">
          <div className="testimonial13-content1 thq-flex-column">
            <div className="testimonial13-stars1">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="testimonial13-text1 thq-body-large">
              {props.review1 ?? (
                <Fragment>
                  <span className="testimonial13-text6">
                    Ambody Creatives exceeded our expectations in every way.
                    Their attention to detail and creativity helped elevate our
                    brand to new heights.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="testimonial13-avatar1">
              <img
                alt={props.author1Alt}
                src={props.author1Src}
                className="testimonial13-avatar-image1 thq-img-round thq-img-ratio-1-1"
              />
              <div className="testimonial13-avatar-content1">
                <span className="testimonial13-text2 thq-body-small">
                  {props.author1Name ?? (
                    <Fragment>
                      <span className="testimonial13-text5">John Doe</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="testimonial13-content2 thq-flex-column">
            <div className="testimonial13-stars2">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
              </svg>
            </div>
            <p className="testimonial13-text3 thq-body-large">
              {props.review2 ?? (
                <Fragment>
                  <span className="testimonial13-text9">
                    Working with Ambody Creatives was a game-changer for us.
                    Their innovative designs and strategic approach
                    significantly impacted our online presence.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="testimonial13-avatar2">
              <img
                alt={props.author2Alt}
                src={props.author2Src}
                className="testimonial13-avatar-image2 thq-img-round"
              />
              <div className="testimonial13-avatar-content2">
                <span className="testimonial13-text4 thq-body-small">
                  {props.author2Name ?? (
                    <Fragment>
                      <span className="testimonial13-text7">Jane Smith</span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial13.defaultProps = {
  author1Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1441786485319-5e0f0c092803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NTY1M3w&ixlib=rb-4.1.0&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NTY1Mnw&ixlib=rb-4.1.0&q=80&w=1080',
  author2Alt: 'Image of Jane Smith, Marketing Director of XYZ Inc.',
  review1: undefined,
  author2Name: undefined,
  heading1: undefined,
  author1Alt: 'Image of John Doe, CEO of Company ABC',
  review2: undefined,
}

Testimonial13.propTypes = {
  author1Name: PropTypes.element,
  author2Src: PropTypes.string,
  author1Src: PropTypes.string,
  author2Alt: PropTypes.string,
  review1: PropTypes.element,
  author2Name: PropTypes.element,
  heading1: PropTypes.element,
  author1Alt: PropTypes.string,
  review2: PropTypes.element,
}

export default Testimonial13
