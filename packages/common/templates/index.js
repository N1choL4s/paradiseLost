import vue from './vue';
import react from './react';

export {
    vue,
    react,
};

export default function getDefinition(
 theme:
     | 'vue-cli'
     | 'create-react-app'
){
    switch (theme) {
        case vue.name:
            return vue;
        case react.name:
            return react;
        default:
            return react;
    }
}