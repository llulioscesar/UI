import React, {useState} from 'react';
import {NavigationBar, NavigationBarLink, Dashboard, Button, NavigationBarPanel} from '@jcesar.co/ui'
// @ts-ignore
import IosIarrowBack from 'react-ionicons/lib/IosArrowBack'
// @ts-ignore
import IosAdd from 'react-ionicons/lib/IosAdd'

const App: React.FC = () => {

    const [navarLarge, setNavarLarge] = useState(false)

    return (
        <Dashboard
            renderNavigationBar={
                <NavigationBar large={navarLarge}>
                    <NavigationBarPanel>
                        <NavigationBarLink><IosIarrowBack/> Atras</NavigationBarLink>
                    </NavigationBarPanel>
                    <NavigationBarPanel>
                        <IosAdd/>
                    </NavigationBarPanel>
                </NavigationBar>
            }>

            <Button onClick={() => setNavarLarge(!navarLarge)}>Click</Button>

        </Dashboard>
  );
}

export default App;
