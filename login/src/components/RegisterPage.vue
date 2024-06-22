<template>
    <div>
        <h5>Register</h5>
        <form>
            <!--BAGIAN REGISTER NAMA SAMPAI LINE 22-->
            <div>
                <label 
                htmlFor="name">
                   Nama 
                </label>
                <input
                type="text"
                id="name"
                name="name"
                v-model="name"
                />
                <div v-if="validationErrors.name">
                    <small>
                    {{ validationErrors?.name[0] }}
                </small>
                </div>
            </div>

            
            <!--BAGIA REGISTER EMAIL ADDRESS 25- 40 -->

            <div>
                <label 
                htmlfor="email">Email Address</label>
                <input
                type="email"
                id="email"
                name="email"
                v-model="email">
                <div v-if="validationErrors.email">
                    <small>
                        {{ validationErrors?.email[0] }}
                    </small>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name:'Registerpage',
    component: {

    },

data() {
    return {
        name:'',
         email:'',
         password:'',
         confirmPassword:'',
         validationErrors:{},
         isSubmitting:false,
    };
},
methods: {
      registerAction(){
         this.isSubmitting = true
         let payload = {
             name:this.name,
             email: this.email,
             password: this.password,
             password_confirmation: this.confirmPassword
         }
         axios.post('/api/register', payload)
           .then(response => {
             localStorage.setItem('token', response.data.token)
             this.$router.push('/dashboard')
             return response
           })
           .catch(error => {
             this.isSubmitting = false
             if (error.response.data.errors != undefined) {
                 this.validationErrors = error.response.data.errors
             }
             return error
           });
        }
    }
}
</script>