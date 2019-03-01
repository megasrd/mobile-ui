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
        profile_pic: './images/id-image.jpeg',
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis eros quis risus ornare volutpat et quis sapien. Mauris id erat convallis, ullamcorper elit et, tristique lacus',
        stats: {
            alerts: 3,
            places: 4,
            shots: 10,
            friends: 30
        },
        settings: false,
        friend_list: {
          0 : {
            pr_pic: './images/wade.jpeg',
            full_name: 'Wade April',
            active: true,
            last_seen_unix: 1551269100
          },
          1 : {
            pr_pic: './images/robin.jpeg',
            full_name: 'Robin April',
            active: false,
            last_seen_unix: 1551269100
          },
          2 : {
            pr_pic: './images/stefan.jpeg',
            full_name: 'Stefan Du Plessis',
            active: false,
            last_seen_unix: 1551269100
          },
          3 : {
            pr_pic: './images/ruth.jpeg',
            full_name: 'Ruth Duthie',
            active: false,
            last_seen_unix: 1551269100
          },
          
        }
    },
    computed: {
      activeCount: function() {
        
        let count = 0;

        for (i=0; i < Object.keys(this.friend_list).length; i++) {
          if (this.friend_list[i].active == true) {
            count += 1;
          }
        }
        
        return count;

    }
  }
});