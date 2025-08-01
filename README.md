# Multi-Language Currency Converter

A simple cross-language currency converter that reads exchange rates from a shared `rates.json` file and performs currency conversion using a C++ backend.

## Project Structure

multi-lang-currency-converter/
├── cpp/
│   └── converter.cpp
├── data/
│   └── rates.json

## Features

- Converts between 30+ major currencies
- Reads exchange rates from a local JSON file
- Displays formatted conversion results
- Designed for multi-language expansion (Node.js, Python)

## Prerequisites

- C++ compiler (e.g. `g++`)
- [nlohmann/json](https://github.com/nlohmann/json) header-only library
- Git (optional, for version control)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/multi-lang-currency-converter.git
cd multi-lang-currency-converter

## Build the converter
cd cpp
g++ converter.cpp -o converter

## Run
./converter
 ## output:
Available currencies: AUD BGN BRL CAD CHF CNY CZK DKK EUR GBP HKD HUF IDR ILS INR ISK JPY KRW MXN MYR NOK NZD PHP PLN RON SEK SGD THB TRY ZAR 

Enter amount: 20
From currency (e.g., USD): AUD
To currency (e.g., EUR): ZAR

20.0000 AUD = 233.5224 ZAR
