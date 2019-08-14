export function logarTempoDeExecucao(emSegundos: boolean = false) {

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        
        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]) {

            let unidade = `ms`;
            let divisor = 1;

            if(emSegundos) {
                unidade = `s`;
                divisor = 1000;
            }

            console.log(`-----------------`);
            console.log(`Parâmetros passados no método são ${propertyKey}: ${JSON.stringify(args)}`);
            let t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            let t2 = performance.now();
            console.log(`O retorno do método ${propertyKey} é ${JSON.stringify(retorno)}`);
            console.log(`O método ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
            return retorno;
        }

        return descriptor;
    }
}