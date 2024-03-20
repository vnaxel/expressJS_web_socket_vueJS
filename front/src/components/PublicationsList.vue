<template>
	<div>
		<SearchPublications
			v-if="!publishMode"
			@searchPublications="searchPublications"
			@lastSearch="lastSearch"
			@togglePublish="publishMode = true"
			:resultats="this.resultats"
		/>
		<AddPublication
			v-if="publishMode"
			@addPublication="addPublication"
			@togglePublish="publishMode = false"
		/>
		<PublicationItem
			v-for="publication in publications"
			:publication="publication"
			:key="publication._id"
			@deletePublication="deletePublication(publication._id)"
			@editPublication="editPublication"
		></PublicationItem>
	</div>
</template>

<script>
	import PublicationItem from "./PublicationItem.vue";
	import AddPublication from "./AddPublication.vue";
	import SearchPublications from "./SearchPublications.vue";
	export default {
		name: "PublicationsList",
		components: {
			AddPublication,
			SearchPublications,
			PublicationItem,
		},
		data() {
			return {
				publications: {},
				publishMode: false,
				resultats: 0,
				search: ''
			};
		},
		mounted() {
			const socket = new WebSocket('wss://api-posts-list.herokuapp.com');

			// Connection opened
			socket.addEventListener('open', () => {
				console.log('connected to the ws server');
			});

			// Listen for messages
			socket.addEventListener('message', () => {
				if (this.publishMode) {
					this.getPublications();
				} else if (this.publishMode === false) {
					this.searchPublications(this.search);
				}
			});
		},
		methods: {
			getPublications() {
				fetch('https://api-posts-list.herokuapp.com/api/publications')
					.then((res) => res.json())
					.then((publications) => {
						this.publications = publications.data.reverse();
						this.resultats = publications.data.length;
					});
			},

			lastSearch(search) {
				this.search = search
			},

			searchPublications(search) {
				fetch(
					`https://api-posts-list.herokuapp.com/api/publications/query?search=${search}`
				)
					.then((res) => res.json())
					.then((publications) => {
						if (!publications.success) {
							console.log(publications);
						} else {
							this.publications = publications.data.reverse();
							this.resultats = publications.data.length;
						}
					});
			},

			addPublication(postBody) {
				const options = {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json;charset=UTF-8",
					},
					body: JSON.stringify({
						content: postBody,
					}),
				};
				fetch("https://api-posts-list.herokuapp.com/api/publications", options)
					.then((res) => res.json())
					.then((res) => {
						if (!res.success) {
							console.log(res.msg);
						} else {
							this.getPublications();
						}
					})
					.catch((error) => console.log(error));
			},

			editPublication(id, postBody) {
				const options = {
					method: "PATCH",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json;charset=UTF-8",
					},
					body: JSON.stringify({
						content: postBody,
					}),
				};
				fetch(`https://api-posts-list.herokuapp.com/api/publications/${id}`, options)
					.then((res) => res.json())
					.then((res) => {
						if (!res.success) {
							console.log(res.msg);
						} else {
							this.getPublications();
						}
					})
					.catch((error) => console.log(error));
			},

			deletePublication(id) {
				const options = {
					method: "DELETE",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json;charset=UTF-8",
					},
				};
				fetch(`https://api-posts-list.herokuapp.com/api/publications/${id}`, options)
					.then((res) => res.json())
					.then((res) => {
						if (!res.success) {
							console.log(res.msg);
						}
						this.getPublications();
					})
					.catch((error) => console.log(error));
			},
		},
	};
</script>

<style lang="scss" scoped></style>
