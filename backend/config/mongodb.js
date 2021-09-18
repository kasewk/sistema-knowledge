const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(err => {
        const msg = 'ERRO! Não foi possivel conectar ao mongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })