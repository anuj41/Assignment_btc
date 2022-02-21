import React from 'react';
import {
  FaLongArrowAltLeft,
  FaSignInAlt,
  FaShareSquare,
  FaWallet,
  FaChevronDown,
} from 'react-icons/fa';

const SectionRight = () => {
  return (
    <div className='col-md-4'>
      <div className='section'>
        <div className='container pb-3'>
          <div className='row'>
            <div className='col-md-6'>
              <button className='btn second'>
                Avalanche
                <span className='ic1'>
                  <FaChevronDown />
                </span>
              </button>
            </div>
            <div className='col-md-6'>
              <button className='btn btn-main'>
                <span className='ic'>
                  <FaWallet />
                </span>
                OFX6....1353
                <span className='ic1'>
                  <FaChevronDown />
                </span>
              </button>
            </div>
          </div>

          <style jsx>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Varela+Round&display=swap');
              .ic1 {
                padding-left: 5px;
              }
              .ic {
                margin-right: 10px;
                color: blue;
              }

              .btn-main {
                width: 100%;
                font-family: 'Didact Gothic', sans-serif;
                font-size: 16px;
                line-height: 18px;
                letter-spacing: 2px;
                border: 1px solid blue;
                border-radius: 10px;
                color: #fff;
                padding: 10px;
              }
              .second {
                padding: 10px;
                width: 100%;
                color: #fff;
                font-family: 'Didact Gothic', sans-serif;
                font-size: 16px;
                line-height: 18px;
                letter-spacing: 2px;
                background: #191b20;
                border-radius: 10px;
              }
            `}
          </style>
        </div>
        <div className='container'>
          <div className='container pt-3'>
            <h2>
              <span className='fon'>
                <FaLongArrowAltLeft />
              </span>
              <span>Custom link</span>
            </h2>
          </div>
          <p className='pt-5 pb-3'>
            https://www.figma.com/file/mTfiVo4npMPFLP5R6P2Mbp
          </p>
          <div>
            <input className='input-fi' placeholder='Enter'></input>
          </div>
          <div className='container pt-5'>
            <div className='row'>
              <div className='col-md-6'>
                <button className='btn btn-primary'>
                  <span className='pf'>
                    <FaShareSquare />
                  </span>
                  Custom link
                </button>
              </div>
              <div className='col-md-6'>
                <button className='btn btn-outline-dark '>
                  <span className='pf'>
                    <FaSignInAlt />
                  </span>
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <style jsx>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Varela+Round&display=swap');
              .pf {
                padding: 0px 5px 0px 5px;
                font-size: 20px;
              }

              .btn-primary {
                border-radius: 10px;
                font-family: 'Didact Gothic', sans-serif;
                letter-spacing: 1px;
                font-weight: bold;
                font-size: 14px;
                line-height: 24px;
                width: 100%;
              }
              .btn-outline-dark {
                border-radius: 10px;
                font-family: 'Didact Gothic', sans-serif;
                letter-spacing: 1px;
                font-weight: bold;
                font-size: 14px;
                line-height: 24px;
                color: #fff;
                width: 100%;
              }

              h2 {
                font-family: 'Didact Gothic', sans-serif;
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 18px;
                letter-spacing: 2px;
              }
              .fon {
                margin-right: 40px;
                font-size: 16px;
              }
              .input-fi {
                font-family: 'Didact Gothic', sans-serif;
                outline: none;
                width: 100%;
                background: #191b20;
                border-radius: 12px;
                color: white;
                height: 50.63px;
                letter-spacing: 2px;
                font-weight: 700;
                border: none;
                padding-left: 19px;
              }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default SectionRight;
