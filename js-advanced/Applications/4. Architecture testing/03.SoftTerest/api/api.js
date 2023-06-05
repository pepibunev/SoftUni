const host = 'http://localhost:3030/';

async function requester(method, url, data){
    const user = JSON.parse(sessionStorage.getItem('user'));
    
    const options = {
        method: method,
        headers: {},
    };
    
    if(data){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }
    
    if(user){
        const token = user.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        //host + url
        // http://localhost:3030/users/register
        const res = await fetch(`${host}${url}`, options);
        
        if(!res.ok){
            if(res.status === 403){
                sessionStorage.setItem('user');
                throw new Error('Access denied');
            }
            const error = await res.json();
            throw new Error(error.message);
        }
        
        if (res.status === 200 || res.status === 204) {
            return res
        } else {
            throw res.json()
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const get = requester.bind(null,'GET');
const post = requester.bind(null,'POST');
const put = requester.bind(null,'PUT');
const delete_ = requester.bind(null,'DELETE');

export {
    get,
    post,
    put,
    delete_
}