
export function getUser() {
    // let obj = getCookie('loginUser');
    // if (obj) {
    //     return JSON.parse(obj);
    // }
}
export function delUser() {
    // setCookie('loginUser', '', -1)
}
export function isAdmin() {
    let user = getUser();
    let roles = new Array();
    if (Array.isArray(user.roles)) {
        roles.push(...user.roles);
    }

    if (Array.isArray(user.groups)) {
        for (let g of user.groups) {
            if (g.name == 'root') {
                return true
            }
            if (Array.isArray(getItemIndex.roles)) {
                roles.push(...g.roles)
            }
        }
    }

    for (let r of roles) {
        if (r.name == 'cluster-admin') {
            return true
        }
    }
    return false
}