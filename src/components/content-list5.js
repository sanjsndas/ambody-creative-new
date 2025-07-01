import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list5.css'

const ContentList5 = (props) => {
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  return (
    <div className="content-list5-container1 thq-section-padding">
      <div className="content-list5-max-width thq-flex-column thq-section-max-width">
        <div className="content-list5-container2 thq-section-max-width thq-flex-row">
          {isTermsVisible === false && (
            <button
              onClick={() => {
                setIsTermsVisible(true)
                setIsPrivacyVisible(false)
                setIsRefundVisible(false)
              }}
              className="thq-button-outline"
            >
              <span>
                {props.button ?? (
                  <Fragment>
                    <span className="content-list5-text27">
                      Terms of service
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isPrivacyVisible === true && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsPrivacyVisible(true)
                setIsTermsVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button1 ?? (
                  <Fragment>
                    <span className="content-list5-text32">View Portfolio</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
          {isRefundVisible === true && (
            <button
              onClick={() => {
                setIsRefundVisible(true)
                setIsPrivacyVisible(false)
                setIsTermsVisible(false)
              }}
              className="thq-button-filled"
            >
              <span>
                {props.button2 ?? (
                  <Fragment>
                    <span className="content-list5-text35">Read Our Blog</span>
                  </Fragment>
                )}
              </span>
            </button>
          )}
        </div>
        <div className="content-list5-container3 thq-flex-column">
          {isTermsVisible === true && (
            <div className="content-list5-container4">
              <ul className="thq-flex-column">
                <li className="content-list5-li10 thq-flex-column list-item">
                  <h2 className="content-list5-heading7 thq-heading-2">
                    {props.heading7 ?? (
                      <Fragment>
                        <span className="content-list5-text22">
                          Terms of service
                        </span>
                      </Fragment>
                    )}
                  </h2>
                  <p className="thq-body-small">
                    {props.content7 ?? (
                      <Fragment>
                        <span className="content-list5-text34">
                          Lorem ipsum dolor sit amet. Vel dolores illum est
                          aperiam quis nam voluptatem quia et omnis autem qui
                          dolore ullam sed fugiat cumque! Qui accusamus
                          assumenda et molestias eius et error sunt. Id
                          recusandae nostrum ea officiis voluptatem in nisi
                          consequatur sed quia tenetur sit alias molestias qui
                          illum soluta. Est nesciunt perferendis eum sint rerum
                          33 cupiditate dolorem id corrupti laboriosam ut
                          debitis veniam ut ipsam fugit vel sunt consequatur. Et
                          nobis quasi et cumque adipisci aut molestiae eligendi
                          quo inventore dicta ea suscipit sequi sed veritatis
                          nemo.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </div>
          )}
          {isPrivacyVisible === true && (
            <div className="content-list5-container5">
              <ul className="thq-flex-column">
                <li className="content-list5-li11 thq-flex-column list-item">
                  <h1 className="content-list5-heading1 thq-heading-2">
                    {props.heading1 ?? (
                      <Fragment>
                        <span className="content-list5-text18">
                          Welcome to Ambody Creatives
                        </span>
                      </Fragment>
                    )}
                  </h1>
                  <span className="thq-body-small">
                    {props.content1 ?? (
                      <Fragment>
                        <span className="content-list5-text31">
                          We are a full-service digital creative agency
                          passionate about crafting exceptional design solutions
                          for our clients.
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <ul className="content-list5-ul3 thq-flex-column">
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading2 ?? (
                          <Fragment>
                            <span className="content-list5-text23">
                              Our Services
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <p className="thq-body-small">
                        {props.content2 ?? (
                          <Fragment>
                            <span className="content-list5-text26">
                              We specialize in website design, app development,
                              branding, social media, UI/UX, product design, and
                              advertising.
                            </span>
                          </Fragment>
                        )}
                      </p>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading3 ?? (
                          <Fragment>
                            <span className="content-list5-text37">
                              Our Approach
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content3 ?? (
                          <Fragment>
                            <span className="content-list5-text15">
                              At Ambody Creatives, we focus on building
                              purposeful brands and delivering impactful design
                              solutions that resonate with your audience.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading4 ?? (
                          <Fragment>
                            <span className="content-list5-text20">
                              Our Portfolio
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content4 ?? (
                          <Fragment>
                            <span className="content-list5-text13">
                              Explore our portfolio to see examples of our work
                              and the success stories of brands we have helped
                              elevate.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading5 ?? (
                          <Fragment>
                            <span className="content-list5-text16">
                              Our Blog
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content5 ?? (
                          <Fragment>
                            <span className="content-list5-text14">
                              Stay updated with the latest trends and insights
                              in the digital creative industry through our blog
                              content.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading6 ?? (
                          <Fragment>
                            <span className="content-list5-text17">
                              Our Process
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content6 ?? (
                          <Fragment>
                            <span className="content-list5-text36">
                              Learn about our streamlined process that ensures a
                              seamless experience from ideation to execution for
                              every project.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isRefundVisible === true && (
            <div className="content-list5-container6">
              <ul className="thq-flex-column">
                <li className="content-list5-li17 thq-flex-column list-item">
                  <h1 className="content-list5-heading10 thq-heading-2">
                    {props.heading10 ?? (
                      <Fragment>
                        <span className="content-list5-text24">
                          Refund Policy
                        </span>
                      </Fragment>
                    )}
                  </h1>
                  <span className="thq-body-small">
                    {props.content10 ?? (
                      <Fragment>
                        <span className="content-list5-text29">
                          Lorem ipsum dolor sit amet. Vel dolores illum est
                          aperiam quis nam voluptatem quia et omnis autem qui
                          dolore ullam sed fugiat cumque! Qui accusamus
                          assumenda et molestias eius et error sunt. Id
                          recusandae nostrum ea officiis voluptatem in nisi
                          consequatur sed quia tenetur sit alias molestias qui
                          illum soluta. Est nesciunt perferendis eum sint rerum
                          33 cupiditate dolorem id corrupti laboriosam ut
                          debitis veniam ut ipsam fugit vel sunt consequatur. Et
                          nobis quasi et cumque adipisci aut molestiae eligendi
                          quo inventore dicta ea suscipit sequi sed veritatis
                          nemo.
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <ul className="content-list5-ul5 thq-flex-column">
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading11 ?? (
                          <Fragment>
                            <span className="content-list5-text28">
                              General
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content11 ?? (
                          <Fragment>
                            <span className="content-list5-text21">
                              Lorem ipsum dolor sit amet. Nam nihil facilis sit
                              consequuntur internos qui minima rerum ut
                              molestias laudantium aut iusto deserunt. Aut
                              voluptatibus excepturi qui officia laudantium est
                              repellendus tempore hic sunt debitis. Ut galisum
                              tempore in enim fugit eum pariatur possimus est
                              tenetur nemo et sint sint et dolores Quis. Aut
                              illum perspiciatis rem architecto culpa et fuga
                              aliquid. Est omnis praesentium ut nisi internos
                              rem quod totam et similique quis. Est tempore
                              cumque aut recusandae labore qui error molestiae
                              et possimus quia! Eum Quis asperiores non nihil
                              tempora qui quia voluptatem aut aspernatur
                              aspernatur aut asperiores labore et sapiente
                              quaerat qui suscipit quia. Ea nesciunt iste aut
                              temporibus culpa sit dignissimos quaerat eum
                              architecto voluptatum et nemo velit At harum
                              harum.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading12 ?? (
                          <Fragment>
                            <span className="content-list5-text19">
                              Damages and issues
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content12 ?? (
                          <Fragment>
                            <span className="content-list5-text25">
                              Lorem ipsum dolor sit amet. Est vitae blanditiis
                              ab aliquam tempore aut ipsam iusto in sunt
                              repellat ex voluptatum inventore ab facilis
                              galisum ea consequatur consequuntur. Ab voluptas
                              voluptatem eum consequatur aspernatur non
                              laboriosam atque est labore asperiores a neque
                              quos. Ea nemo modi hic dicta saepe et veritatis
                              maiores At praesentium aliquid. Sed dolores
                              architecto non doloribus quia eos consectetur
                              commodi non tenetur vitae est neque omnis. Non
                              perspiciatis velit At aliquam rerum ut officiis
                              ipsa id minima eius ut sapiente nobis et nemo
                              neque. Aut maiores tempora in officiis sunt eum
                              voluptatem tenetur sit iste reprehenderit ea nisi
                              dolor. Ea impedit omnis ad internos autem ut esse
                              sunt ad saepe maiores vel perferendis veritatis.
                              Ex magni fugiat ut reprehenderit laudantium sit
                              galisum ipsam eos tempora doloribus sed
                              accusantium nobis eum praesentium quod.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">
                        {props.heading13 ?? (
                          <Fragment>
                            <span className="content-list5-text33">
                              Refunds
                            </span>
                          </Fragment>
                        )}
                      </h1>
                      <span className="thq-body-small">
                        {props.content13 ?? (
                          <Fragment>
                            <span className="content-list5-text30">
                              Lorem ipsum dolor sit amet. Est vitae blanditiis
                              ab aliquam tempore aut ipsam iusto in sunt
                              repellat ex voluptatum inventore ab facilis
                              galisum ea consequatur consequuntur. Ab voluptas
                              voluptatem eum consequatur aspernatur non
                              laboriosam atque est labore asperiores a neque
                              quos. Ea nemo modi hic dicta saepe et veritatis
                              maiores At praesentium aliquid. Sed dolores
                              architecto non doloribus quia eos consectetur
                              commodi non tenetur vitae est neque omnis. Non
                              perspiciatis velit At aliquam rerum ut officiis
                              ipsa id minima eius ut sapiente nobis et nemo
                              neque. Aut maiores tempora in officiis sunt eum
                              voluptatem tenetur sit iste reprehenderit ea nisi
                              dolor. Ea impedit omnis ad internos autem ut esse
                              sunt ad saepe maiores vel perferendis veritatis.
                              Ex magni fugiat ut reprehenderit laudantium sit
                              galisum ipsam eos tempora doloribus sed
                              accusantium nobis eum praesentium quod.
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

ContentList5.defaultProps = {
  content4: undefined,
  content5: undefined,
  content3: undefined,
  heading5: undefined,
  heading6: undefined,
  heading1: undefined,
  heading12: undefined,
  heading4: undefined,
  content11: undefined,
  heading7: undefined,
  heading2: undefined,
  heading10: undefined,
  content12: undefined,
  content2: undefined,
  button: undefined,
  heading11: undefined,
  content10: undefined,
  content13: undefined,
  content1: undefined,
  button1: undefined,
  heading13: undefined,
  content7: undefined,
  button2: undefined,
  content6: undefined,
  heading3: undefined,
}

ContentList5.propTypes = {
  content4: PropTypes.element,
  content5: PropTypes.element,
  content3: PropTypes.element,
  heading5: PropTypes.element,
  heading6: PropTypes.element,
  heading1: PropTypes.element,
  heading12: PropTypes.element,
  heading4: PropTypes.element,
  content11: PropTypes.element,
  heading7: PropTypes.element,
  heading2: PropTypes.element,
  heading10: PropTypes.element,
  content12: PropTypes.element,
  content2: PropTypes.element,
  button: PropTypes.element,
  heading11: PropTypes.element,
  content10: PropTypes.element,
  content13: PropTypes.element,
  content1: PropTypes.element,
  button1: PropTypes.element,
  heading13: PropTypes.element,
  content7: PropTypes.element,
  button2: PropTypes.element,
  content6: PropTypes.element,
  heading3: PropTypes.element,
}

export default ContentList5
