$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered

  $('.modal').modal()

  $(document).on('click', '.whei', function (e) {
    $(this).fadeOut()
    $('.portfolio').show(1500)
  })

  $(document).on('click', '.portfolio', function (e) {
    $(this).hide()
    $('.whei').fadeIn(500)
  })
})
