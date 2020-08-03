module.exports = function(app) {

  // index route loads view.html
  app.get("/exercise", function(req, res) {
    res.json(path.join(__dirname, "../public/exercise.html"));
  });

  // cms route loads cms.html
  app.get("/index", function(req, res) {
    res.json(path.join(__dirname, "../public/index.html"));
  });

  // blog route loads blog.html
  app.get("/stats", function(req, res) {
    res.json(path.join(__dirname, "../public/stats.html"));
  });




}