import {newPassword} from '../services/dbService.mjs'

const contrNewPass = async (req, res) => {
    var l = req.body.link;
    var p = req.body.pass;
    if(/\S/.test(p)  &&  /\S/.test(l))
    {
        await newPassword(l,p);
        res.status(200).json({messages:"new",error:null});
    }
    else
    {
        res.status(400).json({messages:"empty",error:"true"});       
    }
}

export {contrNewPass}
