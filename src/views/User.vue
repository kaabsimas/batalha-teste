<template>
	<div class="container">
		<nav class="navbar" role="navigation" aria-label="main navigation">
		  	<div class="navbar-brand">
			    <div class="navbar-item" >
			      <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
			      <h1 class="title">{{ user.name }}</h1>
			    </div>
			    <div class="navbar-item">
			        {{ user.email }}
			    </div>
		  	</div>
		    <div class="navbar-end">
		      	<div class="navbar-item">
			        <div class="buttons">
			          	<a class="button is-light" @click="sair">
			            	Sair
			          	</a>
			        </div>
		     	</div>
		    </div>
		</nav>
		<br>
		<section>
			<div class="columns">
				<div class="column"  v-for="platform in user.gamesPlatform">
					<div class="card">
						<header class="card-header">
							<p class="card-header-title">
								{{ platform.gameName }}
							</p>
						</header>
						<div class="card-content">
							<div class="content">
						        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet minus cum magnam ex suscipit dolores vitae. Modi qui libero, assumenda molestiae, aut nemo voluptates dolore ea ullam quae dolor vel?</div>
						    </div>
						</div>
						<div class="card-footer">
							<div class="card-footer-item">
								{{ platform.platformName }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				user: null
			};
		},
		mounted() {
			this.user = this.$localStorage.get('user', null);
			
			if( ! this.user ){
				this.$toast.open({
						message: "Você não tem autorização para acessar essa página",
						type: 'is-danger',
						duration: 3500
					})
				this.$router.push({name: 'home'});
			}
		},
		methods: {
			sair(){
				this.$localStorage.set('user', null);
				this.$router.push({name: 'home'});
				this.$toast.open({
					message: "Até logo!",
					type: 'is-info',
					duration: 3500
				})
			}
		}
	}
</script>