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
    <div class="edit-basic">
    <form v-on:submit.prevent="updateProfile()">
      <h1>Edit Profile</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      
      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="first_name">
      </div>
      <div class="form-group">
        <label>Last name:</label>
        <input type="text" class="form-control" v-model="last_name">
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="text" class="form-control" v-model="email">
      </div>
      <div class="form-group">
        <label>Phone:</label>
        <input type="text" class="form-control" v-model="phone_number">
      </div>
      <div class="form-group">
        <label>Bio:</label>
        <input type="text" class="form-control" v-model="short_bio">
      </div>
      <div class="form-group">
        <label>LinkedIn URL:</label>
        <input type="text" class="form-control" v-model="linkedin_url">
      </div>
      <div class="form-group">
        <label>Twitter:</label>
        <input type="text" class="form-control" v-model="twitter_handle">
      </div>
      <div class="form-group">
        <label>GitHub:</label>
        <input type="text" class="form-control" v-model="github_url">
      </div>
      <div class="form-group">
        <label>Personal Website:</label>
        <input type="text" class="form-control" v-model="website_url">
      </div>
      <div class="form-group">
        <label>Resume:</label>
        <input type="text" class="form-control" v-model="resume_url">
      </div>
      <input type="submit" class="btn btn-primary" value="Submit">
    </form>
  </div>
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
    updatePost: function() {
      var params = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone_number: this.phone_number,
        short_bio: this.short_bio,
        linkedin_url: this.linkedin_url,
        twitter_handle: this.twitter_handle,
        website_url: this.website_url,
        resume_url: this.resume_url,
        github_url: this.github_url,
        // photo: this.photo,
      };
      axios
        .patch("/api/students/" + this.$route.params.id, params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/students" + this.$route.params.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
