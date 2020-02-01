const express = require("express");
const postModel = require("./post-model");

const router = express.Router({
  mergeParams: true
});

router.get("/", async (req, res, next) => {
  try {
    const { id } = req.params;
    const posts = await postModel.find(id);

    res.json(posts);
  } catch {
    next(err);
  }
});

module.exports = router;
