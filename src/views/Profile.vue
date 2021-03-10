<template>
  <div class="profile">
    <p>{{ student }}</p>
    <p>{{ student.last_name }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

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
    this.showProfile();
  },
  methods: {
    showProfile: function() {
      axios.get("/").then(response => {
        console.log(response.data);
        this.student = response.data;
      });
    },
  },
};
</script>
