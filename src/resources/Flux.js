const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			Personajes: {},
			Planetas: {},
			Vehículos: {},
			Favoritos: [],
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
					.catch((error) => console.log(error))
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
					.catch((error) => console.log(error))
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
					.catch((error) => console.log(error))
			},

			handlerFavButton: (data) => {
				const storeCopy = getStore()
				storeCopy.Favoritos.some((element) => element.name === data.name)
					? setStore({
							Favoritos: storeCopy.Favoritos.filter(
								(element) => element.name !== data.name
							),
					  })
					: setStore({ Favoritos: [...storeCopy.Favoritos, data] })
			},
		},
	}
}

export default getState
