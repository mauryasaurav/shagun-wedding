import React from 'react'

function Countdown () {
  return (
    <div
      id='countdown'
      className='section-padding bg-img bg-fixed'
      data-background='images/banner-1.jpg'
    >
      <div className='container'>
        <div className='row'>
          <div className='section-head col-md-12'>
            <h4>We will become a family in</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul>
              <li>
                <span id='days'></span>Days
              </li>
              <li>
                <span id='hours'></span>Hours
              </li>
              <li>
                <span id='minutes'></span>Minutes
              </li>
              <li>
                <span id='seconds'></span>Seconds
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
