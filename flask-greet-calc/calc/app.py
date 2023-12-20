# Put your app in here.
from flask import Flask, request
from operations import add, sub, mult, div

app = Flask(__name__)

# @app.route('/search')
# def search():
#     term = request.args["term"]
#     sort = request.args["sort"]

# ***/add***   Adds ***a*** and ***b*** and returns result as the body.

# ***/sub***   Same, subtracting ***b*** from ***a***.

# ***/mult***   Same, multiplying ***a*** and ***b***.

# ***/div***   Same, dividing ***a*** by ***b***.

@app.route('/add')
def add():
    """add a+b params"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = add(a,b)

    return str(result)

@app.route('/sub')
def sub():
    """subtract a+b params"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = sub(a,b)

    return str(result)

@app.route('/mult')
def mult():
    """multiply a+b params"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = mult(a,b)

    return str(result)

@app.route('/div')
def div():
    """divide a+b params"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = div(a,b)

    return str(result)

operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div
}

@app.route('math/<oper>')
def do_math(oper):
    """takes the operators dict and performs the corresponding math function on a+b"""
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    result = operators[oper](a, b)

    return str(result)

