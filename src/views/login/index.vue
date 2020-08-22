<template>
    <div>
        <button @click="login">点击登录</button><br/>
        <span>{{username}}</span>
    </div>
</template>
<script>

export default {
    name:'Login',
    data(){
        return{
            username:''
        }
    },
    created(){
       
    },
    methods:{
        login(){
           this.$store.dispatch('loginByUserName').then(data=>{
               console.log(data)
           })
        }
    }
}
</script>