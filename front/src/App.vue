<template>
	<div>
		<div class="card title">
			<h1>Express + VueJS 🔥🔥🔥</h1>
		</div>
		<PublicationsList />
	</div>
</template>

<script>
	import PublicationsList from "./components/PublicationsList.vue";

	export default {
		name: "App",
		components: {
			PublicationsList,
		},
	};
</script>

<style lang="scss">
	$color-primary: linear-gradient(
		129deg,
		rgba(131, 58, 180, 1) 0%,
		rgba(253, 29, 29, 1) 50%,
		rgba(252, 176, 69, 1) 100%
	);
	$color-secondary: rgb(217, 217, 219);
	$box-shadow: rgba(0, 0, 0, 0.12) 0px -12px 30px,
		rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
		rgba(0, 0, 0, 0.09) 0px -3px 5px;

	* {
		margin: 0;
		padding: 0;
	}

	body {
		min-height: 100vh;
		background: linear-gradient(
			129deg,
			#833ab4 0%,
			#fd1d1d 50%,
			#fcb045 100%
		);
	}

	#app {
		padding: 2rem 0 2rem 0;
		font-family: "Roboto", sans-serif;
		margin: auto;
		width: 60%;
		min-width: 200px;
		@media (max-width: 1000px) {
			width: 80%;
		}
		@media (max-width: 600px) {
			width: 90%;
		}
	}

	.card {
		background: rgba(255, 255, 255, 1);
		border-radius: 1rem;
		padding: 1rem;
		margin-bottom: 1rem;
		box-shadow: $box-shadow;
		&:last-child {
			margin-bottom: 0rem;
		}
	}

	.btn {
		color: black;
		padding: 1rem;
		border-radius: 0.3rem;
		border: none;
		background: $color-secondary;
		width: fit-content;
		height: fit-content;
		min-width: 3rem;
		font-weight: bold;
		text-transform: uppercase;
		transition: all 150ms ease-in-out;
		&:hover {
			background: rgba(131, 58, 180, 1);
			color: white;
			cursor: pointer;
		}
		&:focus {
			background-color: darken($color-secondary, 10%);
			outline: none;
		}
	}

	.link {
		color: rgba(131, 58, 180, 1);
		text-decoration: underline;
		font-weight: 600;
		cursor: pointer;
	}
</style>
