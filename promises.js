const sleep = (ms) => {
    return new Promise(resolve,reject => {
        setTimeout(() => reject(), ms);
    });
};

sleep(1000).then(() => console.log('on fulfilled'));
