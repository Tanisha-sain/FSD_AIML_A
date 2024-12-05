const myPromise = new Promise(
    (resolve, reject) => {
        console.log("execute promise");
        // resolve();   
        reject("Network error");   
    }
)
myPromise.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log("Error: ", err);
}).finally(() => {
    console.log("Executed finally block")
})

// fetch("https://api.github.com/users")
// .then((res) => {

// })
// .catch((err) => {
//     console.error(err);
// })
const data = fetch("https://api.github.com/users/riya-rjha");
data.then((dat) => {
    return dat.json()
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error(err);
})