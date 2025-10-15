const methods = iface => {
    return Object.entries(iface).filter(([key, value]) => typeof(value) === 'function').map(([key, func]) => [key, func.length]);
}
const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};
console.log(methods(iface));