// throw => lançar

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

// tray => tentar / catch => capiturar

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')