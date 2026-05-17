# React Native Expo Router Shop App

Лабораторна робота №5
Тема: Побудова навігації у React Native із використанням Expo Router

Студент: Лоскучерявий Дмитро Віталійович
Група: ВТ-24-1

---


<img width="591" height="1280" alt="image" src="https://github.com/user-attachments/assets/761a4ead-9846-4034-90cc-8769ec6f5587" />


<img width="591" height="1280" alt="image" src="https://github.com/user-attachments/assets/274a3a9c-54f9-4987-af8f-effa926b07b1" />


<img width="591" height="1280" alt="image" src="https://github.com/user-attachments/assets/3984fd66-23de-4e31-9ac0-7197e4c3b88f" />


<img width="591" height="1280" alt="image" src="https://github.com/user-attachments/assets/8435b1e7-fcfc-4bed-bae3-0d72179defa9" />


# Опис проєкту

Мобільний застосунок каталогу товарів, створений за допомогою React Native, Expo SDK 54 та Expo Router.

У застосунку реалізовано:

* Авторизацію користувача
* Реєстрацію користувача
* Захищені маршрути
* Каталог товарів
* Динамічні сторінки деталей товару
* Глобальний Auth Context
* File-based navigation через Expo Router
* Обробку неіснуючих маршрутів

---

# Технології

* React Native
* Expo SDK 54
* Expo Router
* React Context API
* JavaScript
* FlatList
* Dynamic Routes

---

# Встановлення проєкту

Створення проєкту:

```bash
npx create-expo-app@latest lab5 --template blank@sdk-54
```

Перехід у папку:

```bash
cd lab5
```

Встановлення залежностей:

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

```bash
npx expo install react-native-gesture-handler react-native-reanimated
```

---

# Запуск проєкту

```bash
npm install
```

```bash
npx expo start
```

Для Android:

```bash
a
```

---

# Структура проєкту

```text
app
│
├── (auth)
│   ├── login.jsx
│   └── register.jsx
│
├── (app)
│   ├── details
│   │   └── [id].jsx
│   │
│   ├── _layout.jsx
│   └── index.jsx
│
├── +not-found.jsx
└── _layout.jsx

components
│
└── ProductCard.jsx

context
│
└── AuthContext.jsx

data
│
└── products.js
```

---

# Основний функціонал

## Авторизація

Користувач може:

* Увійти у систему
* Зареєструвати новий акаунт
* Вийти з акаунту

---

## Захищені маршрути

Неавторизований користувач автоматично перенаправляється на сторінку входу.

```jsx
if (!isAuthenticated) {
  return <Redirect href="/login" />;
}
```

---

## Каталог товарів

На головному екрані відображається список товарів:

* Зображення
* Назва
* Ціна

Для відображення використовується FlatList.

---

## Динамічні маршрути

Для сторінки деталей товару використовується:

```text
details/[id].jsx
```

Отримання параметра:

```jsx
const { id } = useLocalSearchParams();
```

---

## Обробка помилок

Для неіснуючих сторінок реалізовано:

```text
+not-found.jsx
```

---

# Expo Router

Expo Router реалізує file-based navigation.

Кожен файл у папці app автоматично стає маршрутом застосунку.

Приклад:

```text
app/(auth)/login.jsx
```

створює маршрут:

```text
/login
```

---

# Автор

Лоскучерявий Дмитро Віталійович
Група ВТ-24-1

---

# Висновок

У ході лабораторної роботи було створено мобільний застосунок із використанням Expo Router та React Native. Було реалізовано систему авторизації, захищені маршрути, каталог товарів, динамічну навігацію та глобальний контекст користувача.
