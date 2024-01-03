from flask import Flask, render_template, request, jsonify, session
from flask_debugtoolbar import DebugToolbarExtension
from boggle import Boggle

"""DISCLAIMER: I HAVE NO IDEA HOW TO ACTUALLY PLAY THIS GAME. ACTUAL GAME FUNCTIONALITY IS SUBJECT TO DEBATE, BUT ALL TESTS PASSED, WHICH IS THE POINT OF THE EXERCISE.
THE AUTHOR DOES NOT WANT TO KNOW ANYTHING ABOUT BOGGLE OR SO MUCH AS HEAR THE WORD BOGGLE FOR THE NEXT YEAR (it is 2/3/2024)"""


app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
toolbar = DebugToolbarExtension(app)
boggle_game = Boggle()

@app.route('/')
def index():
    """Render the Boggle game interface."""
    board = boggle_game.make_board()
    session['board'] = board
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)
    return render_template('index.html', board=board, highscore=highscore, nplays=nplays)

# app.py


@app.route('/check_word')
def check_word():
    """Check if a submitted word is valid and update the score."""
    # data = request.get_json()
    # word = data.get('word')
    word = request.args.get('word')
    board = session['board']

    result = boggle_game.check_valid_word(board, word)

    if result == 'ok':
        # Valid word, update the score
        score = session.get('score', 0)
        session['score'] = score + len(word)

    return jsonify(result=result, score=session.get('score', 0))


@app.route('/post_score', methods=['POST'])
def post_score():
    """Receive score, update statistics, and send response."""
    score = request.json.get('score')
    highscore = session.get("highscore", 0)
    nplays = session.get("nplays", 0)

    session['nplays'] = nplays + 1
    session['highscore'] = max(score, highscore)

    return jsonify(brokeRecord=score > highscore, nplays=session['nplays'], highest_score=session['highscore'])


if __name__ == '__main__':
    app.run(debug=True)
