module.exports = express => {
  const router = express.Router();

  const headers = {
    'Access-Control-Allow-Origin': 'https://kodaktor.ru'
  };

  router
    .route('/add/:n1/:n2')
    .get((req, res) => {
      const { n1, n2 } = req.params;
      const result = +n1 + +n2;
      res.set(headers).send(`${result}`);
    });

  router
    .route('/mpy/:n1/:n2')
    .get((req, res) => {
      const { n1, n2 } = req.params;
      const result = +n1 * +n2;
      res.set(headers).send(`${result}`);
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
        res.set({ ...headers, 'Content-Type': 'application/json' }).json({ result });
      } else {
        res.send(`Sum: ${result.sum}; Mpy: ${result.mpy}`);
      }
    });

  return router;
};
