module.exports = express => {
  const router = express.Router();

  router
    .route('/add/:n1/:n2')
    .get((req, res) => {
      const { n1, n2 } = req.params;
      const result = +n1 + +n2;
      const headers = {
        'Access-Allow-Control-Origin': 'http://kodaktor.ru'
      };
      if (req.headers['content-type'] === 'application/json') {
        res.set({
          ...headers,
          'Content-Type': 'application/json'
        }).send({ result });
      } else res.set(headers).send(`${result}`);
    });

  router
    .route('/mpy/:n1/:n2')
    .get((req, res) => {
      const { n1, n2 } = req.params;
      const result = +n1 * +n2;
      const headers = {
        'Access-Allow-Control-Origin': 'http://kodaktor.ru'
      };
      if (req.headers['content-type'] === 'application/json') {
        res.set({
          ...headers,
          'Content-Type': 'application/json'
        }).send({ result });
      } else res.set(headers).send(`${result}`);
    });

  return router;
};
