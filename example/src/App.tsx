import React, {useState} from 'react';
// @ts-ignore
import {Button, Dashboard, NavigationBar} from '@jcesar.co/ui'

const App: React.FC = () => {

    const [large, setLarge] = useState(false)

    return (
        <Dashboard
            renderNavigationBar={
                <NavigationBar title='Finca Report' large={large}>
                    <button>Atras</button>
                </NavigationBar>
            }
        >
            <h1>dfgdfg</h1>
            <Button text='Click' onClick={() => setLarge(!large)}/>
        </Dashboard>
  );
}

export default App;
