<template>
  <div>
    <div style="width: 200px; background-color: black;">
    <div class="container">
        <div class="aspect-ratio-box">
            <img src="https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg" alt="Workplace" usemap="#workmap">
        </div>
    </div>
</div>

    <span>{{ user }}</span>
  </div>
</template>
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


    return {user}
  }
}
</script>
<style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    background-color: black;
    overflow: hidden; /* Đảm bảo hình ảnh không vượt ra ngoài khung chứa */
  }

  .aspect-ratio-box {
    position: relative;
    width: 100%;
    padding-top: 177.78%; /* 4 / 3 = 1.33333 -> 75% là tỉ lệ để giữ khung hình 4:3 */
  }

  .aspect-ratio-box img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Đảm bảo hình ảnh bao phủ toàn bộ khung chứa */
  }
</style>
