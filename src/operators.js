const search = {
    '>': (a, b) => (parseFloat(a) > parseFloat(b)),
    '>=': (a, b) => (parseFloat(a) >= parseFloat(b)),
    '<': (a, b) => (parseFloat(a) < parseFloat(b)),
    '<=': (a, b) => (parseFloat(a) <= parseFloat(b)),
    '!=': (a, b) => (parseFloat(a) != parseFloat(b)),
    '==': (a, b) => (parseFloat(a) == parseFloat(b)),
}

export default search