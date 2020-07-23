const axios = require ('axios');

export async function submitIdea(data) {
    try {
        const response = await axios.post(process.env.REACT_APP_SERVER_URL, {
            title: data.title,
            description: data.description,
            tags: data.tags
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    } catch (error) {
        return Promise.reject(error);
    }
}