fetch("http://localhost:5000/users")
.then(res=>res.json())
.then(data=>showUsers(data))


const showUsers=(data)=>{
    const usersId=document.getElementById("users");
    let users=data.map(user=>{
        return `
        <div class="user">
            <h1>${user.name}</h1>
            <p>age:- ${user.age}</p>
            <p>email:- ${user.email}</p>
            <button onclick="adToIist('${user.id}')">add name to list</button>
        </div>
        `
    });
    users=users.join("")
    usersId.innerHTML=users;
}


const adToIist = (user)=>{
    chartMultiDb("sample-chart",user)
    console.log(localStorage.getItem("sample-chart"))
}