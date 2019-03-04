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
            places: 0,
            shots: 10,
            friends: 0
        },
        friends_showModal: false,
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
            active: true,
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
          }
        },

        fav_places : {
          0 : {
            name: 'Cape Town',
            country: 'South Africa',
            image: './images/places/cape-town.jpeg',
            freq: false
          },
          1 : {
            name: 'New York',
            country: 'U.S.A',
            image: './images/places/new-york.jpeg',
            freq: true
          },
          2 : {
            name: 'Tokyo',
            country: 'Japan',
            image: './images/places/tokyo.jpeg',
            freq: false
          }
        },
        photos: {
          0 : {
            image: './images/shots/shot-1.jpeg'
          },
          1 : {
            image: './images/shots/shot-2.jpeg'
          },
          2 : {
            image: './images/shots/shot-3.jpeg'
          }
        }

    },

    methods: {

      addFriend : function(friend_name, friend_ppic) {

        let length = Object.keys(this.friend_list).length;

        Vue.set(this.friend_list, length, {

          pr_pic: friend_ppic,

          full_name: friend_name,

          active: false,

          last_seen_unix: null

        });

      },

      addPlace : function(p_name, p_country, p_image) {

        let length = Object.keys(this.fav_places).length;

        Vue.set(this.fav_places, length, {

          name: p_name,

          country: p_country,

          image: p_image,

          freq: false

        });

      },



    },
    computed: {

      friendsCount: {

        get: function() {

          let friends_count = Object.keys(this.friend_list).length;

          this.friends = friends_count;

          return friends_count;

        }

      },

      placesCount: {

        get: function() {

          let places_count = Object.keys(this.fav_places).length;

          this.places = places_count;

          return places_count;

        }

      },


      activeCount: {

        get: function() {

          let count = 0;

          for (i=0; i < Object.keys(this.friend_list).length; i++) {
            if (this.friend_list[i].active == true) {
              count += 1;
            }
          }
          
          return count;

        }

      }
  }
});

