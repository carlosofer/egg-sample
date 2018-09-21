exports.keys = 'cejwdfnclwdknckjsd';

//nunjucks
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};

//mysql
exports.mysql = {
    // database configuration
    client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'wolegeca',
        database: 'game',
    },
    // load into app, default true
    app: true,
    // load into agent, default false
    agent: false,
};