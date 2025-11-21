/*function getUser()
{
    let users = [
        {name:"annie",age:34},{name:"punith",age:45}
    ];
    return users;
}
function finduser(name)
{
    let users = getUser();
    let ans = users.find((data)=>data.name===name);
    console.log(ans);
}*/
function getUser(){
    return new Promise((resolve, reject)=>{
        let users=[];
        setTimeout(()=>{
            users=[{name:"annie",age:34},{name:"punith",age:45}];resolve(users)},5000);
            return users;
        });
}
function findUser(name)
{
    getUser().then((user)=>
        {
        const ans = user.find((data)=>data.name===name);
        console.log(ans);
    });
}