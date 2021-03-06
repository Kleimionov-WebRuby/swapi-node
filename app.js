const express = require('express');
const Swapi = require('./swapi');

const app = express();
const swapi = new Swapi();

app.get('/people/', async (req, res) => {
  swapi.url = '/people/';

  const people = await swapi.getPeople();

  res.status(200).send(people);
});

app.get('/person/:id', async (req, res) => {
  const personId = req.params.id;

  swapi.url = `/people/${personId}`;

  const person = await swapi.getPersonById();

  res.status(200).send(person);
});

app.get('/personByName/:name', async (req, res) => {
  const name = req.params.name;

  swapi.url = `/people?search=${name}`;

  const person = await swapi.getPersonByName();

  res.status(200).send(person);
});

app.get('/planets', async (req, res) => {
  swapi.url = '/planets/';

  const planets = await swapi.getPlanets();

  res.status(200).send(planets);
});

app.get('/planet/:id', async (req, res) => {
  const planetId = req.params.id;

  swapi.url = `/planets/${planetId}`;

  const planet = await swapi.getPlanetById();

  res.status(200).send(planet);
});

app.listen(4000, () => console.log('App is listening on port 4000!'));
