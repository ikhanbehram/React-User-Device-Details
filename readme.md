# use-user-device-details

A simple and lightweight React hook that retrieves comprehensive device details, including operating system, browser information, device memory, and more.

## Installation

You can install the package via npm. If you're using your local project, link the package or install it directly from GitHub.

### Via npm

```bash
npm install use-user-device-details
```

Usage
Import the hook into your React component and use it to access device details.

Example

```javascript

import React from 'react';
import useUserDeviceDetails from 'use-user-device-details';

const App = () => {
    const deviceDetails = useUserDeviceDetails();
    const {
        ram,
        cpu,
        os,
        browser,
        userAgent,
        language,
        dimensions,
        touchSupport,
        pixelRatio,
        connection, 
        homeScreen, 
        timezone, 
        batteryStatus, 
        localization, 
        hardwareConcurrency, 
        isMobile, 
        platform, 
        onlineStatus 
    } = deviceDetails;

    return (
        <div className="app">
            <header className="header">
                <h1>User Device Details</h1>
            </header>
            <div className="device-details-card">
                <h2>Device Information</h2>
                <ul>
                    <li><strong>RAM:</strong> {ram} GB</li>
                    <li><strong>CPU:</strong> {cpu} logical processors</li>
                    <li><strong>Operating System:</strong> {os}</li>
                    <li><strong>Browser:</strong> {browser}</li>
                    <li><strong>User Agent:</strong> {userAgent}</li>
                    <li><strong>Language:</strong> {language}</li>
                    <li><strong>Dimensions:</strong> Width: {dimensions.width}px, Height: {dimensions.height}px, Screen Width: {dimensions.screenWidth}px, Screen Height: {dimensions.screenHeight}px</li>
                    <li><strong>Touch Support:</strong> {touchSupport}</li>
                    <li><strong>Pixel Ratio:</strong> {pixelRatio}</li>
                    <li><strong>Connection Type:</strong> {connection}</li>
                    <li><strong>Home Screen:</strong> {homeScreen ? 'Yes' : 'No'}</li>
                    <li><strong>Timezone:</strong> {timezone}</li>
                    <li><strong>Battery Status:</strong> {batteryStatus || 'Unknown'}</li>
                    <li><strong>Localization:</strong> {localization.join(', ') || 'Unknown'}</li>
                    <li><strong>Hardware Concurrency:</strong> {hardwareConcurrency}</li>
                    <li><strong>Mobile Device:</strong> {isMobile ? 'Yes' : 'No'}</li>
                    <li><strong>Platform:</strong> {platform}</li>
                    <li><strong>Online Status:</strong> {onlineStatus ? 'Online' : 'Offline'}</li>
                </ul>
            </div>
        </div>
    );
};

export default App;
```

License
This project is licensed under the MIT License.