const Service = require('egg').Service;

class CardService extends Service {
    async getCardsFromUser (userid) {
        const user = await this.app.mysql.get('users', { 'id': userid });
        let query = `SELECT name as bank, branch, cardno FROM user_cards
            JOIN platform_recharge_channel_banks
                ON user_cards.bank_id = platform_recharge_channel_banks.id
            WHERE userid = ${userid};`;
        const cards = await this.app.mysql.query(query);
        return { user, cards };
    }
}

module.exports = CardService;