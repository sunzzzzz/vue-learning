import {loginByUserName} from '../../api/login'

const login = {
     state:{
         username:'',
         age:''
     },
     mutations:{
        SET_USERNAME:(state,username)=>{
            state.username = username
        }
     },
     actions:{
        loginByUserName({commit}){
            return new Promise((resolve,reject)=>{
                loginByUserName().then(response=>{
                    console.log(response);
                    const data  = response.data;
                    commit('SET_USERNAME', data.username);
                    resolve(data)
                }).catch(error => {
                    reject(error)
                })
            })
        }
     }
}

export default login