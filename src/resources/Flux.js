const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Personajes: {},
			Planetas: {},
			Vehículos: {},
			Favoritos: [],
			Detalles: {
				data: {
					properties: {
						height: '172',
						mass: '77',
						hair_color: 'blond',
						skin_color: 'fair',
						eye_color: 'blue',
						birth_year: '19BBY',
						gender: 'male',
						created: '2023-05-10T06:55:22.511Z',
						edited: '2023-05-10T06:55:22.511Z',
						name: 'Luke Skywalker',
						homeworld: 'https://www.swapi.tech/api/planets/1',
						url: 'https://www.swapi.tech/api/people/1',
					},
					description: 'A person within the Star Wars universe',
					_id: '5f63a36eee9fd7000499be42',
					uid: '1',
					__v: 0,
				},
				imgUrl: 'https://starwars-visualguide.com/assets/img/placeholder.jpg',
			},
		},

		actions: {
			loadInitialData: async () => {
				fetch('https://www.swapi.tech/api/people?page=1&limit=100')
					.then((response) => response.json())
					.then((data) =>
						setStore({
							Personajes: {
								data: data.results,
								imgUrl:
									'https://starwars-visualguide.com/assets/img/characters/',
							},
						})
					)
					.catch((error) => console.log(error));
				fetch('https://www.swapi.tech/api/vehicles?page=1&limit=100')
					.then((response) => response.json())
					.then((data) =>
						setStore({
							Vehículos: {
								data: data.results,
								imgUrl: 'https://starwars-visualguide.com/assets/img/vehicles/',
							},
						})
					)
					.catch((error) => console.log(error));
				fetch('https://www.swapi.tech/api/planets?page=1&limit=100')
					.then((response) => response.json())
					.then((data) =>
						setStore({
							Planetas: {
								data: data.results,
								imgUrl: 'https://starwars-visualguide.com/assets/img/planets/',
							},
						})
					)
					.catch((error) => console.log(error));
			},

			handlerFavButton: (data) => {
				const storeCopy = getStore();
				storeCopy.Favoritos.some((element) => element.name === data.name)
					? setStore({
							Favoritos: storeCopy.Favoritos.filter(
								(element) => element.name !== data.name
							),
					  })
					: setStore({ Favoritos: [...storeCopy.Favoritos, data] });
			},
			handlerDetailsButton: async (data) => {
				fetch(data.url)
					.then((response) => response.json())
					.then((res) =>
						setStore({
							Detalles: {
								data: res.result,
								imgUrl: data.imgUrl,
							},
						})
					)
					.catch((error) => console.log(error));
			},
		},
	};
};

export default getState;
