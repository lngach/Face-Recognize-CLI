const autoDetect = payload => {
    $.ajax({
        url: '/auto-detect',
        type: 'POST',
        data: payload,
        processData: false,
        contentType: false
    }).done(res => {
        console.log(res)
    }).fail(err => console.log(err))
}

const manualDetect = payload => {
    $.ajax({
        url: '/manual-detect',
        type: 'POST',
        data: payload,
        processData: false,
        contentType: false
    }).done(res => {
        alert(res)
    }).fail(err => console.log(err))
}