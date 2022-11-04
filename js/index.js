
//task 1

let  usersJson = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json()).then(data =>  getProfiles(data))
.catch(err => console.log(err));
const profilesWrapper = document.getElementById('wrapper');
const profilesList = document.createElement('ul');
profilesWrapper.appendChild(profilesList);

const random = [
    {userName : 'troley1998' , displayName : "Lebron James"},
    {userName : 'chef1124' , displayName : "James Harden"},
    {userName : 'kd35' , displayName : "Kevin Durant"},
]
;
function getProfiles(arr){
    console.log(arr);
    setTimeout(()=> {
        arr.forEach((elem) => {
            const li = document.createElement('li');
            const localUser = new user(elem.name,elem.username,elem.email,elem.address);
            const textNode = document.createTextNode(`${localUser.userName} - ${localUser.generateFullAddress()}` );
            li.appendChild(textNode);
            profilesList.appendChild(li);
    
        });    
     },1000)
    

}




class user {
    constructor(name, userName, email,address) {
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.address = address;
    }
    generateFullAddress() {
        return this.address.zipcode + this.address.street + this.address.suite; 
    }
}
const userOne = new user('vazha','vazha97','gmail.com')
console.log(userOne);
// getProfiles(random);
