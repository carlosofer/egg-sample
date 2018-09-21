const Service = require('egg').Service;

class HomeService extends Service {
    async getUser(id) {
        const user = await this.app.mysql.get('users', { 'id': id});
        return { user };
    }
}

module.exports = HomeService;