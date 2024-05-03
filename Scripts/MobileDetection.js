window.onload = function() {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
    
    if (!isMobileDevice) {
        document.getElementById('cssLink').href = './CSS/StylePC.css';
    } else {
        document.getElementById('cssLink').href = './CSS/StyleMobile.css';
    }
};

