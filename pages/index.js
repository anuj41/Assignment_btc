import SectionLeft from '../components/SectionLeft';
import SectionMid from '../components/SectionMid';
import SectionRight from '../components/SectionRight';
import React from 'react';

export default function Home() {
  return (
    <>
    
      <div className='head-box bg-primary text-center'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
        <style jsx>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Varela+Round&display=swap');
            .head-box {
              font-weight: bold;
              letter-spacing: 1px;
              align-item: center;
              padding-top: 5px;
              position: absolute;
              color: #fff;
              width: 100%;
              height: 7%;
              font-family: 'Didact Gothic', sans-serif;
            }
          `}
        </style>
      </div>
      <div className='box'>
        <div className='row'>
          <SectionLeft />
          <SectionMid />
          <SectionRight />
        </div>
        <style jsx>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Varela+Round&display=swap');

            .box {
              color: #ffff;
              margin: 0;
              padding: 0;
              background: #000000;
            }
            .row {
              margin: 0;
              padding-top: 70px;
            }
            .bord {
              border-left: 1px solid white;
              border-right: 1px solid white;
            }
          `}
        </style>
      </div>
    </>
  );
}
