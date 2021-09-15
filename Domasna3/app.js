const express = require('express');
const app = express();

app.use(express.json());

let drzava = [
  {
    id: 5,
    ime: 'slovenija',
    jazik: 'slovenski'
  }
];

app.get('/drzava', (req, res) => {
  res.send(drzava);
})

app.post('/drzava', (req, res) => {
  drzava.push(req.body);
  res.send(drzava);
})

.patch('/drzava/:id', (req, res) => {
  drzava.forEach(promeni => {
    if (promeni.id == req.params.id) {
      if (req.body.ime) {
        promeni.ime = req.body.ime;
      }

      if (req.body.jazik) {
        promeni.jazik = req.body.jazik;
      }
    }
  });

  res.send(drzava);
})

app.put('/drzava/:id', (req, res) => {
  drzava.forEach(novoIme => {
    if (novoIme.id == req.params.id) {
      if (req.body.name) {
        novoIme.ime = req.body.ime;
      }
    }
  });
  res.send(drzava);
})

app.delete('/drzava/:id', (req, res) => {
  const filteredDrzava = drzava.filter(product => product.id != req.params.id);
  drzava = filteredDrzava;

  res.send(drzava);
})

app.listen('3003', () => {
  console.log('App started on port 3003...');
});