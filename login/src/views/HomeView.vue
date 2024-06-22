<template>
   <header>
    <nav>
     <h1>Klik logout untuk keluar <br> 
          <span>⬇</span>
    </h1>
          <button @click="logout">Logout</button>
    </nav>
  </header>
  </template>
  
  <script>
  import axios from 'axios';


  export default{
      methods: {
       this.$axios.post('/logout', {
        email:this.email,
        password: this.password
       }).then(response = > {
         this.deleteUserData();
        this.$store.dispatch('logout', this.$router)
  })
}
  }
</script>
<style>
header {
  background-color: #f0f0f0;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  h1{
    font-size: 20px;
    color: cadetblue;
    font-style: inherit
  }
  span{
    font-size: 60px;
    color: cadetblue;
  }
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>


  