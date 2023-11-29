const baseApi = new URL('https://rickandmortyapi.com/api');
const charactersApi = new URL(`${baseApi.href}/character/?name`);

const searchCharacters = async function (name) {
    let result = null;
    charactersApi.searchParams.set('name', name);

    await fetch(charactersApi).then((response) => {
        return response.json()
    }).then(data => {
        result = data.results ?? data.error;
    });

    return result;
}

export { searchCharacters }