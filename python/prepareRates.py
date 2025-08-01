# python/prepare_rates.py
import json

with open('./data/rates.json') as f:
    rates_data = json.load(f)

usd_to = rates_data["rates"]

# Write simplified format for C++
with open('./data/prepared_rates.txt', 'w') as out:
    for currency, rate in usd_to.items():
        out.write(f"{currency} {rate}\n")

print("✅ Rates formatted for C++")
