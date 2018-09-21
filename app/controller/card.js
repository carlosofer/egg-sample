const Controller = require('egg').Controller;

class CardController extends Controller {
    async cardIndex() {
        const ctx = this.ctx;
        const userid = `${ctx.params.userid}`;
        const { user, cards } = await ctx.service.card.getCardsFromUser(userid);
        await ctx.render('/card/cardList.tpl', { user, cards });
    }
}

module.exports = CardController;