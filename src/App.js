import React from 'react';
import TopBar from './Components/AppBar';
import MediaCardComponent from './Components/CardComponent';

export default function App() {
 return(
   <React.Fragment>
      <TopBar/>
      <div style={{paddingTop:"20px"}}>
      <div style={{paddingBottom:'20px'}}>
      <MediaCardComponent/>
      </div >
      <div style={{paddingBottom:'20px'}}>
      <MediaCardComponent/>
      </div>
      <div style={{paddingBottom:'20px'}}>
      <MediaCardComponent/>
      </div>
      <div style={{paddingBottom:'20px'}}>
      <MediaCardComponent/>
      </div>
      </div>
   </React.Fragment>
  
 )
}
