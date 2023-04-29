const GetData = async (url) => {
    const response = await fetch(url, { 
        method: "GET",
        headers: headersList
    })
    const data = await response.json()
    return data
}

export default GetData