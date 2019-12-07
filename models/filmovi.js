const mongoose=require('mongoose')
const Film=mongoose.model(
    'film',
    new mongoose.Schema(
        {  ime: String,
            godina: Date,
            zanr: [String],
            rezija: String,
            oscar: Boolean,
            akteri: [String],
            user_id: String

        },

        {collection:'filmovi'}
    )
)
const getAll=()=>{
    return newPromise((succes,fail)=>{
        Film.find({},(err,data)=>{
            if(err){
                return fail(err)
            }
            return succes (data)
        })
    })
}
const getOne=(id)=>{
    return newPromise((succes,fail)=>{
        Film.findById(id,(err,data)=>{
            if(err){
                return fail(err)
            }
            return succes(data)
        })
    })
}
const save=(data)=>{
    return newPromise((succes,fail)=>{
        var f=new Film(data)
        f.save(data,err=>{
            if(err){
                return fail(err)
            }
            return succes()
        })
    })
}
const remove=(id)=>{
    return newPromise((succes,fail)=>{
        Film.deleteOne({_id:id},err=>{
            if(err){
                return fail(err)
            }
            return succes()
        })
    })
}
const replace =(id,data)=>{
    return newPromise((succes,fail)=>{
        Film.updateOne({_id:id},data,err =>{
            if(err){
                return fail(err)
            }
            return succes()

        })
    })
}
module.exports={
    getAll,
    getOne,
    save,
    remove,
    replace
}