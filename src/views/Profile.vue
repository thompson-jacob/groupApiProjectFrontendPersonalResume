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
      showStudent: function(student) {
        console.log("showstudent", student.title, student);
        document.querySelector("#student-details").showModal();
      },
    }
  }
  </script>
  
  