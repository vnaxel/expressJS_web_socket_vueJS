<template>
	<div class="publication card">
		<div v-if="!modify" class="publication__content">
			{{ publication.content }}
		</div>
		<div
			v-if="!modify"
			@click="openModifyPanel"
			class="publication__option"
		>
			<font-awesome-icon icon="ellipsis-vertical" />
		</div>
		<div v-if="modify" class="publication__modify">
			<div class="publication__modify__row0">
				<h2>Mode Edition</h2>
				<div class="icon-cancel" @click="modify = false">
					<font-awesome-icon icon="xmark" />
				</div>
			</div>
			<div class="publication__modify__row1">
				<textarea v-model="editing" />
			</div>
			<div class="publication__modify__row2">
				<button
					class="btn btn--delete"
					@click="$emit('deletePublication')"
				>
					<font-awesome-icon icon="trash" />
				</button>
				<div class="publication__modify__row2__grow"></div>
				<button class="btn btn--edit" @click="editPublication">
					<font-awesome-icon icon="pen-to-square" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "PublicationItem",
		props: ["publication"],
		data() {
			return {
				editing: this.publication.content,
				modify: false,
			};
		},
		methods: {
			editPublication() {
				this.$emit(
					"editPublication",
					this.publication._id,
					this.editing
				);
				this.modify = false;
			},
			openModifyPanel() {
				this.modify = true;
				this.editing = this.publication.content;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.publication {
		position: relative;
		&__option {
			font-size: 1.2rem;
			text-align: end;
			width: 1rem;
			height: 1rem;
			position: absolute;
			top: 1rem;
			right: 1rem;
			&:hover {
				cursor: pointer;
			}
		}
		&__content {
			max-width: calc(100% - 1rem);
		}
		&__modify {
			&__row0 {
				display: flex;
				width: 100%;
				justify-content: space-between;
				margin-bottom: 1rem;
				.icon-cancel {
					width: fit-content;
					font-size: 1.5rem;
					display: flex;
					align-self: flex-start;
					justify-self: flex-end;
					cursor: pointer;
			}
			}
			&__row1 {
				display: flex;
				textarea {
					flex-grow: 1;
					min-height: 47px;
					font-family: "Roboto", sans-serif;
					box-sizing: border-box;
					padding: 0.5rem;
				}
				
			}
			&__row2 {
				display: flex;
				margin-top: 1rem;
				&__grow {
					flex-grow: 1;
				}
				.btn--edit {
					background-color: #8bc34a;
					color: white;
					&:hover {
						background-color: darken(#8bc34a, 10%);
					}
					&:focus {
						background-color: darken(#8bc34a, 10%);
					}
				}
				.btn--delete {
					background-color: #f44336;
					color: white;
					&:hover {
						background-color: darken(#f44336, 10%);
					}
					&:focus {
						background-color: darken(#f44336, 10%);
					}
				}
			}
		}
	}
</style>
