#
# generate and post coverage
#
./node_modules/.bin/nyc ./node_modules/.bin/ava
./node_modules/.bin/nyc report --reporter=lcov > coverage.lcov &&
./node_modules/.bin/codecov -t "7f1f3a9d-1f29-4dcc-ab4c-c8869c35af6b" \
                            -p "." \
                            -X "gcov"

# cleanup
rm -rf ./.nyc_output
rm -rf ./coverage
rm coverage.lcov
