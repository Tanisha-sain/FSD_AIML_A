function register(){
    return new Promise((resolve, _) => {
        setTimeout(() => {
            console.log("Register End");
            resolve();
        }, 3000);
    })
    
}
function sendemail(){
    return new Promise((resolve, reject) => {
        waitForThreeSecond();
        setTimeout(() => {
            console.log("send email");
            resolve();
            reject("Can't send email");
            
        }, 3000);
    })
    
}
function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Login end"); 
            resolve();
        }, 3000);
    })
}

function getData(){
    // waitForThreeSecond();
    // setTimeout(() => {
    //     console.log("Got user data");
    // }, 3000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Got user data");
            resolve();
        }, 3000);
    })
}

function displayData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("display user data");
            resolve();
        }, 3000);
    }) 
}


function waitForThreeSecond(){
    const ms = 3000 + new Date().getTime();
    while(ms > new Date()){

    }
}


// register()
// .then(sendemail)
// .then(login)
// .then(getData)
// .then(displayData)
// .catch((err) => {
//     console.log("Error: ", err)
// })


async function authenticate(){
    try{
        await register()
        await sendemail()
        await login()
        await getData()
        await displayData()
    }catch(err){
        console.log(err);
    }
    
}
authenticate();