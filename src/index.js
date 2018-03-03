// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = () => `__proto__`;

const createProtoMagicObject = () => {
    class magicObj {
    }
    magicObj.__proto__ = magicObj.prototype;
    return magicObj
};

class Increm{
    constructor(){
        this.counter = 0;
        this.incrementor = this.incrementor.bind(this);
        this.incrementor.valueOf = () => this.counter
    }
    incrementor(){
        this.counter++;
        return this.incrementor
    }
}

const incrementor = new Increm().incrementor;

const inc = () => {
    let c = 0;
    const count = () => new Promise(resolve =>  {
        return resolve(c++)
    });
    setTimeout(count, 0);
    return count
};

const asyncIncrementor = inc();

const createIncrementer = function* (){
    let index = 0;
    while(true)
        yield ++index;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (x) =>  new Promise(resolve => {
        setTimeout(() => resolve(x), 1021)
    });

const getDeepPropertiesCount = (obj, count = 0) => {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            count++;
            if (typeof obj[property] === "object") {
                count += getDeepPropertiesCount(obj[property]);
            }
        }
    }
    return count
};

const createSerializedObject = () => null;
const toBuffer = () => {};
const sortByProto = (arr) => {
    const deep = (x, count = 1) => {
        const y = x.__proto__;
        if(y !== null){
            count++;
            return deep(y, count)
        }
        return count
    };
    return arr.sort((a, b) => deep(b) - deep(a));
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;