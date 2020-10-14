module.exports = express => {
  const router = express.Router();

  router
    .route('/add/:n1/:n2')
    .get((req, res) => {
      const { n1, n2 } = req.params;
      const result = +n1 + +n2;
      res.status(200).send(`${result}`);
    });

  router
    .route('/mpy/:n1/:n2')
    .get((req, res) => {
      const { n1, n2 } = req.params;
      const result = +n1 * +n2;
      res.status(200).send(`${result}`);
    });

  router
    .route('/json/:n1/:n2')
    .post((req, res) => {
      const { n1, n2 } = req.params;
      const result = {
        sum: +n1 + +n2,
        mpy: +n1 * +n2
      };
      if (req.headers['content-type']) {
        res.set({'Content-Type': 'application/json' }).json({ result });
      } else {
        res.status(200).send(`Sum: ${result.sum}; Mpy: ${result.mpy}`);
      }
    });

  return router;
};
