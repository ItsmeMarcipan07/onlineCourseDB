# Online Course Platform – MongoDB Demo

Този проект представя MongoDB база данни за онлайн платформа за обучение. Той включва пълно изпълнение на CRUD операции и агрегиращи заявки (`aggregate pipeline`).

## 🗂 Описание на базата данни

Базата симулира онлайн платформа с потребители, инструктори, курсове, записвания и отзиви. Съдържа следните **5 колекции**:

| Колекция      | Описание                                                              |
| ------------- | --------------------------------------------------------------------- |
| `students`    | Студенти, регистрирани в платформата                                  |
| `instructors` | Преподаватели, които създават и водят курсове                         |
| `courses`     | Курсове, създадени от инструктори – съдържат информация за съдържание |
| `enrollments` | Записвания на студенти в курсове, със статус и прогрес                |
| `reviews`     | Отзиви от студенти за преминати курсове                               |

## 🧱 Структура на документите

### 📘 `students`

```json
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  birthDate: Date,
  registeredAt: Date,
  interests: [String],
  address: {
    city: String,
    country: String
  }
}
```

### 📗 `instructors`

```json
{
  _id: ObjectId,
  firstName: String,
  lastName: String,
  email: String,
  bio: String,
  expertise: [String],
  hiredAt: Date
}
```

### 📙 `courses`

```json
{
  _id: ObjectId,
  title: String,
  description: String,
  category: String,
  durationHours: Number,
  level: String,
  instructorId: ObjectId,
  tags: [String],
  price: Number,
  createdAt: Date
}
```

### 📒 `enrollments`

```json
{
  _id: ObjectId,
  studentId: ObjectId,
  courseId: ObjectId,
  enrolledAt: Date,
  progress: Number,
  status: String // "active", "completed", "cancelled"
}
```

### 📕 `reviews`

```json
{
  _id: ObjectId,
  courseId: ObjectId,
  studentId: ObjectId,
  rating: Number,
  comment: String,
  createdAt: Date
}
```

---

## 🛠 Инсталация и стартиране

### 1. Изисквания

* MongoDB (локално, версия ≥ 6.0)
* MongoDB Compass (по избор)

### 2. Стъпки за изпълнение

#### Вариант A: През терминала (Windows/macOS/Linux)

```bash
mongosh < insert.js     # Зарежда начални данни
mongosh < queries.js    # Изпълнява демонстрационни заявки
```

#### Вариант B: През MongoDB Compass

1. Стартирайте MongoDB и отворете **Compass**
2. Свържете се към `mongodb://localhost:27017`
3. Импортирайте JSON ръчно или създайте колекциите
4. Използвайте табовете `Filter` и `Aggregation`, за да изпробвате заявки от `queries.js`

### 3. Нулиране на базата данни

```js
use onlineCourseDB

db.dropDatabase()
```

След това изпълнете отново `insert.js`.

---

Проектът е подходящ за демонстрация на релации чрез референции (`ObjectId`), CRUD операции и мощността на агрегиращите заявки в MongoDB.
