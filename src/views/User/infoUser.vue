<template>{{ user }}</template>
<script>
import {computed} from 'vue'
import { projectAuth } from '@/config/firebase';
import axios from 'axios'
export default{
 setup(){
    console.log("🚀 ~ setup ~ projectAuth:", projectAuth)
    const user = computed(() => projectAuth?.currentUser?.email)


  //   axios.get('https://jsonplaceholder.typicode.com/posts/1')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });
//   const {data} = await axios.post('https://httpbin.org/post', {
//     firstName: 'Fred',
//     lastName: 'Flintstone',
//     orders: [1, 2, 3]
//   }, {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
// })
//   console.log("🚀 ~ const{data}=awaitaxios.post ~ data:", data)

// axios({
//   method: 'get',
//   url: 'https://jsonplaceholder.typicode.com/posts/1',
//   transformRequest: [function (data, headers) {
//     // Do whatever you want to transform the data
//     console.log("🚀 ~ setup ~ data:", data)
//   console.log("🚀 ~ setup ~ headers:", headers)
//     return '2';
//   }],
//   params:{
//     ID: 12345
//   },
// })

// .then(function(res,s){
//   console.log("🚀 ~ .then ~ res------->:", res)
// st
// })

//   .then(function (response) {
//      console.log("🚀 ~ response:", response)
//     //  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   });

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1
});

instance.interceptors.request.use(function (config) {
    console.log("🚀 ~ config:", config)
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    console.log("🚀 ~ response:", response)
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return '2';
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
instance.get('/posts/1',{data:'5000'})
.then(function(res){

  console.log("🚀 ~ .then ~ res---->:", res)
})



// axios('https://jsonplaceholder.typicode.com/posts/1',{})
// .then(function(res){
//   console.log("🚀 ~ .then ~ res:", res)

// })
    return {user}
  }
}
</script>
