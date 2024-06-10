const config = require('../Config/config');

exports.getAllWorkOutSide  = async(req,res)=>{
    try{
      
        const works = await config.query(`SELECT 
        u.crdtuser_name,
        w.crdtwork2_date,
        w.crdtwork2_reason 
        FROM crdtwork2 as w
        inner join crdtuser as u  on w.crdtwork2_c  = u.crdtuser_id  
        WHERE DATE(w.crdtwork2_date) = CURRENT_DATE AND
        crdtuser_status = ?
        ORDER BY 
        w.crdtwork2_c
        desc`,{replacements:['ปกติ'],type: config.QueryTypes.SELECT });
        res.status(200).json({result : works});
    }catch(err){
        res.status(500).json({ error: 'Server Error' });
    }
}
