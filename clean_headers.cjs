const fs = require('fs');
const path = require('path');

const screensDir = path.join(__dirname, 'src', 'screens');
const files = fs.readdirSync(screensDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(screensDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip <Header /> component and its import
  content = content.replace(/<Header\s*\/>\n?/g, '');
  content = content.replace(/import\s+Header\s+from\s+[^;]+;\n?/g, '');
  
  // Strip <header>...</header> tags using robust regex
  // \s*\{\/\*\s*Top (Navigation|AppBar)\s*\*\/\}\s*
  content = content.replace(/(\{\/\*.*?(Navigation|AppBar).*?\*\/\}\s*)?<header[\s\S]*?<\/header>\n?/g, '');

  fs.writeFileSync(filePath, content);
  console.log(`Cleaned ${file}`);
});
