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
  postInventory: (req, res) => {
    // const db = req.app.get("db")
    // db.post_inventory([req.params.shelf, bin, name, price, img])
  }
};
