const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// POST feedback
router.post('/', (req, res) => {
    console.log(req.body);
    const feeling = req.body.feeling;
    const understanding = req.body.understanding;
    const support = req.body.support;
    const comments = req.body.comments;

    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4)`;

    pool.query(sqlText, [feeling, understanding, support, comments])
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(`Error making database query: ${sqlText}, with error: ${error}`);
            res.sendStatus(500);
        });
});

// PUT feedback
// router.put('/:id', (req, res) => {
//     console.log('req.params in PUT: ', req.params);
//     let queryText = `UPDATE "feedback" SET "$1" = "$2" WHERE "id" = $3;`;
//     pool.query(queryText, [req.params.type, req.params.feedback, req.params.id])
//     .then(() => {
//         res.sendStatus(200);
//     })
//     .catch((error) => {
//         console.log('error with PUT request to db: ', error);
//         res.sendStatus(500);
//     })
// });

module.exports = router;