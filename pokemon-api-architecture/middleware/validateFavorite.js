// Den samme validering kan genbruges til både POST og PUT.
function validateFavorite(req, res, next) {
  const { name, note } = req.body || {};
  if (typeof name !== 'string' || !name.trim() ||
      (note !== undefined && typeof note !== 'string')) {
    return res.status(400).json({ error: 'name skal være tekst; note skal være tekst hvis angivet' });
  }
  next();
}
module.exports = validateFavorite;
