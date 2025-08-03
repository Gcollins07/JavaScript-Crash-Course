//fetch('https://jsonplaceholder.typicode.com/users/1')
const emailRef = document.querySelector('.email');

// fetch('https://jsonplaceholder.typicode.com/users/1').then(response => {
//     return response.json()
// }).then(data => {
// console.log(data)
// emailRef.innerHTML = data.email
// })
        
async function main() {
    const response = await (fetch('https://jsonplaceholder.typicode.com/users/1'))
    const data = await (response.json())
    console.log(response.json())
    emailRef.innerHTML = data.email
}

// getSubscriptionStatus().then
// function getSubscriptionStatus () {
//     return new Promise ((resolve, reject) => {
//         resolve('VIP')
//     })
// }

// async function main() {
//     console.log(await getSubscriptionStatus())
// }

// main()