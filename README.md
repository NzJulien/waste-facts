# 🗑️ waste-facts

A lightweight JSON dataset of waste sorting facts, designed for educational apps and games.

## Categories
- ♻️ Plastic
- 🍃 Organic
- 📄 Paper
- 🍶 Glass
- ☢️ Hazardous

## Usage

```js
const facts = require('./facts.json');
const plastic = facts.categories.find(c => c.id === 'plastic');
console.log(plastic.facts[0]);
```

## Structure

```
waste-facts/
├── facts.json      # Main dataset
├── index.js        # Demo script
└── README.md
```

Built with ❤️ by NzJulien
