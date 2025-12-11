const express = require("express");
const router = express.Router();
const db = require("./db");

// Fetch all contacts
router.get("/contacts", (req, res) => {
  db.query("SELECT * FROM contacts", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Add contact
router.post("/contacts", (req, res) => {
  const { name, email, phone } = req.body;
  const sql = "INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)";
  db.query(sql, [name, email, phone], (err, result) => {
    if (err) throw err;
    res.json({ message: "Contact added", id: result.insertId });
  });
});

// Delete contact
router.delete("/contacts/:id", (req, res) => {
  const sql = "DELETE FROM contacts WHERE id=?";
  db.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.json({ message: "Contact deleted" });
  });
});

module.exports = router;
