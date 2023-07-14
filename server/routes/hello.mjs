import express from "express";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  res.send("Eman").status(200);
});

export default router;