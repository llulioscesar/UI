# Button

- Si desea cambiar el color del boton o el color del texto, se debe realizar por los props **`color`** ó **`textColor`**.
- **`invested`**  solo sirve para los temas.

## Props

| Prop |  Default | Descripcion |
| ---------- | ---------- | ---------- |
| **color**  | *** | Color de fondo |
| **full** | false | Toma el 100% del contenedor padre |
| **invested** | false | Invirte los colores segun el tema definido |
| **text** | *** | Texto del boton |
| **textColor** | *** | Color del texto |
| **typeStyle** | default | `default` `standar` `danger` `success` `error`
| **width** | 120px | Ancho del botón |


## Ejemplo
```TSX
import React, {Component} from 'react'
import {Button} from '@jcesar.co/ui'

class App extends Component {
    render() {
        return (
            <div>
                <Button text='my button'/>
                <Button full text='my button'/>
                <Button typeStyle='success' text='my button'/>
                <Button typeStyle='danger' text='my button'/>
                <Button typeStyle='error' text='my button'/>
                <Button typeStyle='success' invested text='my button'/>
            </div>
        )
    }
}

export default App
```
