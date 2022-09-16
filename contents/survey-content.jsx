/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './survey-content-style';

const SurveyContent = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userChoice, setUserChoice] = useState(undefined);

  // let secVariant = {
  //   initial: { y: '-270px', opacity: 0 },
  //   animate: {
  //     y: '0',
  //     opacity: 1,
  //     transition: {
  //       duration: '1',
  //       type: 'easeInOut',
  //       opacity: { duration: '1', delay: 0.4 },
  //     },
  //   },
  // };

  return (
    <div className="_grid-row _gap-30" css={styles}>
      <div className="survey-head _grid-2row-fix-top _gap-20">
        <div className="_f-subtitle">
          consider the scenario below and select the option that you would
          choose
        </div>
        <div className="_f-h6">
          <div>
            You need a Design (for a building) and you have a budget of 100k for
            that design.
          </div>
          <div>you will need an architect to do that. </div>
        </div>
      </div>

      <div className="survey-options _grid-3col-fix-middle">
        <div
          className="option _grid-2row-fix-top"
          onClick={() => setUserChoice(1)}
          data-selected={userChoice === 1}
        >
          {/* <div className="body"> </div> */}
          <div className="head _f-h6">
            <span className="_f-h4"> 1</span> The Typical Process
          </div>

          <div className="body">
            <div className="desc">
              <div className="_grid-row _gap-8">
                <p>
                  You do your research to find the right architect, from online
                  content to asking people for suggestions.
                </p>
                <p>
                  You come up with a list and, to narrow down your choices, you
                  need to get in contact with them individually.
                </p>
                <p>
                  After deciding who you want to work with, you need to pay
                  him/her 10% to start.
                </p>
              </div>
            </div>
            <div className="graphic">
              <div className=""></div>
            </div>
          </div>
        </div>

        <div className=""> </div>

        <div
          className="option _grid-2row-fix-top"
          onClick={() => setUserChoice(2)}
          data-selected={userChoice === 2}
        >
          <div className="head _f-h6">
            <span className="_f-h4"> 2</span> The New Alternative
          </div>
          <div className="body">
            <div className="desc">
              <div className="_grid-row _gap-8">
                <p>
                  There is a community of architects, consisting of many
                  connected professionals.
                </p>
                <p>
                  You submit your project to the community. A number of
                  architects within the community will accept preparing demo
                  works, and others will evaluate and rank their works.
                </p>
                <p>
                  you need to pay the 10% for the process to start, but before
                  that you will be able to know about those who accepted to
                  participate and see their previous works.
                </p>
                <p>
                  At the end you will have the designs, the evaluations and
                  professional feedbacks - in order to choose one of the
                  submitted works and its architect.
                </p>
              </div>
            </div>
            <div className="graphic">
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>

      <div className="survey-actions">
        {userChoice && (
          <div>
            <div className="_f-h6">
              what is the main reason(s) for your choice ?
            </div>
            {userChoice === 1 && (
              <div>
                <ul>
                  <li>more direct contact to each architect ?</li>
                  <li>Trust and confidence in that person</li>
                  <li> ----</li>
                  <li> other, please Specify</li>
                </ul>
                <div className="">
                  <div className="_f-subtitle2">
                    would something specific prevent you from choosing the
                    second option?
                  </div>
                  <div> witer here</div>
                </div>
              </div>
            )}
            {userChoice === 2 && (
              <div>
                <ul>
                  <li>Time and efficiency</li>
                  <li>Get the best result</li>
                  <li> getting Multiple options</li>
                  <li> Trust and confidence coming from opinion of many</li>
                </ul>
                <div className="">
                  <div className="_f-subtitle2">
                    would something still make you doubt about this options?
                  </div>
                  <div> witer here</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SurveyContent;
