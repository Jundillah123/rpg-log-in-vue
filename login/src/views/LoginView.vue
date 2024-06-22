<template>
    <div class="login-box">
      <h1>Log<span>In</span></h1>
      <form @submit.prevent ="onSubmit">
        <div>
        <label for="username">username</label>
        <input type="text"v-model="email"><br>
    </div>
    <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="password" required><br>
    </div>
        <input type="submit" id="kirim"><br>
        <p>Don`t have account?</p>
        <RouterLink to="/register">Register here</RouterLink>
      </form>
    
    </div>
    </template>
    <style>
    span{
      color: blue;
    }
    .login-box{
    width: 300px;
    padding: 20px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    input[type="text"], input[type="password"] {
      padding: 10px;
      margin-bottom: 10px;
      border: 5px solid #bfe797;
      border-radius: 5px;
      font-size: 14px;
    }
    input[type="submit"]{
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 3px;
      color: rgb(46, 43, 43);
      font-size: 16px;
      cursor: pointer;
      
    }
    input[type="submit"]:hover {
       background-color:  #45a049;
      }
    </style>
    <script>
import Cookies from 'js-cookie';

    export default {
        data() {
            return {
                email: '',
                password: '',
               
            }
        },
        methods: {
            onSubmit() {
                this.$axios.post("/auth/login", {
                    email: this.email,
                    password: this.password
                }).then(response => {
                    console.log(response);
                    this.getDataUser(response.data)
                })
            },
            getDataUser(data){
                this.$axios.get("/auth/profile",{
                 headers: {
                    Authorization: 'bearer ' + data.access_token
                 }
                }).then(res => {
                    let userdata = Object.assign(res.data, data)
                    let forcookies = JSON.stringify(userdata)
                    Cookies.set("userdata", forcookies, {expires: 1});
                    this.$store.commit("SET_LOGIN", forcookies )
                    this.$router.push({path: '/home'})
                    // location.reload();
                    // location.href = location.href;
                    
                })
            }
        }
    }
    </script>
    