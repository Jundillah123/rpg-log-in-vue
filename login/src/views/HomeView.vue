<template>
  <div class="text-container">
    
  </div>
             <nav class="navbar navbar-expand-lg navbar-light bg-light; animated-text">
                 <div class="container-fluid">
                     <a class="navbar-brand" href="#">Dashboard</a>
              <p class="animated-text" v-if="showText">Welcome, {{ user?.name }} </p>

                     <div class="d-flex">
                         <ul class="navbar-nav">
                             <li class="nav-item">
                              <button @click="logout">Logout</button>
                             </li>
                         </ul>
                     </div>
                 </div>
             </nav>
             <br>
  <div v-if="user" class="animated-text">
    <img :src="user.avatar" alt="User Avatar"><br>
    <p>Nama: {{ user.name }}</p>
    <p>Email: {{ user.email }}</p>
  </div>

  <div>

    
  </div>
  </template>
  
  <script>
import cookie from 'js-cookie';
import { mapGetters } from 'vuex';



  export default {
    name:"HomeView",
    components: {
      
    },
    data() {
    return {
      showText: false,
      animatedText: 'Selamat Datang' // Teks yang ingin dianimasikan
    };
  },
    methods: {
      logout(){
        if(confirm('klik ok untuk logout'));
        cookie.remove('userdata');
        this.$store.commit("SET_LOGOUT");
        this.$router.push({path: "/"})
       
      },
    },
    computed: {
      ...mapGetters(["getuser"]),
      user(){
        const userdata = cookie.get("userdata");
        return userdata ? JSON.parse(userdata): null;
      }
    },
    mounted() {
    // Menampilkan teks secara bertahap setelah komponen dimuat
    setTimeout(() => {
      this.showText = true;
    }, 1000); // Ganti dengan delay yang sesuai
  }
};
  
  
</script>
<style scoped>
.container {
  overflow: hidden; /* Menyembunyikan teks yang keluar dari batas container */
}

.animated-text {
  animation: slideInRight 3s ease forwards; /* Animasi slide dari kanan ke kiri */
  white-space: nowrap; /* Mencegah teks untuk pindah ke baris berikutnya */
}

@keyframes slideInRight {
  0% {
    transform: translateX(100%); /* Mulai dari luar layar sebelah kanan */
  }
  100% {
    transform: translateX(0); /* Muncul ke posisi aslinya */
  }
}
nav{
  background-color: rgba(224, 234, 231, 0.779);
  width: 1500px;
  margin-left: 15px;
  padding: 5px;
  border-radius: 8px;
}
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


  