// const https = require('https');
// async function getUsernames() {
//     // write your code here
//     // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>
//     // const res = await https.get(`https://jsonmock.hackerrank.com/api/movies?Year=${year}`)

//         const p = []

//         const  data =  await new Promise((resolve) =>{
//             https.get(`https://jsonmock.hackerrank.com/api/article_users`, res=>{
//             let body = "";
//             res.on("data", data=> {
//                 body+= data;
//             });
//             res.on("end", () => {
//                 body = JSON.parse(body);
//                 resolve(body)
//             })
//         })
//         })
//         console.log(data)
//         // const titleList = data.map(movie => movie.Title);
//         // console.log(titleList)
//         // const mostActiveAuthors = data.filter(author => author.submission_count > 10);
//         // const mostActiveNames = mostActiveAuthors.map(author => author.username)
//         // console.log(mostActiveNames)

//     // console.log(JSON.parse(res))
//     // const {data} = await res.json()
//     // const titleList = data.map(movie => movie.Title);
//     // console.log(titleList)

// }

// getUsernames()

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
const dateString = "04/13/2021"
let dayName;
dayName = new Date(dateString)
console.log(dayName.toLocaleDateString("en-US", {weekday: "long"}))