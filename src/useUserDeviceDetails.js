import { useEffect, useState } from 'react';

const useUserDeviceDetails = () => {
    const [deviceDetails, setDeviceDetails] = useState({
        ram: null,                      // RAM in GB
        cpu: null,                      // Number of logical CPUs
        os: null,                       // Operating System
        browser: null,                  // Browser Name
        userAgent: navigator.userAgent, // User Agent
        language: navigator.language,    // Language
        dimensions: {                   // Dimensions
            width: window.innerWidth,
            height: window.innerHeight,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
        },
        touchSupport: 'unknown',        // Touch support
        pixelRatio: window.devicePixelRatio, // Device pixel ratio
        connection: navigator.connection?.effectiveType || 'unknown', // Connection type
        homeScreen: window.matchMedia('(display-mode: fullscreen)').matches, // Home Screen status
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown', // Timezone
        batteryStatus: null,            // Battery status
        localization: navigator.languages, // List of user languages
        hardwareConcurrency: navigator.hardwareConcurrency || 'unknown', // Logical processor count
        deviceMemory: navigator.deviceMemory || 'unknown', // Device memory
        isMobile: /Mobi|Android/i.test(navigator.userAgent), // Mobile device check
        platform: navigator.platform,    // Platform type, e.g., "Win32", "Linux x86_64"
        onlineStatus: navigator.onLine,  // Online status
    });

    useEffect(() => {
        const getDeviceDetails = async () => {

            const os = (() => {
                const userAgent = navigator.userAgent;
                if (userAgent.indexOf('Win') !== -1) return 'Windows';
                if (userAgent.indexOf('Mac') !== -1) return 'MacOS';
                if (userAgent.indexOf('X11') !== -1 || userAgent.indexOf('Linux') !== -1) return 'Linux';
                if (/iPhone|iPad|iPod/.test(userAgent)) return 'iOS';
                if (/Android/.test(userAgent)) return 'Android';
                return 'Unknown';
            })();

            const browser = (() => {
                const userAgent = navigator.userAgent;
                if (userAgent.indexOf('Chrome') > -1) return 'Chrome';
                if (userAgent.indexOf('Firefox') > -1) return 'Firefox';
                if (userAgent.indexOf('Safari') > -1) return 'Safari';
                if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) return 'Internet Explorer';
                return 'Unknown';
            })();

            const touchSupport = 'ontouchstart' in window ? 'Supported' : 'Not Supported';

            const dimensions = {
                width: window.innerWidth,
                height: window.innerHeight,
                screenWidth: window.screen.width,
                screenHeight: window.screen.height,
            };

            let batteryStatus = 'unknown';
            if (navigator.getBattery) {
                const battery = await navigator.getBattery();
                batteryStatus = `${Math.round(battery.level * 100)}% - ${battery.charging ? 'Charging' : 'Not Charging'}`;
            }

            setDeviceDetails(prevDetails => ({
                ...prevDetails,
                ram: navigator.deviceMemory || 'unknown',
                cpu: navigator.hardwareConcurrency || 'unknown',
                os,
                browser,
                dimensions,
                touchSupport,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
                batteryStatus,
                isMobile: /Mobi|Android/i.test(navigator.userAgent),
                platform: navigator.platform,
                onlineStatus: navigator.onLine,
            }));
        };

        getDeviceDetails();

        window.addEventListener('resize', () => {
            setDeviceDetails(prevDetails => ({
                ...prevDetails,
                dimensions: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height,
                },
            }));
        });

        window.addEventListener('online', () => {
            setDeviceDetails(prevDetails => ({
                ...prevDetails,
                onlineStatus: true,
            }));
        });
        window.addEventListener('offline', () => {
            setDeviceDetails(prevDetails => ({
                ...prevDetails,
                onlineStatus: false,
            }));
        });

        return () => {
            window.removeEventListener('resize', getDeviceDetails);
            window.removeEventListener('online', getDeviceDetails);
            window.removeEventListener('offline', getDeviceDetails);
        };
    }, []);

    return deviceDetails;
};

export default useUserDeviceDetails;