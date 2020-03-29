  
npm run build &&
git checkout gh-pages &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist;
git add -A :/ &&
git commit -m 'update' &&
git push