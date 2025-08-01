// fetchRates.js
const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://api.frankfurter.app/latest?from=USD';

// Step 1: Make HTTPS request to the API
https.get(url, (res) => {
  let data = '';

  // Step 2: Collect chunks of data
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Step 3: Once response is complete
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(data);

      // Step 4: Resolve the correct file path
      const outputPath = path.resolve(__dirname, '../data/rates.json');

      // Step 5: Save to rates.json
      fs.writeFileSync(outputPath, JSON.stringify(parsedData, null, 2));
      console.log('Exchange rates successfully written to ../data/rates.json');
    } catch (err) {
      console.error('Error parsing or writing data:', err.message);
    }
  });
}).on('error', (err) => {
  console.error('HTTPS request error:', err.message);
});
