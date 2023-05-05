const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            Personajes: {
                data: [
                    {
                        uid: '1',
                        name: 'Luke Skywalker',
                        url: 'https://www.swapi.tech/api/people/1'
                    },
                    {
                        uid: '2',
                        name: 'C-3PO',
                        url: 'https://www.swapi.tech/api/people/2'
                    },
                    {
                        uid: '3',
                        name: 'R2-D2',
                        url: 'https://www.swapi.tech/api/people/3'
                    },
                    {
                        uid: '4',
                        name: 'Darth Vader',
                        url: 'https://www.swapi.tech/api/people/4'
                    },
                    {
                        uid: '5',
                        name: 'Leia Organa',
                        url: 'https://www.swapi.tech/api/people/5'
                    },
                    {
                        uid: '6',
                        name: 'Owen Lars',
                        url: 'https://www.swapi.tech/api/people/6'
                    },
                    {
                        uid: '7',
                        name: 'Beru Whitesun lars',
                        url: 'https://www.swapi.tech/api/people/7'
                    },
                    {
                        uid: '8',
                        name: 'R5-D4',
                        url: 'https://www.swapi.tech/api/people/8'
                    },
                    {
                        uid: '9',
                        name: 'Biggs Darklighter',
                        url: 'https://www.swapi.tech/api/people/9'
                    },
                    {
                        uid: '10',
                        name: 'Obi-Wan Kenobi',
                        url: 'https://www.swapi.tech/api/people/10'
                    }
                ],
                imgUrl: 'https://starwars-visualguide.com/assets/img/characters/'
            },
            Vehículos: {
                data: [],
                imgUrl: 'https://starwars-visualguide.com/assets/img/vehicles/'
            },
            Planetas: {
                data: [],
                imgUrl: 'https://starwars-visualguide.com/assets/img/planets/'
            },
        },
        actions: {
            loadInitialData: async () => {
                try {
                    const responsePeople = await fetch('https://www.swapi.tech/api/people?page=1&limit=100')
                    const dataPeople = await responsePeople.json()
                    setStore({ Personajes: { data: dataPeople.results, imgUrl: 'https://starwars-visualguide.com/assets/img/characters/' } })

                    const responseVehicle = await fetch('https://www.swapi.tech/api/vehicles?page=1&limit=100')
                    const dataVehicle = await responseVehicle.json()
                    setStore({ Vehículos: { data: dataVehicle.results, imgUrl: 'https://starwars-visualguide.com/assets/img/vehicles/' } })

                    const responsePlanet = await fetch('https://www.swapi.tech/api/planets?page=1&limit=100')
                    const dataPlanet = await responsePlanet.json()
                    setStore({ Planetas: { data: dataPlanet.results, imgUrl: 'https://starwars-visualguide.com/assets/img/planets/' } })

                } catch (error) {
                    console.log("no logramos completar el fetching de datos:", error);
                }

            }
        }
    }
}
export default getState
