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

```bash

import React from 'react';
import useUserDeviceDetails from 'use-user-device-details';

const App = () => {
    const deviceDetails = useUserDeviceDetails();
    const { os, browser, ram, cpu, userAgent, language, isMobile, onlineStatus, timezone, pixelRatio, touchSupport } = deviceDetails;

    return (
        <div className="app">
            <header className="header">
                <h1>User Device Details</h1>
            </header>
            <div className="device-details-card">
                <h2>Device Information</h2>
                <ul>
                    <li><strong>Operating System:</strong> {os}</li>
                    <li><strong>Browser:</strong> {browser}</li>
                    <li><strong>RAM:</strong> {ram} GB</li>
                    <li><strong>CPU:</strong> {cpu} logical processors</li>
                    <li><strong>User Agent:</strong> {userAgent}</li>
                    <li><strong>Language:</strong> {language}</li>
                    <li><strong>Mobile Device:</strong> {isMobile ? 'Yes' : 'No'}</li>
                    <li><strong>Online Status:</strong> {onlineStatus ? 'Online' : 'Offline'}</li>
                    <li><strong>Timezone:</strong> {timezone}</li>
                    <li><strong>Pixel Ratio:</strong> {pixelRatio}</li>
                    <li><strong>Touch Support:</strong> {touchSupport}</li>
                </ul>
            </div>
        </div>
    );
};

export default App;
```

License
This project is licensed under the MIT License.