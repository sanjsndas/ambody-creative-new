import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta3.css'

const CTA3 = (props) => {
  return (
    <div className="cta3-container1 thq-section-padding">
      <div className="cta3-max-width thq-section-max-width">
        <div className="cta3-container2 thq-flex-row">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="cta3-placeholder-image thq-img-ratio-16-9"
          />
          <div className="cta3-column">
            <span className="thq-heading-2">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta3-text3">
                    Medium length heading goes here
                  </span>
                </Fragment>
              )}
            </span>
            <p className="thq-body-small">
              {props.content2 ?? (
                <Fragment>
                  <span className="cta3-text4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta3-actions"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA3.defaultProps = {
  image1Alt: 'Image1Alt',
  image1Src:
    'https://images.unsplash.com/photo-1496150997837-ba438ce4b6c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1MTM0NTM4NHw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  content2: undefined,
}

CTA3.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  content2: PropTypes.element,
}

export default CTA3
