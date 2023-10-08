new Vue({
  el: '#example-1',
  data: {
    show: false,
  }
})

new Vue({
  el: '#example-2',
  data: {
    show: false,
  }
})
new Vue({
  el: '#example-3',
  data: {
    show: false,
  }
})
new Vue({
  el: '#example-4',
  data: {
    show: false,
  }
})

$(document).ready(function(){
  $('.toggle').click(function(){
    $('#nav').toggleClass('open');
    $('.container').toggleClass('menu-open');
  });
});