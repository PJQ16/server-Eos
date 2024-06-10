const config = require('../Config/config');

exports.getAllLeaves = async(req,res)=>{
    try{
      
        const users = await config.query(`SELECT 
        *
        FROM crdtleave as l
        inner join crdtuser as u  on l.crdtleave_ucode  = u.crdtuser_taf_code 
        WHERE DATE(crdtleave_create_date) = CURRENT_DATE AND
        crdtuser_status = ?
        GROUP BY
        crdtleave_ucode
        ORDER BY 
        crdtleave_id 
        desc
        `,{replacements:['ปกติ'],type: config.QueryTypes.SELECT });
        res.status(200).json({result : users});
    }catch(err){
        res.status(500).json({ error: 'Server Error' });
    }
}



exports.getLeavesById = async(req,res)=>{
    try{
        const id =  req.params.id
        const users = await config.query(`SELECT  
        l.crdtleave_create_date ,
        l.crdtleave_type ,
        l.crdtleave_start_date ,
        l.crdtleave_stop_date ,
        l.crdtleave_interval ,
        l.crdtleave_result 
        FROM  crdtuser as u  inner join crdtleave as l on u.crdtuser_taf_code  = l.crdtleave_ucode  
        where u.crdtuser_taf_code  = 0022566 AND 
        crdtleave_create_date  BETWEEN  '2023-10-01' AND  '2024-09-30' 
        ORDER BY  
        l.crdtleave_create_date  ASC`,{
           /*  replacements:[id], */
            type: config.QueryTypes.SELECT 
        });
        res.status(200).json({result : users});
    }catch(err){
        res.status(500).json({ error: 'Server Error' });
    }
}
