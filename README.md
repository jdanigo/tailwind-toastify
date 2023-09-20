# Install 
```
npm install tailwind-toastify
```
# Usage

  ```
  import React from 'react';
  import { showAlert } from 'tailwind-toastify';
      
export default function ShowAlertExampleApp(){

    const handleShowAlert = (type, title, message) => {
        showAlert(type, title, message);
    }

    return(
        <>
            <button type="button" onClick={()=>handleShowAlert('success', "Success", 'Showing success tailwind alert')}>Show Alert Success</button><br/>
            <button type="button" onClick={()=>handleShowAlert('error', "Error", 'Showing error tailwind alert')}>Show Alert Error</button><br/>
            <button type="button" onClick={()=>handleShowAlert('info', "Info", 'Showing info tailwind alert')}>Show Alert Info</button><br/>
        </>
    )
}
```

Contribute
----

[José Daniel Garcés Ospina](https://github.com/jdanigo)