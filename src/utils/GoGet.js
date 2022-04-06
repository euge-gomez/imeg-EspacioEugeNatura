import Productos from '../utils/Products';

let goNow = true;

export const GoGet = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (goNow) {
                resolve(Productos[0]);
            } else {
                reject('Error en la carga de productos')
            }
        }, 2000);
    });
}
