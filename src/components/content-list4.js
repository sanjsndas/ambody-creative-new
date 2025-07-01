import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './content-list4.css'

const ContentList4 = (props) => {
  return (
    <div className="content-list4-container thq-section-padding">
      <div className="content-list4-max-width thq-flex-column thq-section-max-width">
        <div className="content-list4-content1 thq-flex-column">
          <ul className="content-list4-ul1 thq-flex-column">
            <li className="content-list4-li1 thq-flex-column list-item">
              <ul className="content-list4-ul2 thq-flex-column">
                <li className="list-item"></li>
                <li className="list-item"></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="content-list4-content2 thq-flex-column">
          <ul className="content-list4-ul3 thq-flex-column"></ul>
        </div>
        <div className="content-list4-content3 thq-flex-column">
          <ul className="content-list4-ul4 thq-flex-column">
            <li className="content-list4-li4 thq-flex-column list-item">
              <h2 className="content-list4-heading10 thq-heading-2">
                {props.heading10 ?? (
                  <Fragment>
                    <span className="content-list4-text2">Refund Policy</span>
                  </Fragment>
                )}
              </h2>
              <p className="content-list4-content10 thq-body-small">
                {props.content10 ?? (
                  <Fragment>
                    <span className="content-list4-text4">
                      Lorem ipsum dolor sit amet. Vel dolores illum est aperiam
                      quis nam voluptatem quia et omnis autem qui dolore ullam
                      sed fugiat cumque! Qui accusamus assumenda et molestias
                      eius et error sunt. Id recusandae nostrum ea officiis
                      voluptatem in nisi consequatur sed quia tenetur sit alias
                      molestias qui illum soluta. Est nesciunt perferendis eum
                      sint rerum 33 cupiditate dolorem id corrupti laboriosam ut
                      debitis veniam ut ipsam fugit vel sunt consequatur. Et
                      nobis quasi et cumque adipisci aut molestiae eligendi quo
                      inventore dicta ea suscipit sequi sed veritatis nemo.
                    </span>
                  </Fragment>
                )}
              </p>
              <ul className="content-list4-ul5 thq-flex-column">
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading11 ?? (
                      <Fragment>
                        <span className="content-list4-text8">General</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content11 ?? (
                      <Fragment>
                        <span className="content-list4-text1">
                          Lorem ipsum dolor sit amet. Nam nihil facilis sit
                          consequuntur internos qui minima rerum ut molestias
                          laudantium aut iusto deserunt. Aut voluptatibus
                          excepturi qui officia laudantium est repellendus
                          tempore hic sunt debitis. Ut galisum tempore in enim
                          fugit eum pariatur possimus est tenetur nemo et sint
                          sint et dolores Quis. Aut illum perspiciatis rem
                          architecto culpa et fuga aliquid. Est omnis
                          praesentium ut nisi internos rem quod totam et
                          similique quis. Est tempore cumque aut recusandae
                          labore qui error molestiae et possimus quia! Eum Quis
                          asperiores non nihil tempora qui quia voluptatem aut
                          aspernatur aspernatur aut asperiores labore et
                          sapiente quaerat qui suscipit quia. Ea nesciunt iste
                          aut temporibus culpa sit dignissimos quaerat eum
                          architecto voluptatum et nemo velit At harum harum.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading12 ?? (
                      <Fragment>
                        <span className="content-list4-text6">
                          Damages and issues
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content12 ?? (
                      <Fragment>
                        <span className="content-list4-text3">
                          Lorem ipsum dolor sit amet. Est vitae blanditiis ab
                          aliquam tempore aut ipsam iusto in sunt repellat ex
                          voluptatum inventore ab facilis galisum ea consequatur
                          consequuntur. Ab voluptas voluptatem eum consequatur
                          aspernatur non laboriosam atque est labore asperiores
                          a neque quos. Ea nemo modi hic dicta saepe et
                          veritatis maiores At praesentium aliquid. Sed dolores
                          architecto non doloribus quia eos consectetur commodi
                          non tenetur vitae est neque omnis. Non perspiciatis
                          velit At aliquam rerum ut officiis ipsa id minima eius
                          ut sapiente nobis et nemo neque. Aut maiores tempora
                          in officiis sunt eum voluptatem tenetur sit iste
                          reprehenderit ea nisi dolor. Ea impedit omnis ad
                          internos autem ut esse sunt ad saepe maiores vel
                          perferendis veritatis. Ex magni fugiat ut
                          reprehenderit laudantium sit galisum ipsam eos tempora
                          doloribus sed accusantium nobis eum praesentium quod.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
                <li className="list-item">
                  <h3 className="thq-heading-3">
                    {props.heading13 ?? (
                      <Fragment>
                        <span className="content-list4-text5">Refunds</span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="thq-body-small">
                    {props.content13 ?? (
                      <Fragment>
                        <span className="content-list4-text7">
                          Lorem ipsum dolor sit amet. Est vitae blanditiis ab
                          aliquam tempore aut ipsam iusto in sunt repellat ex
                          voluptatum inventore ab facilis galisum ea consequatur
                          consequuntur. Ab voluptas voluptatem eum consequatur
                          aspernatur non laboriosam atque est labore asperiores
                          a neque quos. Ea nemo modi hic dicta saepe et
                          veritatis maiores At praesentium aliquid. Sed dolores
                          architecto non doloribus quia eos consectetur commodi
                          non tenetur vitae est neque omnis. Non perspiciatis
                          velit At aliquam rerum ut officiis ipsa id minima eius
                          ut sapiente nobis et nemo neque. Aut maiores tempora
                          in officiis sunt eum voluptatem tenetur sit iste
                          reprehenderit ea nisi dolor. Ea impedit omnis ad
                          internos autem ut esse sunt ad saepe maiores vel
                          perferendis veritatis. Ex magni fugiat ut
                          reprehenderit laudantium sit galisum ipsam eos tempora
                          doloribus sed accusantium nobis eum praesentium quod.
                        </span>
                      </Fragment>
                    )}
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

ContentList4.defaultProps = {
  content11: undefined,
  heading10: undefined,
  content12: undefined,
  content10: undefined,
  heading13: undefined,
  heading12: undefined,
  content13: undefined,
  heading11: undefined,
}

ContentList4.propTypes = {
  content11: PropTypes.element,
  heading10: PropTypes.element,
  content12: PropTypes.element,
  content10: PropTypes.element,
  heading13: PropTypes.element,
  heading12: PropTypes.element,
  content13: PropTypes.element,
  heading11: PropTypes.element,
}

export default ContentList4
