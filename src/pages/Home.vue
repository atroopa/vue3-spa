<template lang="">
    <div class="flex flex-col items-center justify-center">
        <p class="px-10 mt-8 mb-3 text-gray-800 dark:text-gray-800 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-800 first-letter:me-3 first-letter:float-start">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
        <p class="px-10 text-gray-800 dark:text-gray-800">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
        <router-link  :to="{ name: 'usersIndex'}"
          class="px-6 py-2 font-bold text-blue-100 bg-blue-600 hover:bg-blue-900 rounded-xl">
            Users
        </router-link>
      </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home'
}
</script>
