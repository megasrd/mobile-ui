Vue.component('modal', {
    data: function() {

        return {
            friends: app.friend_list,
            addFriend: app.addFriend,
            add_temp: app.add_friend,
            add_friends: false
        }
    },
    template: `  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container p-8">

          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                <span class="block" v-if="!add_friends">
                    <span v-for="friend in friends"> 
                        <div class="inline-block mx-5 mt-12 mb-12 px-5">
                            <div class="text-center">
                            <img class="friends-image rounded-full shadow-lg bg-black" v-bind:src="friend.pr_pic">
                            <h3 class="block text-black mt-3 text-3xl"> {{ friend.full_name }} </h3>
                            </div>
                        </div>
                    </span>         
                </span>
                <span v-else>
                    <h4 class="mb-8" slot="header">Add Friend</h4>
                    Name: <input v-model="add_temp.full_name" class="custom_input py-5 px-5" type="text">
                    <button v-on:click="addFriend(add_temp.full_name); return add_friends = false" class="mt-10 py-8 px-12 text-white bg-teal"> Add + </button>                
                </span>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">

              <button class="modal-default-button py-8 px-12 text-white bg-teal" @click="$emit('close')">
                Close
              </button>
              <button v-if="!add_friends" v-on:click="add_friends = true" class="py-8 px-12 text-white bg-teal"> Add Friends </button>   
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>`
  })