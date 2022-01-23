const express = require('express');
const app = express();
const port = 5000;
const api = require('./api')

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/votos-provincia/', api.getEntries);
app.get('/caba-results/', api.getCabaResults);
app.get('/caba-section-results/', api.getCabaSectionResults);
app.get('/non-positive-results/', api.getNonPositive);
app.get('/electors-and-votes/', api.getTableElectorsAndVotes);
app.get('/caba-positions/', api.getCabaPositions);
app.get('/caba-agrupation-results/', api.getCabaAgrupationResults);
app.get('/caba-votes-for-agrupations/', api.getTotalVotesForAgrupations);
app.get('/caba-agrupations-percentages-per-section/', api.getCabaAgrupationPercentagesPerSection);
app.get('/caba-results-agr/', api.getCabaResultsByAgr);
app.get('/tipo-votos/', api.getTipoVotos);
app.get('/votos-posneg/', api.getVotosPosNeg);
app.get('/fecha/', api.getFecha);


// -------------------------------------------------------------------------

app.get('/votos/', api.getVotos);
app.get('/cargos/:id?', api.getCargos);
app.get('/agrupaciones/:id?', api.getAgrupaciones);
app.get('/mesas/:id?', api.getMesas);
app.get('/secciones/:id?', api.getSecciones);
app.get('/distritos/:id?', api.getDistritos);
app.get('/tiposVoto/:id?', api.getTiposVoto);


// -------------------------------------------------------------------------


app.listen(port, () => {
  console.log('Elections app is running on port ' + port);
});
