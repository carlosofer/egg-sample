const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const ctx = this.ctx;
        const user = await ctx.service.home.getUser(100008);
        await ctx.render('home/index.tpl', user);
    }
}

module.exports = HomeController;