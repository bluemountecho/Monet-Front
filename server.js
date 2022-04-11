const express = require('express');
const session = require('express-session');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser')
const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : '',
        database : 'db_monet'
    }
})

require('dotenv').config();

const md5 = require('md5');
const app = express();
const nodemailer = require('nodemailer');
const fileUpload = require('express-fileupload');

const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
    secure: false,
    secureConnection: false,
    tls: {
        ciphers:'SSLv3'
    }
})

app.use(cors())
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({ limit: '50mb', parameterLimit: 52428800, extended: true }));
app.use(bodyParser.json({limit: '50mb', parameterLimit: 52428800}));
app.use(fileUpload())

app.get('/logout', function (req, res) {
    req.session.user = null
    res.redirect('http://localhost:3001/#/login')
})

app.use(express.static(path.join(__dirname, '/build')));
app.use(express.static(path.join(__dirname, '/public')));

function convertTimestampToString(timestamp, flag = false) {
    if (flag == false) {
        return new Date(timestamp).toISOString().replace(/T/, ' ').replace(/\..+/, '').replace(/ /g, '_').replace(/:/g, '_').replace(/-/g, '_')
    } else {
        return new Date(timestamp).toISOString().replace(/T/, ' ').replace(/\..+/, '')
    }
}

app.get('/getfaqs', async function (req, res) {
    var rows = await knex('tbl_faqs').select('*')

    res.send(rows)
})

app.get('/getblogs', async function (req, res) {
    var rows = await knex('tbl_blogs').orderBy('created_at', 'desc').select('*')

    res.send(rows)
})

app.post('/sendemail', async function(req, res) {
	let name = req.body.name
	let email = req.body.email
    let subject = req.body.subject
    let message = req.body.message
    
    const mailData = {
        from: process.env.MAIL_FROM_ADDRESS,
        to: process.env.MAIL_TO_ADDRESS,
        subject: subject,
        text: message,
        html: '<h1>' + subject + ' </h1><br/>\
            <b>Name:' + name + ' </b><br/>\
            <b>Email: ' + email + ' </b><br/>\
            <p>' + message.replace(/(?:\r\n|\r|\n)/g, '<br>') + '</p>'
    };

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
    });

    res.redirect('http://localhost:3000/contact')
});

app.listen(8888);