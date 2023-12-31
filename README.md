# Install 
```
npm install tailwind-toastify
```
# Requirements
Have tailwindcss 3.x installed in your react project. [Tailwindcss](https://tailwindcss.com) 

# Demo

[Demo in codesandbox](https://codesandbox.io/s/tailwind-toastify-rhtvh5?file=/src/App.js)

[Demo online](https://tailwind-toastify.vercel.app/)


# Usage

  ```
import React from 'react';
import { showAlert } from 'tailwind-toastify'
function ExampleApp() {
return (
    <>
    <button type="button" onClick={()=>showAlert('success', "Success", 'Showing success tailwind alert')}>Show Alert Success</button><br/>
    <button type="button" onClick={()=>showAlert('error', "Error", 'Showing error tailwind alert')}>Show Alert Error</button><br/>
    <button type="button" onClick={()=>showAlert('info', "Info", 'Showing info tailwind alert')}>Show Alert Info</button><br/>
    </>
)
}
export default ExampleApp

```

Contribute
----

[José Daniel Garcés Ospina](https://github.com/jdanigo)