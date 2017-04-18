node_modules/.bin/md2html readme.md > docs/readme.html

sed "/<\!-- readme -->/r ./docs/readme.html" docs/template.html > docs/index.html

rm docs/readme.html
