const url = 'https://5cbef81d06a6810014c66193.mockapi.io/api/comments';

function get(url, data = {}) {
    url = new URL(url);
    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));
    return fetch(url, {
        method: "GET",
    }).then(response => response.json())
}

function post(url, data) {
    return fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(response => response.json())
}

export function getComments() {
    return get(url)
}

export function getComment(id) {
    return get(`${url}/${id}`)
}

export function addComment(data) {
    return post(url, data)
}