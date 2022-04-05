let goNow = true;

const GoGet = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (goNow) {
                resolve(task);
                console.log(goNow)
            } else {
                reject('Error en la carga de productos')
            }
        }, time);
    });
}

export default GoGet;