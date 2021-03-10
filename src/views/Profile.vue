<template>

<div class="profile">
  <p> {{ student }} </p>
  <p> {{ student.last_name }} </p>


  </div>
  </template>

<style></style>

<script>


export default {
  data: function() {
    return {
      student: {
        first_name: "Emmanuel",
        last_name: "Sanchez",
        email: "emanuel@test.com",
        phone_number: "555-555-1234",
        short_bio: "Actualize grad versed in all the things",
        linkedin_url: "linkedin.com/esanchez",
        twitter_handle: "esanchizzle",
        website_url: "hireme.com",
        resume_url: "esanchez.com",
        github_url: "github.com/esanchez",
        photo: "https://avatars.dicebear.com/api/male/emanuel.svg",
      },
    };
  },
  created: function() {
     // 
  },
  methods: {
    showStudent: function(student) {
      console.log("showstudent", student.first_name, student);
      document.querySelector("#student-details").showModal();
    },
  },
};
</script>
