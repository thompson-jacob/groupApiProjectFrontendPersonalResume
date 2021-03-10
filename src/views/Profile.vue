  <template>

  </template>

  <style>
  
  </style>

  <script>
  import axios from "axios",
  
  export default {
    data: function(){
    return {

    }
    },
    created: function() {
      <!-- this.etc -->
    },
    methods: {
      showUser: function(user) {
        console.log("showUser", user.title, user);
        document.querySelector("#user-details").showModal();
      },
    }
  }
  </script>
  
  