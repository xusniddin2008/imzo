import React, { useState } from 'react';
import Modal from 'react-modal';
import $ from 'jquery';
import '../css/phone.css';
import cancel from '../img/cancel.svg';



let rotateSet = -10;
let r = 1;
let ring1Set = 0;
let r1 = 1;
let ring2Set = 0;
let r2 = 0;
let a = 1.00;
console.log(a);

/*function tick() {
  i++;
  console.log(i);
}

setInterval(tick, 70);*/

function Ring1Tick() {
  if (ring2Set < 50) {
    if (r1 == 1) {
      if (ring1Set == 70) {
        r1 = 0;
      }
      if (ring1Set <= 0) {
        a = 1;
      }
      if (ring1Set >= 50) {

        a = a - 0.1;
      }
      ring1Set = ring1Set + 3;
    }
    if (r1 == 0) {
      if (ring1Set <= 5) {
        r1 = 1;
      }
      //ring1Set = ring1Set - 3;
      ring1Set = 0;
    }

  }


}

setInterval(Ring1Tick, 60);

function Ring2Tick() {
  if (r2 == 0) {
    if (ring2Set == 50) {
      r2 = 1;
    }
    ring2Set = ring2Set + 10;
    ring1Set = ring2Set;
  }
  else if (r2 == 1) {
    if (ring2Set == 0) {
      r2 = 0;
    }
    ring2Set = ring2Set - 10;
  }
}

setInterval(Ring2Tick, 200);


function PhoneTick() {
  if (r == 0) {
    if (rotateSet == 20) {
      r = 1;
    }
    rotateSet = rotateSet + 10;
  }
  else if (r == 1) {
    if (rotateSet == -10) {
      r = 0;
    }
    rotateSet = rotateSet - 10;
  }
}
setInterval(PhoneTick, 200);





function Phone() {
  const [modalIsOpen, setModalIsOpen] = useState(false);


  $('.ring-1').css({ padding: ring1Set + "px" });
  $('.ring-2').css({ padding: ring2Set + "px" });
  $('.phone-img').css({ 'transform': 'rotate(' + rotateSet + 'deg)' });
  $('.ring-1').css({ 'border': 'solid 1px rgba(150, 189, 68,' + a + ')' });

  return (
    <>
      <div className="ring">
        <div className="ring-1">
          <a className="ring-2" href="#" onClick={() => setModalIsOpen(true)}>
            <div className="ring-3">
              <div className="phone-img"></div>
            </div>
          </a>
          <Modal
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: {
                position: 'fixed',
                height: 550,
                top: 100,
                left: 0,
                right: 0,
                bottom: 200,
                backgroundColor: 'rgba(150, 189, 68, 0.0)',
                borderRadius: '20px',
              },
              content: {
                position: 'absolute',
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
                border: 'none',
                background: 'rgba(255, 255, 255, 0.0)',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '20px',
                outline: 'none',
                padding: '20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }
            }}
          >
            <div className="modal-inner">
              <a href="tel:+998977456366" className="number"><h2>+99894 619 98 98</h2></a>
              <a href="tel:+998977456366" className="number"><h2>+99897 745 63 66</h2></a>
              <div>
                <button onClick={() => setModalIsOpen(false)}>
                  <svg xmlns={cancel} width="18px" height="15px" viewBox="0 0 512.001 512.001"><path d="M284.286 256.002L506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0014.143 5.857 19.94 19.94 0 0014.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z" /></svg>
                </button>
              </div>
            </div>

          </Modal>
        </div>
      </div>

      
    </>

  );
}
export default Phone;