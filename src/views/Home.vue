<template>
	<section class="container">
		<div class="columns is-centered">
			<article class="card is-rounded">
				<div class="card-content">
					<b-field>
						<b-input type="email" placeholder="e-mail" v-model="email"></b-input>
					</b-field>
					<b-field>
						<b-input type="password" placeholder="senha" v-model="password" password-reveal></b-input>
					</b-field>
					<button class="button is-link is-medium" @click="entrar">Entrar</button>
				</div>
			</article>
		</div>
	</section>
</template>
<script>
	export default {
		data(){
			return {
				email: null,
				password: null
			};
		},
		methods: {
			entrar(){
				console.log( this.email + ' e ' + this.password );
				const loading = this.$loading.open();
				this.axios.post(
					'https://bol-api-stg.herokuapp.com/user/login', 
					{
						email: this.email,
						password: this.password
					}, 
					{ 
						headers: {"Content-Type":"application/json;charset=UTF-8","Accept":"v1"} 
					}
				).then((response) => {
					this.$localStorage.set('user', response.data);
					this.$toast.open({
						message: "Bem vindo " + response.data.name,
						type: 'is-success',
						duration: 3500
					})
				}).catch( e => {
					this.$toast.open({
						message: "Houve um erro ao validar sua conta, tente novamente",
						type: 'is-danger',
						duration: 3500
					})
				}).then(() => {
					loading.close();
					this.$router.push({name: 'user'});
				});
			}
		}
	}
</script>