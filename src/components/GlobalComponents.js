// ------------------------------------
// GlobalComponents
// ------------------------------------
import CompIconMonster         from './monster/IconMonster.vue';
import CompIconAwaken          from './monster/IconAwaken.vue';

import CompSearchAttr          from './search/SearchAttr.vue';
import CompSearchAwakenSkill   from './search/SearchAwakenSkill.vue';
import CompSearchCollabo       from './search/SearchCollabo.vue';
import CompSearchRare          from './search/SearchRare.vue';
import CompSearchType          from './search/SearchType.vue';
import CompSearchSkill         from './search/SearchSkill.vue';
import CompSearchLeaderSkill   from './search/SearchLeaderSkill.vue';

import CompSearchCondition     from './search/SearchCondition.vue';
import CompSearchResult        from './search/SearchResult.vue';
import CompSearchResultMini    from './search/SearchResultMini.vue';
import CompSearchResultNormal  from './search/SearchResultNormal.vue';

import CompMonsterSearch       from './MonsterSearch.vue';

import CompTeam1P              from "./team/Team1P.vue";

export default {
    install(Vue) {
        Vue.component('CompIconMonster',              CompIconMonster);
        Vue.component('CompIconAwaken',               CompIconAwaken);

        Vue.component('CompSearchAttr',               CompSearchAttr);
        Vue.component('CompSearchAwakenSkill',        CompSearchAwakenSkill);
        Vue.component('CompSearchCollabo',            CompSearchCollabo);
        Vue.component('CompSearchRare',               CompSearchRare);
        Vue.component('CompSearchType',               CompSearchType);
        Vue.component('CompSearchSkill',              CompSearchSkill);
        Vue.component('CompSearchLeaderSkill',        CompSearchLeaderSkill);
        
        Vue.component('CompSearchCondition',          CompSearchCondition);
        Vue.component('CompSearchResult',             CompSearchResult);
        Vue.component('CompSearchResultMini',         CompSearchResultMini);
        Vue.component('CompSearchResultNormal',       CompSearchResultNormal);
        
        Vue.component('CompMonsterSearch',            CompMonsterSearch);

        Vue.component('CompTeam1P',                   CompTeam1P);

    }
}
