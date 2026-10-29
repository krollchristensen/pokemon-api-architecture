// Uventede fejl og fejl fra eksterne tjenester ender her.
function errorHandler(err, req, res, next) {
  console.error('API-fejl:', err.message);
  const status = err.status || 500;
  res.status(status).json({
    error: status === 404 ? 'Pokémon findes ikke' :
           status === 502 ? 'Det eksterne API kunne ikke levere data' :
           'Der opstod en serverfejl'
  });
}
module.exports = errorHandler;
