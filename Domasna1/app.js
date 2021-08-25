const cities = [
    {
      name: 'Skopje',
      population: '6000000'
    },
    {
      name: 'Barcelona',
      population: '9000000'
    },
    {
      name: 'Bilbao',
      population: '30000000'
    }
  ];
  
  let minPopulation = Infinity;
  let nameOfCityMinPopulation = '';
  
  cities.forEach(city => {
    if (parseInt(city.population) < minPopulation) {
      minPopulation = city.population;
      nameOfCityMinPopulation = city.name;
    }
  });
  
 
  console.log('With population of: ' + minPopulation);
  console.log('City with smallest amount of stupid people is: ' + nameOfCityMinPopulation);