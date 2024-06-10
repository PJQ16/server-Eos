const config = require('../Config/config');

exports.getSumWorkMonthById = async(req,res)=>{
    try{
        const id =  req.params.id
        const sumMonths = await config.query(`SELECT 
        m.crdtsumwork_date,
        m.crdtsumwork_cntlate ,
        m.crdtsumwork_normal ,
        m.crdtsumwork_sick ,
        m.crdtsumwork_summer ,
        m.crdtsumwork_other 
        FROM crdtsumwork AS m
        INNER JOIN crdtuser AS u ON m.crdtsumwork_taf_code = u.crdtuser_taf_code
        WHERE m.crdtsumwork_taf_code = 0022566 AND
        m.crdtsumwork_date  BETWEEN  '2023-10-01' AND '2024-09-30'
        ORDER  BY  
        m.crdtsumwork_date ASC `,{
            type: config.QueryTypes.SELECT 
        });
        res.status(200).json({result : sumMonths});
    }catch(err){
        res.status(500).json({ error: 'Server Error' });
    }
}