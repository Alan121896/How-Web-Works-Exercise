async function getUsers(){
    const res = await axios.get('https://reqres.in/api/users');
    console.log(res);
}

async function createUser(){
    const res = await axios.post('https://reqres.in/api/users', {username: 'ButtersTheChicken', email: 'fakeemail@gmail.com', age: 3});
    console.log(res);
}


createUser();