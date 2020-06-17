import React from 'react';
import TopBar from './Components/AppBar';
import MediaCardComponent from './Components/CardComponent';

export default function App() {
 return(
   <React.Fragment>
      <TopBar/>
      <div style={{paddingTop:"20px"}}>
      <div>
      <MediaCardComponent/>
      </div>
      <div>
      <MediaCardComponent/>
      </div>
      <div>
      <MediaCardComponent/>
      </div>
      <div>
      <MediaCardComponent/>
      </div>
      </div>
   </React.Fragment>
  
 )
}
