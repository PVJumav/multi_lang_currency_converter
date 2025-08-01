#!/bin/bash

echo " Fetching exchange rates with Node.js..."
node ./node/fetchRates.js

echo " Preparing data with Python..."
python ./python/prepare_rates.py

echo "  Compiling C++ converter..."
g++ ./cpp/converter.cpp -o ./cpp/converter

echo " Running currency converter..."
./cpp/converter
