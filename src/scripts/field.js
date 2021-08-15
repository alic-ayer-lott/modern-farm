const myField = [];

export const addPlant = seed => {
    if (Array.isArray(seed)) {
        seed.forEach(s => myField.push(s))
    }
    else {
        myField.push(seed)
    }
}

export const usePlants = () => myField.slice()