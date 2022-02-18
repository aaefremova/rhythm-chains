const handsText = 'Руки';
const legsText = 'Ноги';

const staticTemplate = `
<div class="container">
    <div class="chain-container">
      <div class="hands">
        ${handsText}
      </div>
      <div class="legs">
        ${legsText}
      </div>
    </div>
  </div>
`;

const fillTemplate = (handSide, legSide) => {
  return `
    <div class="hands">
      ${handSide}
    </div>
    <div class="legs">
      ${legSide}
    </div>
  `;
};

const sideGenerator = () => {
  return Math.random() > 0.5 ? 'L' : 'R';
};

const generateChain = (numberPerBar = 4, numberOfBars = 4) => {
  const nodes = [];
  const count = numberPerBar * numberOfBars;

  for (let number = 0; number < count; number++) {
    const newNode = document.createElement('div');
    if ((number + 1) % numberPerBar === 0) {
      newNode.setAttribute('class', 'chain-container end-of-bar');
    } else {
      newNode.setAttribute('class', 'chain-container');
    }
    newNode.innerHTML = fillTemplate(sideGenerator(), sideGenerator());
    nodes.push(newNode);
  }

  return nodes;
}

const generateChains = (count) => {
  const nodes = [];

  for (let number = 0; number < count; number++) {
    const newNode = document.createElement('div');
    newNode.setAttribute('class', 'container');
    newNode.innerHTML = staticTemplate;
    newNode.append(...generateChain());
    nodes.push(newNode);
  }

  document.body.append(...nodes);
}

generateChains(10);