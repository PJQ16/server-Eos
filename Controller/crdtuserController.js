const config = require('../Config/config');

exports.getAllUsers = async(req,res)=>{
    try{
      
        const users = await config.query('SELECT * FROM crdtuser where crdtuser_fname != "Administrator"   order by crdtuser_id ASC ');
        res.status(200).json({result : users});
    }catch(err){
        res.status(500).json({ error: 'Server Error' });
    }
}

exports.getUsersById = async(req,res)=>{
    try{
        const id =  req.params.id
        const users = await config.query('SELECT * FROM crdtuser WHERE crdtuser_id = ?',{
            replacements:[id],
            type: config.QueryTypes.SELECT 
        });
        res.status(200).json({result : users});
    }catch(err){
        res.status(500).json({ error: 'Server Error' });
    }
}
