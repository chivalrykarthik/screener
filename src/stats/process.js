const fs = require('fs');
const util = require('util');
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const path = './../../public/points';

/*
 Handle async operations
*/
const handlePromise = async (fn, ...params) => {
    try {
        const res = await fn(...params)
        return res;
    } catch (e) {
        console.log("Error:" + e.message)
    }
}

/*
 Read all the directories from given path
*/
const readAllDir = async (dir) => {
    try {
        const list = await handlePromise(readdir, dir);
        return list;
    } catch (e) {
        console.log("Error in readAllDir")
    }
};

const processData = (dt) => {
    const tmpData = dt.split('\n').slice(1);
    let [, , , , startingPrice] = tmpData[0].split(',');
    let [, , , , endPrice] = tmpData[tmpData.length - 2].split(',');
    startingPrice = Number(startingPrice.replace(/"/g, '').trim());
    endPrice = Number(endPrice.replace(/"/g, '').trim());
    return Number(((endPrice - startingPrice) / startingPrice) * 100).toFixed(2);
}

/*
 Read data from list of files
*/
const readFilerecursive = async (files, dir, index = 0) => {
    try {
        if (files.length <= index) return [];
        const filePath = dir + '/' + files[index];
        const data = await handlePromise(readFile, filePath, 'utf8');
        const result = {
            [files[index]]: processData(data),
            ...(await readFilerecursive(files, dir, index + 1))
        }

        return result;
    } catch (e) {
        console.log("Error in readFilerecursive:" + e.message);
    }
}

/*
 Read all the files from list of directories
*/
const readDirRecursive = async (dirList, index = 0) => {
    try {
        if (dirList.length <= index) return [];
        const newPath = path + '/' + dirList[index];
        const files = await handlePromise(readdir, newPath);
        const result = {
            [dirList[index]]: await readFilerecursive(files.sort((a, b) => a - b), newPath),
            ...(await readDirRecursive(dirList, index + 1))
        };

        return result;
    } catch (e) {
        console.log("Error in readDirRecursive")
    }
};

/*
 Write data in to JSON
*/
const writeData = async (dt) => {
    try {
        const res = await handlePromise(writeFile, './data.json', JSON.stringify(dt), 'utf8');
        return "Success";
    } catch (e) {
        console.log("Error in writeData:" + e.message);
    }

}
const process = async () => {
    const dirList = await readAllDir(path);
    const result = await readDirRecursive(dirList);
    const status = await writeData(result);
    console.log(status);
};

process();
