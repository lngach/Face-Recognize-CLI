const captureVideoButton =
    document.querySelector('#auto-detect #capture-button')
const cssFiltersButton =
    document.querySelector('#cssfilters-apply')
const video =
    document.querySelector('#auto-detect video')
const screenshotButton =
    document.querySelector('#screenshot-button')
const img = 
    document.querySelector('#screenshot')

let filterIndex = 0
const filters = [
    'grayscale',
    'sepia',
    'blur',
    'brightness',
    'contrast',
    'hue-rotate',
    'hue-rotate2',
    'hue-rotate3',
    'saturate',
    'invert',
    ''
]

const hdConstraints = {
    video: {width: {min: 320}, height: {min: 320}}
}

captureVideoButton.onclick = () => {
    navigator.mediaDevices.getUserMedia(hdConstraints).
        then(handleSuccess).catch(handleError)
}

cssFiltersButton.onclick = video.onclick = () => {
    video.className = filters[filterIndex++ % filters.length]
}

screenshotButton.onclick = video.onclick = () => {
    let frame = captureVideoFrame(video, 'jpeg')
    img.src = frame.dataUri
}

const handleSuccess = stream => {
    screenshotButton.disabled = false
    video.srcObject = stream
    if (!stream.paused) {
        setInterval(() => {
            let frame = captureVideoFrame(video, 'jpeg')
            img.src = frame.dataUri
            let payload = new FormData()
            payload.append('file', frame.blob, `frame.${frame.format}`)
            autoDetect(payload)
        }, 33)
    }
}

const handleError = error => {
    console.error('Error: ', error)
}