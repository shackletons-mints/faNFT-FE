const hash = string => {
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        result += string.charCodeAt(i)
    }
    return result
}

export const determineElement = (address) => {
    const addressHash = hash(address)

    if (addressHash % 100 > 80) {
        return 'element_five'
    }
    if (addressHash % 100 > 60) {
        return 'element_four'
    }
    if (addressHash % 100 > 40) {
        return 'element_three'
    }
    if (addressHash % 100 > 20) {
        return 'element_two'
    }
    if (addressHash) {
        return 'element_one'
    }

}
