express = require('express')
hbs = require('hbs')
const port = process.env.PORT || 3001
app = express();
app.use(express.static(__dirname + '/public'))

app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials')

hbs.registerHelper('year',()=>{
    return new Date().getFullYear()
});


hbs.registerHelper('toUpper',(msg)=>{
    return msg.toUpperCase();
});

// app.use((req,res,next)=>{
//     res.render('maintenance.hbs');
// })

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        title: 'home Page',
        message: 'Welcome to my site'
    })
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title: 'about Page',
        message:'This is About page'
    })
})

app.get('/project',(req,res)=>
{
    res.render('project.hbs',{title:"project"});
})

app.listen(port,()=>{});
