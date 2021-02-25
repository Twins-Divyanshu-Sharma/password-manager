import {updatePassword} from '../services/dbService.mjs'

const contrUpdPass = async (req, res) => {
    var l = req.body.link;
    var p = req.body.pass;
    if(/\S/.test(l) && /\S/.test(l))
    {
        await updatePassword(l,p);
        res.status(200).json({messages:"updated",error:null});
    }
    else
    {
        res.status(400).json({messages:"emptyData",error:"true"});
    }

}

export {contrUpdPass}
