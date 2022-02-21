import React, { useEffect, useState } from 'react';
import { FaShareSquare, FaWallet } from 'react-icons/fa';
import { getdata } from '../action/getapi';

const SectionMid = () => {
const [data, setdata] = useState([]);

useEffect(() => {
 initdata();
}, []);

const initdata = ()=>{
  getdata().then((data)=>{
setdata(data.data)
  })
}
  return (

    <div className='col-md-6 lf-bord'>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h2>Section</h2>
          </div>
          <div className='col-md-6 b-a'>
            <button className='btn btn-main'>
              <div className='container p-0'>
                <div className='row'>
                  <div className='col-md-3'>
                    <span className='ic'>
                      <FaWallet />
                    </span>
                  </div>
                  <div className='col-md-6 p-0'>0.2 $XYZ</div>
                  <div className='col-md-3 p-0'>
                    <button className='btn btn-main1 '>Tier</button>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className='container one mb-3'>
          <div className=' pa'>
            <div className=''>

           <div className=''>
             
              <p className='first-p'>
              lorem ipsum adoikrathri bantioloe serratopele benthai tokan{' '}
            </p>
            <button className='btn btn-one'>Tutorial</button>
             </div>
            <div className='image22' >
              <img height='50' src={`https://res.cloudinary.com/akdiagnostics/image/upload/v1645451072/extra/cryto_kpjzyq.jpg`} />
            </div>
            </div>
          </div>
        </div>
        <div className='container two '>
          <div className='container p-0'>
            <div className='row'>
              <div className='col-md-8'>
                <div className='your-reward pt-3'>Your rewards</div>
                <div className='amount pt-3'>$ 0.26241428</div>
                <div className='container p-0 pt-3'>
                  <button className='btn btn-dark bt00'>$ 40 AVAX</button>
                  <button className='btn btn-dark bt00'> $10 BNB</button>
                  <button className='btn btn-dark bt00'>$210 BTC</button>
                </div>
              </div>
              <div className='col-md-4 btn-container'>
                <button className='btn btn-primary'>
                  <span className='pf'>
                    <FaShareSquare />
                  </span>
                  Custom link
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=' second'>
          <div className='row '>
            <div className='flex'>
              <div className=' col-md-6 mar1 cont'>
                <div className='container '>
                  <div className='amount1 pt-3'>12.5% of fee</div>
                  <div className='your-reward1 pt-3'>
                    Your Refferal Link for XYZ
                  </div>
                  <input type='text' placeholder='https://reactjs.org'></input>
                </div>
              </div>
              <div className='col-md-6 mar cont1 '>
                <div className='container '>
                  <div className='amount1 pt-3'>12.5% of fee</div>
                  <div className='your-reward1 pt-3'>
                    Your Refferal Link for XYZ
                  </div>
                  <input type='text' placeholder='https://reactjs.org'></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container pt-5 pb-3 pl-0'>
          <button className='first-tab '>First-tab</button>
          <button className='first-tab '>Second-tab</button>
        </div>
        <div className='container con-align'>
          <table className='table-align'>
            <tr className=' row Table'>
              <th className='col-md-3 row-item'>ASSET</th>
              <th className='col-md-3 row-item'>AMOUNT</th>
              <th className='col-md-3 row-item'>USER ACCOUNT</th>
              <th className='col-md-3 row-item'>REFERRAL EARNING</th>
            </tr>
            {
data&&data.map((d,i)=>{
  return(
<tr key={i} className='row Table1 mb-5'>
              <td className='col-md-3 row-item1 mt-2'>
               
               <div className='row gx-0'>
                 <div className='col-md-3'>

                 <img src={`${d.img}`}></img>
                 </div>
                 <div className='col-md-8'>
                 <th> {d.asset}</th>
                 <div className='row gx-0'>
                   <div className='col-md-3'>

                <p>{d.type}</p>
                   </div>
                   <div className='col-md-8'>
                     <div className='row gx-0'>
                       <div className='col-md-3'>
                     <img src={`${d.chain.img}`}></img>

                       </div>
                       <div className='col-md-8'>
                         {d.chain.name}
                       </div>
                     </div>
                
                   </div>
                 </div>
                 </div>
                 </div>
              
              </td>
              <td className='col-md-3 row-item1'>
                {d.amount}BNB
              <p>{d.state}</p> 
              </td>
              <td className='col-md-3 row-item1'>{d.user}</td>
              <td className='col-md-3 row-item1'>
                
               {d.referral_earnings}
                <p>View on BSC Scan</p>
              </td>
            </tr>
  )
})
            }
          </table>
        </div>
      </div>
      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Varela+Round&display=swap');
       
        ::placeholder{
          color:#fff;
          font-family: 'Didact Gothic', sans-serif;
          letter-spacing:1px;

        }
        .image22{
          position: absolute;
          right: 86vh;
          top: 26vh;
        }
       input{
        margin-top:5px;
        background: #242731;
        mix-blend-mode: normal;
        border-radius: 8px;
        height:50px;
        color:#fff;
        border:none;
        width:249px;
        padding:0px 19px;
       }
        .bt00{
        font-family: 'Didact Gothic', sans-serif;
        background: #353945;
        border-radius: 11px;
        font-weight: 600;
        color: #FFFFFF;
        font-size: 12px;
        letter-spacing:1px;
        margin-left:3px;
       }
       .amount{
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 48px;
        letter-spacing: -1px;
       }
       .amount1{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 48px;
        letter-spacing: 1px;
        font-family: 'Didact Gothic', sans-serif;
       }
        .your-reward{
        font-family: 'Didact Gothic', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px
      }
        .your-reward1{
        color: #808191;
        font-family: 'Didact Gothic', sans-serif;
        font-style: normal;
        font-weight: 700;
        letter-spacing:1px;
        font-size: 16px;
        line-height: 24px
      }
        .btn-container{
        display: flex;
        justify-content: end;
        align-items: center;
        height: 166px;
       }
        .con-align{
        display: flex;
        justify-content: center;
        align-items: center;
       }
        .table-align{
        display: block;
        justify-content: center;
        align-items: center;
        width: 100%;
       }
          .Table1{
           margin-top:10px;
           background: #242731;
           height: 62.29px;
           font-weight: 600;
           font-size: 14px;
           border-radius:6px;
           isplay: flex;
           justify-content: center;
           align-items: baseline;
         }
         p{
          font-family: 'Didact Gothic', sans-serif;
          color:#625e7c;
          font-size: 12px;
          font-weight:600;
          
         }
          .Table{
          height:40px;
          background: #191B20;
          color:#808191;
          border-radius:8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .row-item{
          font-weight:700;
          font-size:10px;
          letter-spacing:1px;
          font-family: 'Didact Gothic', sans-serif;
        }
        .row-item:hover{
         color:white;
        }
          .first-tab{
          font-family: 'Didact Gothic', sans-serif;
          font-weight: 600;
          font-size: 18px;
          line-height: 18px;
          letter-spacing:1px;
          background:#000000;
          color:#808191;
          border: none;
          }
        .first-tab:hover{
          color:#fff;
          border-bottom:2px solid blue;
          }
          .mar{
           margin-left:3px;  
          }
         .mar1{
           margin-right:3px;
           
         }
          .btn-one {
            color:#2B2557;
            background: #fff;
            font-size: 12px;
            border-radius: 8px;
            font-weight: bold;
            padding: 2px 18px;
            height:50%
            font-family: 'Didact Gothic', sans-serif;
          }
          .pf {
            padding: 0px 5px 5px 5px;
            font-size: 20px;
          }
          .pa {
            display: flex;
            justify-content: center;
            align-items: start;
            flex-direction: column;
          }
          .first-p {
            font-family: 'Didact Gothic', sans-serif;
            color: #2B2557;
            font-size: 18px;
            font-weight:700;
            line-height: 26px;
          }
          .one {
            display: flex;
            justify-content: center;
            align-item: center;
            width: 100%;
            height: 86px;
            border: 1px sold white;
            border-radius: 14px;
            background: #abe8ff;
            margin: 10px 0px;
          }
       .two {
            width: 100%;
            height: 165.69px;
            border-radius: 24px;
            background: #191B20;
            margin: 10px 0px;
          }
       .two:hover {
        background:#fff;
           color:#000000;
          }
          .btn-primary {
            display: flex;
            justify-content: center;
            align-item: center;
            height: 23%;
            border-radius: 10px;
            font-family: 'Didact Gothic', sans-serif;
            letter-spacing: 1px;
            font-weight: bold;
            font-size: 14px;
            line-height: 24px;
          }
          .cont {
            width:300px;
            height: 177.95px;
            background: #191B20;
            border-radius: 28px;
            border-right:5px solid #000000;
            border-top:5px solid #000000;

          }
          .cont:hover{
            background:#fff;
            color:#000000;
          }
          .cont1 {
            width:300px;
            height: 177.95px;
            background: #191B20;
            border-radius: 28px;
            border-left:5px solid #000000;
            border-top:5px solid #000000;
          }
          .cont1:hover{
            background:#fff;
            color:#000000;
          }
          .flex {
            display: flex;
          }

          .lf-bord {
            border-right: 1px solid white;
            border-left: 1px solid white;
          }
          .ic {
            color: blue;
          }
          .b-a {    
            display: flex;
            justify-content: end;
            align-item :center;
            padding-bottom: 20px;
          }

          .btn-main {
            background: #191b20;
            font-family: 'Didact Gothic', sans-serif;
            font-size: 16px;
            line-height: 18px;
            letter-spacing: 2px;
            border-radius: 8px;
            color: #fff;
            margin: 3px;
            width:65%;
          }
          .btn-main1{
            background: #A3E3FF;
            border-radius: 5px;
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            color:#3772FF;
            padding:3px 10px;
          }

          h2 {
            font-family: 'Didact Gothic', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 18px;
            letter-spacing: 2px;
          }
        `}
      </style>
    </div>
  );
};

export default SectionMid;
