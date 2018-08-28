import packageJSON from './package-json';
import prettierRC from './prettierRC';
import sandboxConfig from './sandbox';
import babelrc from './babelrc';
import tsconfig from './tsconfig';
import babelTranspiler from './babel-transpiler';

const config = {
    babelrc,
    babelTranspiler,
    packageJSON,
    prettierRC,
    sandboxConfig,
    tsconfig,
};

export default config;