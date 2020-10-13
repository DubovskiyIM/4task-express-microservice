module.exports = express => {
  const router = express.Router();

  router
    .route('/add/:n1/:n2')
    .get((req, res) => {
      const { n1, n2 } = req.params;
      const result = +n1 + +n2;
      if (req.headers['content-type'] === 'application/json') {
        res.send({
          'result': result
        });
      } else res.send(`${result}`);
    });

  router
    .route('/mpy/:n1/:n2')
    .get((req, res) => {
      const { n1, n2 } = req.params;
      const result = +n1 * +n2;
      if (req.headers['content-type'] === 'application/json') {
        res.send({
          'result': result
        });
      } else res.send(`${result}`);
    });

  return router;
};
