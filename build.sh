rm -rf ./build

mkdir build
cd build
mkdir public
cd ..

cp -r ./src/back-end/ ./build
parcel build ./src/front-end/index.html --out-dir ./build/public/ --out-file index.html