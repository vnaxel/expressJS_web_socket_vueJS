<template>
	<div class="addPublication card">
		<textarea
			v-model="content"
			placeholder="Ecrivez un nouveau post..."
			class="addPublication__input"
		></textarea>
		<div class="addPublication__row">
			<button
				@click="addPublication(content)"
				class="addPublication__row__btn btn"
			>
				publier
			</button>
			<a class="link" @click="$emit('togglePublish')">Rechercher des publications</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AddPublication",
		data() {
			return {
				content: "",
			};
		},
		methods: {
			addPublication() {
				this.$emit("addPublication", this.content);
				this.content = "";
			},
		},
	};
</script>

<style lang="scss" scoped>
	.addPublication {
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
            a {
                align-self: flex-end;
            }
			@media (max-width: 410px) {
                flex-direction: column;
                a {
                    margin-top: 1rem;
                }
            }
        }
	}
</style>
