Vue.component('modal', {
    data: function() {
        return {
            friends: app.friend_list,
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
                <span v-for="friend in friends"> 
                    <div class="inline-block mx-5 mt-12 mb-12 px-5">
                        <div class="text-center">
                        <img class="friends-image rounded-full shadow-lg bg-black" v-bind:src="friend.pr_pic">
                        <h3 class="block text-black mt-3 text-3xl"> {{ friend.full_name }} </h3>
                        </div>
                    </div>
                </span>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button  py-8 px-12 text-white bg-teal" @click="$emit('close')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>`
  })