const facts = require('./facts.json');

function getRandomFact(categoryId) {
  const category = facts.categories.find(c => c.id === categoryId);
  if (!category) return null;
  const random = Math.floor(Math.random() * category.facts.length);
  return { category: category.label, fact: category.facts[random] };
}

// Demo
facts.categories.forEach(cat => {
  const result = getRandomFact(cat.id);
  console.log(`[${result.category}] ${result.fact}`);
});
