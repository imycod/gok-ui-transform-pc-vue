import remove from "lodash/remove"
import cloneDeep  from 'lodash/cloneDeep';

const requireModule = require.context('./', false, /(.*?)\.(js)$/)
const moduleArrays=requireModule.keys()

const targetFileModules=remove(cloneDeep(moduleArrays),(files)=>files!=='./index.js')

let exportModules={}
targetFileModules.forEach((fileName) =>  exportModules = requireModule(fileName))

export default exportModules
