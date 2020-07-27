const axios = require ('axios');

export async function submitIdea(data) {
        return await axios.post(process.env.REACT_APP_SERVER_URL_SUBMIT, {
            title: data.title,
            description: data.description,
            tags: data.tags
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    .then(response => {
        return response;
    })
    .catch (error => {
        return Promise.reject(error);
    })
}

export async function getIdeas(searchParams) {
    return await axios.get(process.env.REACT_APP_SERVER_URL, {
        params: searchParams
    })
    .then(response => {
        return response;
    })
    .catch(error => {
        return Promise.reject(error);
    });
}

export async function updateLike(id, value) {
    return await axios.put(process.env.REACT_APP_SERVER_URL, {
        ideaID: id,
        increment: value
  })
  .then(response => {
    return response;
  })
  .catch(error => {
    return Promise.reject(error);
  });
}