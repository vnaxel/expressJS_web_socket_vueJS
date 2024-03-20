<template>
	<div class="card">
		<input
			v-model="search"
			placeholder="Recherchez des publications..."
			class="searchPublications__input"
		/>
		<div class="searchPublications__row">
			<div class="group">
				<button
					@click="searchPublications(search)"
					class="searchPublications__row__btn btn"
				>
					rechercher
				</button>
				<span class="resultats" v-if="resultats"
					>Resultats : {{ resultats }}
				</span>
			</div>
			<a class="link" @click="$emit('togglePublish')"
				>Ecrire une publication</a
			>
		</div>
	</div>
</template>

<script>
	export default {
		name: "SearchPublications",
		props: ["resultats", "lastSearch"],
		data() {
			return {
				search: "",
			};
		},
		methods: {
			searchPublications() {
				this.$emit("lastSearch", this.search);
				this.$emit("searchPublications", this.search);
				this.search = "";
			},
		},
	};
</script>

<style lang="scss" scoped>
	.searchPublications {
		display: flex;
		flex-direction: column;
		&__input {
			margin-bottom: 1rem;
			font-family: "Roboto", sans-serif;
			box-sizing: border-box;
			width: 100%;
			min-height: 47px;
			max-width: 100%;
			min-width: 100%;
			padding: 0.5rem;
		}
		&__row {
			display: flex;
			justify-content: space-between;

			.group {
				display: flex;
				span {
					align-self: flex-end;
					margin: 0 0 0 1rem;
				}
				@media (max-width: 320px) {
					flex-direction: column;
					span {
						align-self: flex-start;
						margin: 1rem 0 0 0;
					}
				}
			}
			span {
				align-self: flex-end;
				margin: 0 0 0 1rem;
			}

			a {
				align-self: flex-end;
			}
			@media (max-width: 520px) {
				flex-direction: column;
				a {
					margin-top: 1rem;
				}
			}
		}
	}
</style>
