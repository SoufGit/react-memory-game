import React from 'react';
import { Menu,Segment, Divider} from 'semantic-ui-react';


const HeaderComponent = () => ( 
  <Menu attached inverted className="bg-blue-gradient" widths={2}>
  <Segment className="righteous font-185rem">
    The best memory game!!!!
  </Segment>
  </Menu>
  );

export default HeaderComponent;
