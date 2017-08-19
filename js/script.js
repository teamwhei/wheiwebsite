/* global $ */
$(document).ready(function () {
  $('.modal').modal()

  $(document).on('click', '.whei', function (e) {
    $(this).fadeOut()
    $('.portfolio').show(1000)
  })

  $(document).on('click', '.portfolio', function (e) {
    $(this).hide(500)
    $('.whei').fadeIn(500)
  })
})
