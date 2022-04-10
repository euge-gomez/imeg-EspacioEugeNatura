let goNow = true;

export const GoGet = (delay, tarea) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (goNow) {
                resolve(tarea);
            } else {
                reject('Error en la carga de productos')
            }
        }, delay);
    });
}
