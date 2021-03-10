<template>
  <div class="profile">
    <p>{{ student }}</p>
    <p>{{ student.last_name }}</p>
  </div>
</template>

<style></style>

<script>
<<<<<<< HEAD
import axios from 'axios';


=======

import axios from 'axios';




>>>>>>> acea711318f07548aa1ea5435b1823da4752d5d6
export default {
  data: function() {
    return {
      student: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        short_bio: "",
        linkedin_url: "",
        twitter_handle: "",
        website_url: "",
        resume_url: "",
        github_url: "",
        photo: "",
      },
    };
  },
  created: function() {
<<<<<<< HEAD
     this.showProfile();
=======

     this.showProfile();

>>>>>>> acea711318f07548aa1ea5435b1823da4752d5d6
  },
  methods: {
    showProfile: function() {
      axios.get("/api/students/1").then(response => {
        console.log(response.data);
        this.student = response.data;
      });
    },
  },
};
</script>
