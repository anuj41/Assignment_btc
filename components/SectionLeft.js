import React from 'react';
import {
  FaLongArrowAltLeft,
  FaChartPie,
  FaCoins,
  FaSignal,
  FaRegChartBar,
  FaChartLine,
  FaShareAlt,
  FaThLarge,
  FaGlobe,
  FaClipboardList,
  FaChartArea,
} from 'react-icons/fa';

const SectionLeft = () => {
  return (
    <div className='col-md-2'>
      <div>
        <div>
          <div className='row'>
            <div className='col-md-3'>
            <span className='bt-icon'>
              <FaChartLine />
            </span>
           
            </div>
            <div className='col-md-8'>
            <span>
            
          
            <h1>
              Name
              <span className='fon'>
                <FaLongArrowAltLeft />
              </span>
            </h1>
          </span>
            </div>
        
           
          </div>
          <button className='btn left-btn'>
            <span className='bt-icon'>
              <FaThLarge />
            </span>
            home
          </button>
          <br />
          <button className='btn left-btn'>
            <span className='bt-icon'>
              <FaRegChartBar />
            </span>
            Section 1
          </button>
          <br />
          <button className='btn left-btn'>  <span className='bt-icon'>
              <FaChartLine />
            </span>Section 2</button>
          <br />
          <button className='btn left-btn'>
            <span className='bt-icon'>
              <FaChartLine />
            </span>
            Section 3
          </button>
          <br />
          <button className='btn left-btn'>
            <span className='bt-icon'>
              <FaChartPie />
            </span>
            Section 4
          </button>
          <br />
          <button className='btn  left-btn'>
            <span className='bt-icon'>
              <FaCoins />
            </span>
            Section 5
          </button>
          <br />
          <button className='btn left-btn'>
            <span className='bt-icon'>
              <FaChartArea />
            </span>
            Section 6
          </button>
          <br />
          <button className='btn left-btn'>
            <span className='bt-icon'>
              <FaSignal />
            </span>
            Section 7
          </button>
          <br></br>
          <button className='btn left-btn'>
            <span className='bt-icon'>
              <FaShareAlt />
            </span>
            Section 8
          </button>
          <br />
          <button className='btn left-btn'>
            <span className='bt-icon'>
              <FaClipboardList />
            </span>
            Documentation
          </button>
        </div>
        <div className='container bt-al'>
          <div className='row'>
            <div className='col-md-6'>
              <button className='btn btn-dr'>$0.9000</button>
            </div>
            <div className='col-md-6'>
              <button className='btn btn-gr'>Buy$XYZ</button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Varela+Round&display=swap');

          .bt-al {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
          }
          .bt-icon {
            font-size: 20px;
          }
          .btn-gr {
            background: #a3e3ff;
            color: #3772ff;
            font-size: 14px;
            font-weight: 600;
            border-radius: 10px;
          }
          .btn-dr {
            background: #353945;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            border-radius: 10px;
          }
          h1 {
            color: #ffff;
            font-weight: 600;
            font-size: 23.56px;
            line-height: 31.42px;
            font-family: Poppins;
            letter-spacing: 2px;
            font-style: normal;
            left: 35.28%;
            right: -2.57%;
            top: 0%;
            bottom: -1.01%;
            padding-bottom: 30px;
            font-family: 'Didact Gothic', sans-serif;
          }
          .left-btn {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            border-radius: 12px;
            list-style: none;
            color: #808191;
            font-family: 'Didact Gothic', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 2px;
          }
          .btn:hover {
            background: #353945;
            color: white;
          }
          .fon {
            margin-left: 40px;
            font-size: 16px;
          }
        `}
      </style>
    </div>
  );
};

export default SectionLeft;
