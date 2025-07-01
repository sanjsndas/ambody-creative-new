import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero91.css'

const Hero91 = (props) => {
  return (
    <div className="hero91-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero91-image"
      />
      <div className="hero91-container"></div>
      <div className="hero91-max-width thq-section-max-width">
        <div className="hero91-content">
          <h1 className="hero91-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero91-text4">
                  Welcome to Ambody Creatives
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero91-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero91-text6">
                  We are a digital creative agency focused on building
                  purposeful brands and delivering impactful design solutions.
                </span>
              </Fragment>
            )}
          </p>
          <div className="hero91-actions">
            <button className="thq-button-filled hero91-button">
              <span className="hero91-text3 thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero91-text5">Get in Touch</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero91.defaultProps = {
  heading1: undefined,
  action1: undefined,
  image1Alt: 'Creative Team at Work',
  image1Src:
    'https://images.unsplash.com/photo-1647649640493-c334627806d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NTM4NHw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
}

Hero91.propTypes = {
  heading1: PropTypes.element,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
}

export default Hero91
