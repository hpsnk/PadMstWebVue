//------------------------------------------------------
//
//------------------------------------------------------

export default {
    search: {
        monster: {
            param: {
                freeword            : undefined,
                mainAttr            : [],
                subAttr             : [],
                thirdAttr           : [],
                rare                : undefined,
                type                : [],
                typeCondAnd         : false,
                awakenSkill         : [],
                awakenSkillCondAnd  : false,
                collabo             : undefined,
                skillFreeword       : undefined,
                skillturn           : undefined,
                leaderskillFreeword : undefined,
                sortBy              : undefined,
                sortKbn             : undefined,
                start               : 0,
                length              : 10,
            },
            result: {
                pageSize: 10,
                currentPage: 1,
                total: 0,
                types: [],
                monsters: [],

            }
        }
    }
}
