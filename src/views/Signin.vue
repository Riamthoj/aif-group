<template>
  <div class="signin">
    <v-row class="justify-center">
      <v-col cols="12" md="6" lg="4">
        <v-card class="mt-16 p-5 mx-5" flat tile>
          <v-card-title primary-title>
            Pease Enter Your UserName And Password
          </v-card-title>
          <v-text-field
            label="UserName"
            class="mt-2"
            v-model="userName"
            :rules="[rule.userName.required]"
            required
            autofocus
            rounded
            outlined
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            :rules="[rule.password.required]"
            required
            rounded
            outlined
          ></v-text-field>
          <v-btn width="100%" large color="success" @click="SignIn">SignIn</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      userName: null,
      password: null,
      rule: {
        userName: {
          required: (value) => !!value || "UserName is required",
        },
        password: {
          min: (v) => v.length >= 8 || "Password must more then 5 character",
          required: (value) => !!value || "Password is required",
        },
      },
    };
  },
  methods: {
    ...mapMutations({
      setToken: "authMod/setToken",
    }),
    ...mapActions("authMod", ["login"]),

    SignIn() {
      try{
        if(!this.userName){
          alert('Please enter userName')
          return
        }
        if (!this.password) {
          alert('Please enter password')
          return
        }
        
        this.login({userName:this.userName,password:this.password})
          .then((res) => {
            if (res.data.token) {
              window.localStorage.removeItem("token");
              this.setToken(res.data.token);
              window.localStorage.setItem("token", res.data.token);
              console.log(window.localStorage.getItem("token"));
              if (res.data.auth.role) {
               window.location.replace("/dashboard")
              } 
            } else {
              alert('The userName or password is wrong')
            }
            if (res.data.message == "INVALID_USER_NAME_OR_PASSWORD") {
              alert('SignIn failed')
            }
          })
          .catch((error) => {
            alert(JSON.stringify(error))
            console.log(error);
          });
      } catch (error) {
       alert('Syntex error')
        console.log(error);
      }
    },
  },
};
</script>
