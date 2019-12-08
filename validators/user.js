const createUser={
    first_name:'required|string',
    last_name:'required|string',
    email:'required|string',
    password:'required|string|minlength:3',


}
module.exports={
    createUser
}