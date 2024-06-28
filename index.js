// Fetch data from the API using promises and handle the response
document.addEventListener('DOMContentLoaded', () => {
    fetchDataAndDisplay();
  });
  
  /**
   * Fetch data from the COVID Tracking API and display on the webpage
   */
  function fetchDataAndDisplay() {
    const apiURL = 'https://api.covidtracking.com/v1/us/daily.json';
  
    fetch(apiURL)
      .then(response => response.json())
      .then(data => displayCOVIDData(data))
      .catch(error => console.error('Error fetching data:', error));
  }
  
  /**
   * Display COVID data on the webpage
   * @param {Array} data - Array of COVID data objects
   */
  function displayCOVIDData(data) {
    const covidDataContainer = document.getElementById('covid-data');
    covidDataContainer.innerHTML = '';
  
    data.forEach(record => {
      const covidCard = createCOVIDCard(record);
      covidDataContainer.appendChild(covidCard);
    });
  }
  
  /**
   * Create a Bootstrap card element for a COVID data record
   * @param {Object} record - COVID data object
   * @returns {HTMLElement} - Bootstrap card element
   */
  function createCOVIDCard(record) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-4';
  
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card covid-card';
  
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';
  
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = `Date: ${formatDate(record.date)}`;

    const cardStates = document.createElement('p');
    cardStates.className = 'card-text';
    cardStates.textContent = `States: ${record.states}`;
  
    const cardPositive = document.createElement('p');
    cardPositive.className = 'card-text';
    cardPositive.textContent = `Positive Cases: ${record.positive}`;
  
    const cardNegative = document.createElement('p');
    cardNegative.className = 'card-text';
    cardNegative.textContent = `Negative: ${record.negative}`;

    const cardPending = document.createElement('p');
    cardPending.className = 'card-text';
    cardPending.textContent = `Pending: ${record.pending}`;

    const cardHospitalizedCurrently = document.createElement('p');
    cardHospitalizedCurrently.className = 'card-text';
    cardHospitalizedCurrently.textContent = `HospitalizedCurrently: ${record.hospitalizedCurrently}`;

    const cardHospitalizedCumulative = document.createElement('p');
    cardHospitalizedCumulative.className = 'card-text';
    cardHospitalizedCumulative.textContent = `HospitalizedCumulative: ${record.hospitalizedCumulative}`;

    const cardInIcuCurrently = document.createElement('p');
    cardInIcuCurrently.className = 'card-text';
    cardInIcuCurrently.textContent = `InIcuCurrently: ${record.inIcuCurrently}`;

    const cardOnVentilatorCurrently = document.createElement('p');
    cardOnVentilatorCurrently.className = 'card-text';
    cardOnVentilatorCurrently.textContent = `OnVentilatorCurrently: ${record.onVentilatorCurrently}`;

    const cardOnVentilatorCumulative = document.createElement('p');
    cardOnVentilatorCumulative.className = 'card-text';
    cardOnVentilatorCumulative.textContent = `OnVentilatorCumulative: ${record.onVentilatorCumulative}`;

    const cardDateChecked = document.createElement('p');
    cardDateChecked.className = 'card-text';
    cardDateChecked.textContent = `DateChecked: ${record.dateChecked}`;

    const cardDeath = document.createElement('p');
    cardDeath.className = 'card-text';
    cardDeath.textContent = `Death: ${record.death}`;

    const cardHospitalized = document.createElement('p');
    cardHospitalized.className = 'card-text';
    cardHospitalized.textContent = `Hospitalized: ${record.hospitalized}`;

    const cardTotalTestResults = document.createElement('p');
    cardTotalTestResults.className = 'card-text';
    cardTotalTestResults.textContent = `TotalTestResults: ${record.totalTestResults}`;

    const cardLastModified = document.createElement('p');
    cardLastModified.className = 'card-text';
    cardLastModified.textContent = `LastModified: ${record.lastModified}`;

    const cardRecovered = document.createElement('p');
    cardRecovered.className = 'card-text';
    cardRecovered.textContent = `Recovered: ${record.recovered}`;

    const cardTotal = document.createElement('p');
    cardTotal.className = 'card-text';
    cardTotal.textContent = `Total: ${record.total}`;

    const cardPosNeg = document.createElement('p');
    cardPosNeg.className = 'card-text';
    cardPosNeg.textContent = `PosNeg: ${record.posNeg}`;

    const cardDeathIncrease = document.createElement('p');
    cardDeathIncrease.className = 'card-text';
    cardDeathIncrease.textContent = `DeathIncrease: ${record.deathIncrease}`;

    const cardHospitalizedIncrease = document.createElement('p');
    cardHospitalizedIncrease.className = 'card-text';
    cardHospitalizedIncrease.textContent = `HospitalizedIncrease: ${record.hospitalizedIncrease}`;

    const cardNegativeIncrease = document.createElement('p');
    cardNegativeIncrease.className = 'card-text';
    cardNegativeIncrease.textContent = `NegativeIncrease: ${record.negativeIncrease}`;

    const cardPositiveIncrease = document.createElement('p');
    cardPositiveIncrease.className = 'card-text';
    cardPositiveIncrease.textContent = `PositiveIncrease: ${record.positiveIncrease}`;

    const cardTotalTestResultsIncrease = document.createElement('p');
    cardTotalTestResultsIncrease.className = 'card-text';
    cardTotalTestResultsIncrease.textContent = `TotalTestResultsIncrease: ${record.totalTestResultsIncrease}`;

    const cardHash = document.createElement('p');
    cardHash.className = 'card-text';
    cardHash.textContent = `Hash: ${record.Hash}`;

  
    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardStates);
    cardBodyDiv.appendChild(cardPositive);
    cardBodyDiv.appendChild(cardNegative);
    cardBodyDiv.appendChild(cardPending);
    cardBodyDiv.appendChild(cardHospitalizedCumulative);
    cardBodyDiv.appendChild(cardHospitalizedCurrently);
    cardBodyDiv.appendChild(cardInIcuCurrently);
    cardBodyDiv.appendChild(cardOnVentilatorCurrently);
    cardBodyDiv.appendChild(cardOnVentilatorCumulative);
    cardBodyDiv.appendChild(cardDateChecked);
    cardBodyDiv.appendChild(cardDeath);
    cardBodyDiv.appendChild(cardHospitalized);
    cardBodyDiv.appendChild(cardTotalTestResults);
    cardBodyDiv.appendChild(cardLastModified);
    cardBodyDiv.appendChild(cardRecovered);
    cardBodyDiv.appendChild(cardTotal);
    cardBodyDiv.appendChild(cardPosNeg);
    cardBodyDiv.appendChild(cardDeathIncrease);
    cardBodyDiv.appendChild(cardHospitalizedIncrease);
    cardBodyDiv.appendChild(cardNegativeIncrease);
    cardBodyDiv.appendChild(cardPositiveIncrease);
    cardBodyDiv.appendChild(cardTotalTestResultsIncrease);
    cardBodyDiv.appendChild(cardHash);
    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);
  
    return colDiv;
  }
  
  /**
   * Format date from YYYYMMDD to readable format
   * @param {number} date - Date in YYYYMMDD format
   * @returns {string} - Formatted date string
   */
  function formatDate(date) {
    const year = Math.floor(date / 10000);
    const month = Math.floor((date % 10000) / 100);
    const day = date % 100;
    return `${month}/${day}/${year}`;
  }