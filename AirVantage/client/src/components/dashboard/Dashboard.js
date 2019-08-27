import React from 'react';
// import firstResponder from '../../images';
// import lpwa from '../../images/lpwa.png';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='blackBack'>
      <div className='dashboard'>
        <div className="dark-background">
          <div class="grid-container">

            {/* GRID */}
            <div class="grid-item-1">
              <img class='picture' src={require('../../images/lpwa.jpg')} />
              <span class='caption'>
                <div class='title'>Low Power Wide Area (LPWA)</div>

                <div>Enabling battery and solar-powered IoT applications with extended coverage and capacity.</div>
              </span>
            </div>

            <div class="grid-item-2">
              {/* <img class='picture' src={require('../../images/firstResponder.png')}></img> */}
              <img className="picture" src="https://www.psdgraphics.com/file/silver-metal-shield.jpg" />
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
              {/* <img class='picture' src={require('../../images/smart-sim.png')}></img> */}
              <img className="picture" src="https://www.sierrawireless.com/-/media/C361C8160C38427C961392B8445C12E4.ashx"></img>
              <span class='caption'>
                <div class='title'>Sierra Wireless Smart SIM</div>

                Deliver a superior connectivity service for your IoT application.</span>
            </div>

            <div class="grid-item-5">
              {/* <img class='picture' src={require('../../images/open-source.png')}></img> */}
              <img className='openSource' src="http://fossbytes.com/wp-content/uploads/2016/07/open-source-software.jpg"></img>
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

          {/* NOTE */}
          <div id="note">
            <img className="arrows" src="https://cdn3.iconfinder.com/data/icons/musthave/256/Stock%20Index%20Down.png" />
            <div id="donotmiss">DO NOT MISS OUT!!!</div>
            <img className="arrows" src="https://cdn3.iconfinder.com/data/icons/musthave/256/Stock%20Index%20Down.png" />
          </div>
        </div>
      </div>

      {/* WHO ARE WE */}
      <div id="we"> 
      <div className="usWho">WHO ARE WE?</div>
      <img className="tmaPhoto" src={require('../../images/TMApic.png')} />
        <div>
          <img className="tmaSoccer" src={require('../../images/tma_soccer.png')} />
        </div>
        <div>
          <img className="workPlace" src={require("../../images/tmaPhoto.JPG")} />
        </div>
      </div>

      {/* WORKPLACE */}
      <div>
        <div id="workplace">
          <div className="where">WHERE WE WORK FOR THE LIVING
            <div>
              <img id="tmaBuilding" src={require("../../images/tmaGoogleMap.png")} />
            </div>
          </div>

          {/* LOCATION */}
        <div className="hotline">
          <div>FAR FROM US?</div>
          HOTLINE: (084) 6 - 1111 111.
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;