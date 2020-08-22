import request from '../utils/request';



export const loginByUserName = (query)=>{
    return request({
        url:'/api/list',
        method:'GET',
        query
    })
}