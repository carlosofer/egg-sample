module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/cards/:userid', controller.card.cardIndex);
};