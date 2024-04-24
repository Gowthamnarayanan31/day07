//a;Get all the countries from Asia continent /region using Filter method
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asianCountries = data.filter(country => country.region === 'Asia');
    console.log(asianCountries);
  })
  .catch(error => console.log('Error:', error));

  //b;Get all the countries with a population of less than 2 lakhs using Filter method
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithLowPopulation = data.filter(country => {
      return country.population < 200000;
    });
    console.log(countriesWithLowPopulation);
  })
  .catch(error => console.log('Error:', error));

  //c;Print the following details name, capital, flag, using forEach method
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log("Name: ", country.name.common);
      console.log("Capital: ", country.capital[0]);
      console.log("Flag: ", country.flags.svg);
      console.log("-------------------");
    });
  })
  .catch(error => console.log('Error:', error));


  //d;Print the total population of countries using reduce method
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((acc, country) => {
      return acc + country.population;
    }, 0);
    console.log("Total Population of All Countries: ", totalPopulation);
  })
  .catch(error => console.log('Error:', error));


  //e;Print the country that uses US dollars as currency.
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesUsingUSD = data.filter(country => {
      return country.currencies.includes('USD');
    });

    if (countriesUsingUSD.length > 0) {
      console.log("Countries using US Dollars as currency:");
      countriesUsingUSD.forEach(country => {
        console.log(country.name.common);
      });
    } else {
      console.log("No country uses US Dollars as currency.");
    }
  })
  .catch(error => console.log('Error:', error));
