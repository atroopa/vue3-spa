<template>
    <div>
        <h1>{{users}}</h1>
    </div>
</template>

<!-- ---------- script ---------- -->

<script>
import axios from 'axios'
import {ref} from 'vue'

export default {
    setup() {
        const users = ref([])
        function getUsers(){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                users.value = response.data
            })
            .catch(function (error) {
                console.log(error);
            });
        }

        getUsers()
        return {users}
    }
}
</script>

<!-- ---------- style ---------- -->

<style></style>
