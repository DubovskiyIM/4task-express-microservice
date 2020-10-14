module.exports = express => {
  const router = express.Router();

  router
    .route('/add/:n1/:n2')
    .get((req, res) => {
      const { n1, n2 } = req.params;
      const result = +n1 + +n2;
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET'
      };
      res.set(headers);
      if (req.headers['content-type'] === 'application/json') {
        res.set({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET',
          'Content-Type': 'application/json'
        }).send({ result });
      } else res.send(`${result}`);
    });

  router
    .route('/mpy/:n1/:n2')
    .get((req, res) => {
      const { n1, n2 } = req.params;
      const result = +n1 * +n2;
      const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET'
      };
      res.set(headers);
      if (req.headers['content-type'] === 'application/json') {
        res.set({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'GET',
          'Content-Type': 'application/json'
        }).send({ result });
      } else res.send(`${result}`);
    });

  return router;
};
