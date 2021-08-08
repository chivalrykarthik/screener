const search = {
    '>': (a, b) => (parseFloat(a) > parseFloat(b)),
    '>=': (a, b) => (parseFloat(a) >= parseFloat(b)),
    '<': (a, b) => (parseFloat(a) < parseFloat(b)),
    '<=': (a, b) => (parseFloat(a) <= parseFloat(b)),
    '!=': (a, b) => (parseFloat(a) != parseFloat(b)),
    '==': (a, b) => (parseFloat(a) == parseFloat(b)),
    'GT': (a, b) => (parseFloat(a) >= parseFloat(b)),
    'LT': (a, b) => (parseFloat(a) <= parseFloat(b)),
    'GTA': (a, b) => (parseFloat(a) >= parseFloat(b)),
    'LTA': (a, b) => (parseFloat(a) <= parseFloat(b)),
}

export default search