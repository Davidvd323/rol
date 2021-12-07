const progressBar = document.getElementsByClassName
('progress-bar')[0]
setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyvalue('--width')) || 0 progressBar.style.setProperty('--width', width + .1)
}, 5);