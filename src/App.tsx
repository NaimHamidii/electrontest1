import React from 'react';
import { ipcRenderer } from 'electron'

const App = () => {

    const sendNotification = () => {
        ipcRenderer.send('notify');
    }
    
    return(
        <div>
            <button onClick={sendNotification}>Send notification</button>
            <p>Should work now</p>
        </div>
    )
}

export default App;