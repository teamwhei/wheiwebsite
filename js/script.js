$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered

  $('.modal').modal()

  $(document).on('click', '.whei', function (e) {
    $(this).hide()
    $('.portfolio').show(2000)
  })

  $(document).on('click', '.portfolio', function (e) {
    $(this).hide()
    $('.whei').show(2000)
  })
})
