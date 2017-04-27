const Koa =     require('koa');
const app =     new Koa();
const router =  require('koa-router')();
var bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const Score = require('./models/Score')

// router
//   .get('/scores', async (ctx, next) => {
//     const scores = await Score.find({})
//     ctx.body = scores
//   })
//   .post('/scores', async (ctx, next) => {
//     console.log(ctx.response);
    // try {
    //   // const scoreData = Score.validatedData(ctx.request.body);
    //   const scoreData = Score;
    //   const newScore = new Score(scoreData);
    //   await newScore.save();
    //   ctx.response.body = newScore;
    //   ctx.status = 201;
    //   next()
    // } catch (error) {
    //   ctx.response.body = {
    //     message: error.message
    //   };
    //   ctx.status = 400;
    // }
  // })

router.get('/scores', async function (ctx, next) {
  const scores = await Score.find().sort({ value: -1 })
  ctx.body = scores;
  ctx.status = 200;
});

router.post('/scores', async function (ctx, next) {
  const score = new Score(ctx.request.body)
  await score.save();
  ctx.body = score;
  ctx.status = 201;
  next()
});

app
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
