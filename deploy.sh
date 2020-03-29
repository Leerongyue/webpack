npm run build &&
git checkout gh-pages &&
rm -rf *.html *.js *.css *.png *.sh &&
mv dist/* ./ ;
git add . &&
git commit -m 'update' &&
git push && 
git checkout master;