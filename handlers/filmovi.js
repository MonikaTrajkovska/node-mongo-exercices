const mFilmovi=require('../models/filmovi')

const getAll=(req,res)=>{
    m.mFilmovi.getAll()
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}
const getOne=(req,res)=>{
    mFilmovi.getOne(req.params.id)
    .then(data=>{
        res.status(200).send(data)
    })
    .catch(err=>{
        res.status(500).send(err)
    })
}
const save=(req,res)=>{
    var data=req.body
    let er=0
    if(data.ime=undefined || data.ime.length ==0){
        er++
    }
    if (data.rezija == undefined || data.rezija.length == 0) { er++; }
    if (data.godina == undefined || data.godina.length == 0) { er++; }
    if (data.zanr == undefined || data.zanr.length == 0) { er++; }
    if (data.akteri == undefined || data.akteri.length == 0) { er++; }
    if (data.oscar == undefined) { er++; }

}
if(er ==0){
    mFilmovi.save(data).then(()=>{
        res.status(201).send('created')
        .catch(err=>{
            res.status(200).send(err)
        })
    })
}
mFilmovi.save(data).then(()=>{
    res.status(200).send("Created")
})
const update = (req, res) => {
    var data = req.body;
    mFilmovi.replace(req.params.id, data) //koe id ke bide vo url toa se brise so ova req.params.id
        .then(() => {
            res.status(204).send();
        })
        .catch(err => {
            res.status(500).send(err);
        });
}
const remove = (req, res) => {
    mFilmovi.remove(req.params.id)
        .then(() => {
            res.status(204).send();
        })
        .catch(err => {
            res.status(500).send(err);
        });
}
module.exports = {
    getAll,
    getOne,
    save,
    replace,
    update,
    remove
}