import React from 'react';
import {NavigationBar, NavigationBarLink, Dashboard} from '@jcesar.co/ui'

const App: React.FC = () => {
  return (
    <Dashboard
        renderNavigationBar={
          <NavigationBar>
            <NavigationBarLink text='Atras'/>
          </NavigationBar>
        }>

    </Dashboard>
  );
}

export default App;
