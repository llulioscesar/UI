# Button

Si desea cambiar el color del boton o el color del texto, se debe realizar por los props **`color`** ó **`textColor`**

## Props

| Prop |  Default | Descripcion |
| ---------- | ---------- | ---------- |
| **color**  | rgb(0, 122, 255)| Color de fondo |
| **textColor** | rgb(255, 255, 255) | Color del texto |
| **text** |  | Texto del boton |
| **full** | false | Toma el 100% del contenedor padre |

## Ejemplo
```TSX
import React, {Component} from 'react'
import {Button} from '@jcesar.co/ui'

class App extends Component {
    render() {
        return (
            <div>
                <Button text='my button'/>
            </div>
        )
    }
}

export default App
```
