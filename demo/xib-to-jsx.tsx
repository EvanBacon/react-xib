import { toString } from './InterfaceBuilder';
import { getTemplateAsync } from './splashTemplate';

function deepCopyObjectConvertingKey(obj: any, transformKey: (key: string, value: any) => string) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepCopyObjectConvertingKey(item, transformKey));
    }

    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[transformKey(key, obj[key])] = deepCopyObjectConvertingKey(obj[key], transformKey);
        }
    }
    return newObj;
}

function upperFirst(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

(async () => {
    const obj = await getTemplateAsync();

    // iterate XML and convert to uppercase.
    // recursively iterate object and convert keys to uppercase
    console.log(toString(deepCopyObjectConvertingKey(obj, (k, v) => {
        if (Array.isArray(v) || (typeof v === 'object' && '$' in v)) {
            return upperFirst(k)
        }
        return k;
    })))
})()