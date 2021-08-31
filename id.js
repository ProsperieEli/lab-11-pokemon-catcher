export function findById(data, id) {

    for (let poke of data) {
        if (poke.id === id) {
            return poke;
        }
    }
}