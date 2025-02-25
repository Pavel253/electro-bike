<h2>Архитектура проекта</h2>


  - app (основная архитектура клиентской части)

    - auth (Страница регистрации)

      - page.jsx
      - page.scss

    - component (Архитектура компонентской части для основной страницы и для регистрации)

      - Footer
      - Header

        - HeaderAuth
        - HeaderMenu
        - Header.jsx
        - Header.scss
        - Menu.jsx

      - Modal

        - ModalBuy
        - ModalQuestion
        - ModalReview

      - section

        - section1
        - section2
        - section3
        - section4
        - section5
        - section6
        - section7
        - section8

      - ui
        - Btn
        - Button

    - error (Страница для ошибки пользователя адресации)

      - error.jsx

    - body.scss
    - favicon.ico
    - fon.scss
    - layout.js
    - page.jsx

    - backend (фреймворк Flask)
      - app.py (Добавление регистрации в бд mysql и отзывов на самокат)


<h4>Установка библиотек</h4>

<span>next.js</span>

```bash
npm i
```

<span>flask</span>

```bash
source venv/bin/activate
pip install -r requirements.txt
```

<h4>Запуск программы</h4>

<span>next.js (frontend)</span>

```bash
npm run dev
```

<span>Flask (backend)</span>

```bash
cd backend
python app.py
```
