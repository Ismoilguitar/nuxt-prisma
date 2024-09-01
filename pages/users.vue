<template>
	<div>
		<h1>User List</h1>
		<button @click="getUsers">Fetch Users</button>
		<ul v-if="users.length">
			<div v-for="user in users" :key="user.id">
				<p>login: {{ user.email }}</p>
				<p>password: {{ user.password }}</p>
			</div>
		</ul>
		<p v-else>No users found</p>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const users = ref<any[]>([])
const getUsers = async () => {
	try {
		const response = await axios.get('/api/getUser')
		users.value = response.data.users
	} catch (error) {
		console.error('error: ', error)
	}
}

onMounted(getUsers)
</script>
