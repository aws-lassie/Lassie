const fs = require('fs');

const modFunc = (textFileString) => {
  // Find export line
  const exportLineRegEx = /\n(module.)?export/;
  const exportLineRegExResults = textFileString.match(exportLineRegEx);
  if (exportLineRegExResults === null) return console.log('No export line');
  const exportLineStartInd = exportLineRegExResults.index;

  // Find closing function brace
  const funcCloseBraceInd = getClosedBraceInd(textFileString, exportLineStartInd);
  if (funcCloseBraceInd === -1) return console.log('Could not find closing brace of export function, check code');

  // Add wrapper function (Lassie) w/ open paren after "="
  let funcAfterEqualInd = textFileString.indexOf('=', exportLineStartInd);
  if (funcAfterEqualInd === -1) return console.log('Could not find equal sign of export function, check code');
  if (textFileString[funcAfterEqualInd + 1] === ' ') funcAfterEqualInd += 1;

  // Add closing paren after closing brace
  const newTextFile = textFileString.slice(0, funcAfterEqualInd + 1) +
    'wrapper(' +
    textFileString.slice(funcAfterEqualInd + 1, funcCloseBraceInd + 1) +
    ')' +
    textFileString.slice(funcCloseBraceInd + 1);

  return newTextFile;
};

const getClosedBraceInd = (text, startInd) => {
  let depth = 0;
  for (let ind = startInd; ind < text.length; ind += 1) {
    if (text[ind] === '{') depth += 1;
    else if (text[ind] === '}') {
      depth -= 1;
      if (depth === 0) return ind;
    }
  }
  return -1;
};

const lambdaModFuncHandler = (userInput) => {
  const someFile = userInput.lambdaFuncFilename;
  const someNewFile = userInput.newLambdaFuncFilename;

  const lassieInjectionFileName = 'lassieInjection.js';
  const lassieInjectionFullFileName = __dirname + '/' + lassieInjectionFileName;

  const curFileText = fs.readFileSync(someFile, 'utf8');
  const lassieFileText = fs.readFileSync(lassieInjectionFullFileName, 'utf8');
  const result = lassieFileText + modFunc(curFileText);
  fs.writeFileSync(someNewFile, result, 'utf8');
};

module.exports = ('deleteLambda', lambdaModFuncHandler);
