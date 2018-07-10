import actions from './actions';
import mutations from './mutations';
export default {
    state: JSON.parse(sessionStorage.getItem('user')) || {},
    actions: actions,
    mutations: mutations,
};
