<template>
    <div class="flex items-center justify-center px-5 py-10">
        <div class="grid grid-cols-3 gap-4">
            <CardView v-for="user in users" :key="user.id" :user="user" />
        </div>
    </div>
</template>

<!-- ---------- script ---------- -->

<script>
import axios from 'axios'
import { ref } from 'vue'
import CardView from '@/components/users/CardView.vue'

export default {
    components: {
        CardView
    },
    setup() {
        const users = ref([])
        const loading = ref(true)
        function getUsers() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(function (response) {
                    users.value = response.data
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        getUsers()
        return { users }
    }
}
</script>

<!-- ---------- style ---------- -->

<style></style>
