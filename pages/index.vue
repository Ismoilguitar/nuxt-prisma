<template>
	<div>
		<h1>Form Register</h1>
		<form @submit.prevent="register">
			<div>
				<input v-model="email" type="text" placeholder="Login" required />
			</div>
			<div>
				<input
					v-model="password"
					type="password"
					placeholder="Password"
					required
				/>
			</div>
			<div>
				<button type="submit">Register</button>
			</div>
		</form>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const register = async () => {
	try {
		const response = await axios.post('/api/register', {
			email: email.value,
			password: password.value,
		})
		alert('User registered successfully')
		console.log('User rows: ', response.data)
	} catch (error) {
		console.error('error: ', error)
		alert('Error registering user')
	}
}
</script>
