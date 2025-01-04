# use-user-device-details

A simple and lightweight React hook that retrieves comprehensive device details, including operating system, browser information, device memory, and more.

## Installation

You can install the package via npm. If you're using your local project, link the package or install it directly from GitHub.

### Via npm

```bash
npm install use-user-device-details

Usage
Import the hook into your React component and use it to access device details.

Example

```
import React from 'react';
import useUserDeviceDetails from 'use-user-device-details';

const App = () => {
    const deviceDetails = useUserDeviceDetails();

    return (
        <div className="app">
            <h1>User Device Details</h1>
            <ul>
                <li><strong>OS:</strong> {deviceDetails.os}</li>
                <li><strong>Browser:</strong> {deviceDetails.browser}</li>
                <li><strong>RAM:</strong> {deviceDetails.ram} GB</li>
                <li><strong>CPU:</strong> {deviceDetails.cpu} logical processors</li>
                <li><strong>User Agent:</strong> {deviceDetails.userAgent}</li>
                <li><strong>Language:</strong> {deviceDetails.language}</li>
                <li><strong>Is Mobile:</strong> {deviceDetails.isMobile ? 'Yes' : 'No'}</li>
                <li><strong>Online Status:</strong> {deviceDetails.onlineStatus ? 'Online' : 'Offline'}</li>
                <li><strong>Timezone:</strong> {deviceDetails.timezone}</li>
                <li><strong>Pixel Ratio:</strong> {deviceDetails.pixelRatio}</li>
                <li><strong>Touch Support:</strong> {deviceDetails.touchSupport}</li>
            </ul>
        </div>
    );
};

export default App;
```

License
This project is licensed under the MIT License.