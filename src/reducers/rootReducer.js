const initState = {
	posts: [
		{
			id: '1',
			title: 'Squirrel laid an egg',
			body:
				'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
		},
		{
			id: '2',
			title: 'Dog bites traveller',
			body:
				'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
		},
		{
			id: '3',
			title: 'Homosapiens are a menace',
			body:
				'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
		},
	],
};

const rootReducer = (state = initState, action) => {
	if (action.type === 'DELETE_POST') {
		let newPosts = state.posts.filter((res) => {
			return action.id !== res.id;
		});
		return {
			...state,
			posts: newPosts,
		};
	}
	return state;
};

export default rootReducer;
