# test once with coverage
export NODE_ENV=common

# run tests once
./node_modules/.bin/nyc ./node_modules/.bin/ava

# cleanup
rm -rf ./.nyc_output