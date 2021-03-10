<template>
  <div class="profile">
    <div class="container">
    <p> Your Profile </p>
    <p>{{ student[0].first_name }} {{ student[0].last_name }}</p>
    <p>{{ student[0].email }} </p>
    <p>{{ student[0].phone_number }} </p>
    <p> {{ student[0].short_bio }} </p>
    <p> {{ student[0].linkedin_url }} </p>
    <p> {{ student[0].twitter_handle }} </p>
    <p> {{ student[0].website_url }} </p>
    <p> {{ student[0].github_url }} </p>
    <p> {{ student[0].resume_url }} </p>
    <button>edit basic info</button>
   </div>
    <!-- <p> {{ student[0]["experiences"] }} </p> -->
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

        experiences: {
          start_date: "",
          end_date: "",
          job_title: "",
          company_name: "",
          details: "",
        },
        projects: {
          name: "",
          description: "",
          url: "",
          screenshot:"",
        },
        skills: {
          skill_name:""
        },
        educations: {
          start_date: "",
          end_date: "",
          degree: "",
          university_name: "",
          details: "",
        },

      },
      
    };
  },
  created: function() {
    this.showProfile();
  },
  methods: {
    showProfile: function() {
      axios.get("/api/students").then(response => {
        console.log(response.data);
        this.student = response.data;
      });
    
    },
  },
};
</script>
