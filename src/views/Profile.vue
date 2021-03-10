<template></template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function(){
    return {
      first_name: {},
      last_name: {},
      email: {},
      phone_number: {},
      short_bio: {},
      linkedin_url: {},
      twitter_handle: {},
      website_url: {},
      resume_url: {},
      github_url: {},
      photo: {},
    };
  };
  created: function() {
    <!-- this.etc -->
  },
  methods: {
    showUser: function(user) {
      console.log("showUser", user.title, user);
      document.querySelector("#user-details").showModal();
    },
    methods: {
      showStudent: function(student) {
        console.log("showstudent", student.title, student);
        document.querySelector("#student-details").showModal();
      },
    }
  }
}
</script>
