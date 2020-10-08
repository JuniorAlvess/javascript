const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

/** 
 * diferente do var, let tem escopo de função e por isso os valores impressos 
 * abaixo serão examente o que está sendo pedido
*/ 
funcs[2]()
funcs[8]()