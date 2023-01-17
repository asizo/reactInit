import React from 'react';
import { Video as IntroVideo } from '../../../resource/video/main'
import './home.scoped.scss'

export const Intro = () => {

  return (
    // class 반영
    <div className={'h100vh bg-block'} >
      {/*style 반영 */}
      {/*<div style={{color:"#ff0000"}}>{title}</div>*/}
      {/*<div>돌아가기</div>*/}
      <div style={{minWidth:"100%"}}>
        <div style={{textAlign:"center", overflowX: "hidden"}}>
          <video className="h100vh" autoPlay loop muted playsInline>
            <source src={IntroVideo.main1} type="video/mp4"/>
          </video>
        </div>
      </div>
    </div>
  );
};
