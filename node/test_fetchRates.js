// testFetchRates.js
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../data/rates.json');

try {
  const data = fs.readFileSync(filePath, 'utf-8');
  const rates = JSON.parse(data);

  if (!rates.rates || typeof rates.rates !== 'object') {
    throw new Error('Missing or invalid "rates" field.');
  }

  console.log('✅ JSON file is valid and contains exchange rates for:', Object.keys(rates.rates).join(', '));
} catch (err) {
  console.error('❌ Validation failed:', err.message);
}
