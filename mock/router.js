const express =  require('express');
const router = express.Router();


router.get('/api/list',(req,res)=>{
    res.json(
        [
            {
                userid:'00001',
                username:'zhangsan',
                age:'22' 
            },
            {
                userid:'00002',
                username:'lisi',
                age:'24' 
            }
        ]
    )
})
module.exports = router;