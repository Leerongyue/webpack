npm run build && 
git checkout newBranch &&
rm -rf *.html *.js *.css *.png *.json &&
mv dist/* ./ &&
rm -rf dist
git add . &&
git commit -m 'update' &&
git push &&
git checkout -
