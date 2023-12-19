Installation Problem:
1.Could not find plugin “proposal-numeric-separator” 
Solution:
delete node_modules and package-lock.json
add "resolutions": { "@babel/preset-env": "^7.8.7" } to package.json before "dependencies": {}
npm install npm-force-resolutions --save-dev
npm install
npx npm-force-resolutions
npm install again
ionic build

2. plugin-proposal-numeric-separator not found
Solution:
npm install --save-dev @babel/plugin-proposal-numeric-separator

3.Error | Could not find plugin "proposal-numeric-separator" | Generating ES5 bundles
Solution:
"@babel/compat-data": "~7.8.0" to devDependencies.
