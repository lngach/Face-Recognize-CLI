function readURL(input, previewID) {
    if (input.files && input.files[0]) {
        var reader = new FileReader()
        reader.onload = function(e) {
            $(`#${previewID}`).attr('src', e.target.result)
        }
        reader.readAsDataURL(input.files[0])
    }
}

$(".custom-file-input").change(function() {
    let id = $(this).attr('id') + '-preview'
    readURL(this, id)
})

$('#manual-detect').on('click', (e) => {
    e.preventDefault()
    let state = true
    var forms = document.getElementsByClassName('needs-validation')
    Array.prototype.filter.call(forms, form => {
        if (form.checkValidity() === false) {
            state = false
        }
        form.classList.add('was-validated')
    })

    if (state) {
        let leftFace = $('#left-face')[0].files[0]
        let midFace = $('#mid-face')[0].files[0]
        let rightFace = $('#right-face')[0].files[0]
        let username = $('#username').val()
        let payload = new FormData()
        payload.append('file', leftFace)
        payload.append('file', midFace)
        payload.append('file', rightFace)
        payload.append('name', username)
        manualDetect(payload)
    }

})