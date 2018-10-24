module.exports = {
  getShelf: (req, res) => {
    const db = req.app.get("db");
    db.get_shelf(req.params.shelf)
      .then(shelf => {
        res.status(200).send(shelf);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  getItem: (req, res) => {
    const db = req.app.get("db");
    db.get_item(req.params.id)
      .then(item => {
        res.status(200).send(item);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  postInventory: (req, res, next) => {
    const db = req.app.get("db");
    const { name, price, img, bin } = req.body;
    db.get_all_from_shelf([req.params.shelf]).then(shelf => {
      console.log(shelf);
      return function findBin(shelf) {
        let i = 0;
        while (i < Infinity) {
          i++;

          if (shelf[i - 1] === i) {
            continue;
          } else {
            return i;
          }
        } 
        db.post_inventory([req.params.shelf, findBin(bin), name, price, img])
          .then(() => {
            res.sendStatus(200);
          })
          .catch(err => {
            console.log(err);
            res.status(500).send(err);
          });
      };
    });
  },

  deleteItem: (req, res) => {
    const db = req.app.get("db");
    db.delete_item(req.params.id)
      .then(products => {
        res.status(200).send(products);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  },

  updateBin: (req, res) => {
    const db = req.app.get("db");
    const { name, price } = req.body;
    db.update_bin([req.params.id, name, price])
      .then(item => {
        res.status(200).send(item);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
