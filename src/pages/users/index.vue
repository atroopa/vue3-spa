<template>
    <div>
        <h1>Users</h1>
    </div>
</template>

<!-- ---------- script ---------- -->

<script>
import axios from 'axios'

export default {
    setup() {
        function getUsers(){
            axios.post('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }

        getUsers()
    }
}
</script>

<!-- ---------- style ---------- -->

<style></style>
