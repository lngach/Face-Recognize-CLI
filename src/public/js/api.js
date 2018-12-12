const autoDetect = payload => {
    $.ajax({
        url: '/auto-detect',
        method: 'POST',
        data: payload,
        processData: false,
        contentType: false
    }).done(res => {
        res.log(res)
    }).failed(err => console.log(err))
}

const manualDetect = payload => {
    $.ajax({
        url: '/manual-detect',
        method: 'POST',
        data: payload,
        processData: false,
        contentType: false
    }).done(res => {
        res.log(res)
    }).failed(err => console.log(err))
}