<template>
<div class="container">
    <h1>Users</h1>
    <p class="link" @click="showForm">Add new</p>
    <div class="form-area" v-if="userForm">
        <form @submit.prevent="addUser">
            <label for="name">
                <input type="text" id="name" v-model="user.name" placeholder="Name">
            </label>
            <label for="email">
                <input type="email" id="email" v-model="user.email" placeholder="Email">
            </label>
            <br>
            <button type="submit" class="btn">Save</button> <button @click="userForm = false"  class="btn">Cancel</button>
        </form>
    </div>
    <div v-if="users.length < 1">
    No hay registros
    </div>

    <ol v-else class="MyList">
        <li v-for="user of users">
            <div v-if="editMode" class="inline-edit">

            </div>
            <div class="user-details">
                {{user.name}} | <a :href="'mailto:'+user.email">{{user.email}}</a> | <button class="delete" @click="deleteUser(user)">X</button>
            </div>
        </li>
    </ol>
</div>
</div>


</template>
<script>
import { db } from "@/firebase";

export default {
  data() {
    return {
      users: {},
      user:{'name':'', 'email':''},
      userForm: false,
      editMode: false
    };
  },
  firebase: {
    users: {
      source: db.ref("users"),
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
    }
  },
  methods:{
      showForm(){
          this.userForm = true
      },
      addUser(){
          this.$firebaseRefs.users.push({
              name: this.user.name,
              email: this.user.email
          }).then(
              this.user.name = '',
              this.user.email = '',
              this.userForm = false
          )
      },
      deleteUser(user){
           this.$firebaseRefs.users.child(user['.key']).remove()
      }
  }
};
</script>
<style lang="scss" scoped>
.container {
  max-width: 800px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.MyList{
    text-align: left;
    >li{
        margin-bottom: 10px;
    }
}
a{
    color:#42b983;
}
.link{
    color:#42b983;
    margin-bottom:15px;
    display: block; 
    cursor: pointer;
}
.form-area{
    max-width: 300px;
    margin: 10px auto;
    input{
        margin: 10px 0;
        padding: 5px;
    }
}
.btn{
    color: #eee;
    background: #42b983;
    border: 1px solid #42b983;
    padding: 5px 25px;
    border-radius: 2px;
    vertical-align: middle;
    margin: 3px;
    cursor: pointer;
}
.delete{
    background: #fff;
    border: 1px solid #ddd;
    margin-left: 15px;
    cursor: pointer;
}
</style>
