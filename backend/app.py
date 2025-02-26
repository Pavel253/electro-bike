from flask import Flask, request, jsonify # type: ignore
from flask_cors import CORS # type: ignore
from flask_sqlalchemy import SQLAlchemy # type: ignore
from werkzeug.security import generate_password_hash, check_password_hash # type: ignore
import pymysql
pymysql.install_as_MySQLdb()

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# Обновляем конфигурацию базы данных
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/mi'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class User(db.Model):
    __tablename__ = 'users'  # Явно указываем имя таблицы
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(100), nullable=False)

class Feed(db.Model):
    __tablename__ = 'feedback'  # Явно указываем имя таблицы
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    feedback = db.Column(db.Text, nullable=False)


@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.json
        
        # Проверка наличия всех необходимых полей
        if not all(key in data for key in ['email', 'password', 'name']):
            return jsonify({'error': 'Не все поля заполнены'}), 400

        # Проверка на пустые значения
        if not data['email'].strip() or not data['password'] or not data['name'].strip():
            return jsonify({'error': 'Поля не могут быть пустыми'}), 400

        # Проверка существующего пользователя
        if User.query.filter_by(email=data['email'].strip()).first():
            return jsonify({'error': 'Пользователь с таким email уже существует'}), 400

        hashed_password = generate_password_hash(data['password'])
        new_user = User(
            email=data['email'].strip(),
            password=hashed_password,
            name=data['name'].strip()
        )

        db.session.add(new_user)
        db.session.commit()

        return jsonify({
            'message': 'Регистрация успешна',
            'name': new_user.name
        }), 201
        
    except Exception as e:
        db.session.rollback()
        print("Registration error:", str(e))  # Для отладки
        return jsonify({'error': 'Ошибка при регистрации'}), 500


@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()

    if user and check_password_hash(user.password, data['password']):
        return jsonify({'message': 'Login successful', 'name': user.name}), 200

    return jsonify({'error': 'Invalid credentials'}), 401


@app.route('/api/feedback', methods=['POST'])
def feedback():
    try:
        data = request.json
        
        # Проверка наличия всех необходимых полей
        if not all(key in data for key in ['name', 'feedback']):
            return jsonify({'error': 'Не все поля заполнены'}), 400

        # Проверка на пустые значения
        if not data['name'].strip() or not data['feedback'].strip():
            return jsonify({'error': 'Поля не могут быть пустыми'}), 400

        new_feedback = Feed(
            name=data['name'].strip(),
            feedback=data['feedback'].strip()
        )

        db.session.add(new_feedback)
        db.session.commit()

        return jsonify({
            'message': 'Отзыв успешно отправлен',
            'name': new_feedback.name
        }), 201
        
    except Exception as e:
        db.session.rollback()
        print("Feedback error:", str(e))  # Для отладки
        return jsonify({'error': 'Ошибка при отправке отзыва'}), 500


@app.route('/api/feedback', methods=['GET'])
def get_feedbacks():
    try:
        feedbacks = Feed.query.all()
        return jsonify([{
            'id': feedback.id,
            'name': feedback.name,
            'feedback': feedback.feedback
        } for feedback in feedbacks]), 200
    except Exception as e:
        print("Get feedbacks error:", str(e))
        return jsonify({'error': 'Ошибка при получении отзывов'}), 500


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods',
                         'GET,PUT,POST,DELETE,OPTIONS')
    return response


if __name__ == '__main__':
    with app.app_context():
        # Создаем таблицы, если они не существуют
        db.create_all()
    app.run(debug=True)
