const apiURL="http://13.250.97.70:2022/api/aif-group/auths/"
// const apiURL="http://localhost:2022/api/aif-group/auths/"
const header= {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + window.localStorage.getItem('token'),
 }
 
export {
    apiURL,
    header,
 }