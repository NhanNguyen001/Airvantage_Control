import React from 'react';
// import firstResponder from '../../images';
// import lpwa from '../../images/lpwa.png';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>

      <div className="dark-background">
        <div class="grid-container">

          <div class="grid-item-1">
            <img class='picture' src={require('../../images/lpwa.jpg')} />
            <span class='caption'>
              <div class='title'>Low Power Wide Area (LPWA)</div>

              <div>Enabling battery and solar-powered IoT applications with extended coverage and capacity.</div>
            </span>
          </div>

          <div class="grid-item-2">
            <img class='picture' src={require('../../images/firstResponder.png')}></img>
            <span class='caption'>
              <div class='title'>First Responder Network</div>

              Enabling first responders with tools and networking so they can act faster and more effectively.</span>
          </div>

          <div class="grid-item-3">
            <img class='picture' src={require('../../images/5g.png')} alt=""></img>
            <span class='caption'>
              <div class='title'>Ready for 5G?</div>

              Trust Sierra Wireless to lead you into the next wave of cellular technology with 5G.</span>
          </div>

          <div class="grid-item-4">
            <img class='picture' src={require('../../images/smart-sim.png')}></img>
            <span class='caption'>
              <div class='title'>Sierra Wireless Smart SIM</div>

              Deliver a superior connectivity service for your IoT application.</span>
          </div>

          <div class="grid-item-5">
            <img class='picture' src={require('../../images/open-source.png')}></img>
            <span class='caption'>
              <div class='title'>Open Source</div>

              Don't start from scratch - transform with Sierra.</span>
          </div>

          <div class="grid-item-6">
            <img class='picture' src={require('../../images/security2.jpg')}></img>
            <span class='caption'>
              <div class='title'>Octave™</div>

              Securely extract, orchestrate and act on data from your assets at the edge to the cloud.</span>
          </div>

        </div>
      </div>

      {/* <div>
        <p class="notice">DO NOT MISS THIS!!</p>
      </div> */}

      <img src="" />

    </div>
  );
}

export default Dashboard;