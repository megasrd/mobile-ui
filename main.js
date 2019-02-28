//LightGallery

$(document).ready(function() {
    $('.shots-gallery').lightGallery({
      pager: true
    });
  });

//Vue

const app = new Vue({
    el: '#app',
    data: {
        name: 'John Doe',
        location: 'New York',
        stats: {
            alerts: 3,
            places: 4,
            shots: 10,
            friends: 30
        }
    }
});