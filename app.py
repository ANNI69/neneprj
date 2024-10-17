from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/exercise_plan')
def exercise_plan():
    return render_template('exercise.html')

if __name__ == '__main__':
    app.run(debug=True)
