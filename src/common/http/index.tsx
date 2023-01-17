/**
 * API 연동
 */
import http from './axiosCommon'

/**
 * http 통신 get 타입
 * @param path_
 * @param params_
 */
const axiosGet: any = async (path_: string, params_: any) => {

  try {

    console.log('1')
    const response: any = await http.get(path_, {params: params_})
      .then(function (response_) {
        console.log('2')
        console.log(response_);
        return response_;
      })
      .catch(function (error_) {
        console.log('3')
        console.log(error_);
        throw new Error('api.get - response error ')
      })
      .then(function () {
        console.log('4')
      });

    console.log('5')
    return response;

  } catch (error_) {
    console.error(error_)
    throw new Error('api.get - error ')
    // console.log('6')
    // return false;
  }
}

/**
 * http 통신 post
 * @param path_
 * @param params_
 */
const axiosPost: any = async (path_: string, params_: any) => {
  try {
    const response: any = await http.post(path_, {params: params_})
      .then(function (response_) {
        console.log(response_);
        return response_;
      })
      .catch(function (error_) {
        console.log(error_);
        throw new Error('api.post - response error ')
      })
      .then(function () {
      });

    return response;

  } catch (error_) {
    console.error(error_)
    throw new Error('api.post - error ')
    // return false;
  }
}

// export default Api
export {axiosGet, axiosPost}


// import React from 'react'
// import axios from 'axios'
// import http from './axiosCommon'
//
//
// // const Api = function(){
// //
// //   // console.log('111')
// //   // const aaa = 'bbb'
//
// const getApi: any = async (params_: any) => {
//   // const getApi : object = async function (params_: object) {
//
//   const path = '/getAreaGroup';
//
//   try {
//     const response = await http.get(path, {params: params_})
//       .then(function (response_) {
//         console.log(response_);
//         return response_;
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//       .then(function () {
//       });
//
//     return response;
//
//   } catch (error) {
//     console.error(error)
//     return false;
//   }
//   // }
//
//
//   // return getApi({})
//
//   // const getApi = (params: object): object => {
//   // const getApi = (data: ITutorialData): object => {
//   //   return http.get<ITutorialData>("/tutorials", data);
//   // }
//
// }
//
//
// // export default Api
// export {getApi}

// const apiRequest = () => {
//   const async getUsers = () {
//   }
// }
//
// export { apiRequest }

// export const apiRequest = () => {
//
//   const async getUsers = () {
//     try {
//       // 👇️ const data: GetUsersResponse
//       const {data, status} = await axios.get<GetUsersResponse>(
//         'https://reqres.in/api/users',
//         {
//           headers: {
//             Accept: 'application/json',
//           },
//         },
//       );
//
//       console.log(JSON.stringify(data, null, 4));
//
//       // 👇️ "response status is: 200"
//       console.log('response status is: ', status);
//
//       return data;
//     } catch (error) {
//       if (axios.isAxiosError(error)) {
//         console.log('error message: ', error.message);
//         return error.message;
//       } else {
//         console.log('unexpected error: ', error);
//         return 'An unexpected error occurred';
//       }
//     }
//   }
//
//
//   // const getApi = () => {
//   //   axios.get('https://localgost:3000/sewon/user', {})
//   //     .then((Response) => {
//   //       console.log(Response.data)
//   //     })
//   //     .catch((Error) => {
//   //       console.log(Error)
//   //     })
//   // }
//   //
//   // const postApi = () => {
//   //   axios.post('https://localgost:3000/sewon/user', {})
//   //     .then((Response) => {
//   //       console.log(Response.data)
//   //     })
//   //     .catch((Error) => {
//   //       console.log(Error)
//   //     })
//   // }
// }


