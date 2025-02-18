const path = require('path');  
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');


const comments = [
    {
        name: 'ram',
        text: 'lorem abwdihvbawdfbasweifb iwe biqwebf iqbrdfbqw rbuqwbr uqhb riqbr ihbwribqwirb iqw r'
    },
    {
        name: 'shyam',
        text: 'hello qefi hq3u9fhiwue hfih f9uweh fiuhebfiuqbe f hwqefbujbfuy w vbwsjuey43vrfjaw4bvrfwae'
    },
    {
        name: 'hari',
        text: 'aekwub fyu awgeufy vbaweufg uiyawef gkuyaw efuab ejufh bvauwjhhe brvujaweb'
    },
    {
        name: 'afwin',
        text: 'hbfjuhawebfjhaweb fkuwaebfukb ikfbakuweh bfkjhawebf kuhaweb fkuagwve kurfbaw'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
})

app.get('/comments/create', (req, res) => {
    res.render('comments/create');
})

app.post('/comments', (req, res) => {
    const comment = req.body;
    console.log(comment);
    res.send("it wroks");
})
app.get('/order', (req, res) => {
    // console.log(req.query);
    res.send('order placed')    
})

app.post('/order', (req, res) => {
    console.log(req.body);
    res.send('order post')    
})


app.listen(8080, () => {
    console.log('server is running on: http://localhost:8080');
})
