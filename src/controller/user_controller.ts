import user from '../database/model/user_model';

interface contorller{
    getAll:(req:any, res:any) => Promise<any>;
}

const User:contorller = {
    async getAll(req:any, res:any):Promise<any>{
        const all = await user.find({});
        res.code(200).send(all);
    }
};

export default User;