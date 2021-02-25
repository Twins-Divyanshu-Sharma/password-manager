import {getPassword} from '../services/dbService.mjs'

const contrGetPass = async (req, res) => {
    var l = req.body.msg;
    if(/\S/.test(l))
    {
        var p = await getPassword(l);
        res.status(200).json({messages:p,error:null});
    }
    else
    {
        res.status(400).json({messages:"emptyData",error:"true"});
    }
}

export { contrGetPass }
