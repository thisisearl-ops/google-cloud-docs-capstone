const fs = require('fs');
const content = fs.readFileSync('src/app/components/SkillsPage.tsx', 'utf8');

let stack = [];
let lineNum = 1;
for (let i = 0; i < content.length; i++) {
  if (content[i] === '\n') {
    lineNum++;
    continue;
  }
  
  if (content[i] === '<') {
    // Check if it's a comment
    if (content.substr(i, 4) === '<!--') {
      while(content.substr(i, 3) !== '-->') i++;
      continue;
    }
    
    // JSX comment
    if (content.substr(i, 4) === '{/*') {
      while(content.substr(i, 3) !== '*/}') i++;
      continue;
    }

    // Check if it's closing tag
    if (content[i+1] === '/') {
      let j = i + 2;
      let tagName = '';
      while (content[j] !== ' ' && content[j] !== '>') {
        tagName += content[j];
        j++;
      }
      if (stack.length === 0) {
        console.log(`Unmatched closing tag at line ${lineNum}: </${tagName}>`);
      } else {
        const top = stack.pop();
        if (top.tag !== tagName) {
          console.log(`Mismatch at line ${lineNum}: Expected </${top.tag}> but found </${tagName}>. Tag opened at line ${top.line}`);
        }
      }
      i = j;
    } else {
      let j = i + 1;
      let tagName = '';
      while (j < content.length && /[a-zA-Z0-9]/.test(content[j])) {
        tagName += content[j];
        j++;
      }
      
      if (!tagName) continue; // Not a real tag, e.g. `< ` or `<.`
      
      // self closing?
      let k = j;
      let selfClosing = false;
      while (k < content.length && content[k] !== '>') {
        if (content[k] === '/' && content[k+1] === '>') {
          selfClosing = true;
          break;
        }
        k++;
      }
      
      if (!selfClosing) {
        stack.push({tag: tagName, line: lineNum});
      }
      
      i = k;
    }
  }
}

if (stack.length > 0) {
  console.log('Unclosed tags:', stack);
} else {
  console.log('All tags matched.');
}
