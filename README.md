# **Инструкция**


## Ветки:

Созданы 4 ветки, каждый работает в своей, по заранее определенным задачам\
только в своем разделе проекта. 

## Инструкция по GIT:

`git branch`- покажет в какой ветке ты находишься сейчас.\
\
`git checkout` 'имя ветки без ковычек' - переключит на указанную ветку.\
\
`git pull` - подгрузит последние изменения в ветке в которой находишься.\
\
`git pull origin 'имя ветки без ковычек'` - подгрузит изменения из указанной \
ветки в ту в которой находишься.\
\
`git status` - показывает состояния файлов в рабочей директории.\
\
`git add . `- добавляет все содержимое рабочей директории в индекс для последующего коммита.\
\
`git commit -m "Комментарий"` - берёт все данные, добавленные в индекс с помощью git add, и \
сохраняет их слепок во внутренней базе данных, а затем сдвигает указатель текущей ветки на\
этот слепок.\
\
`git push` - выгружает данные в репозиторий.\
\
После выполнения своей задачи создаем pull requests, запрашиваем слияние изменения\
с веткой main.

### :point_right:**Начинать ежедневный рабочий процесс необходимо с команды** `git pull origin main`:point_left:

- [x] `Макс -` ~~Структура проекта :smile:~~
- [x] `Макс -` ~~Верстка header.~~
- [x] `Макс -` ~~Верстка usermenu.~~
- [x] `Эрнест -` ~~Верстка footer.~~
- [x] `Алексей -` ~~Верстка main + cards.~~
- [x] `Эрнест -` ~~Модальное окно редактирования профиля + логика.~~
- [x] `Анатолий -` ~~Модальное окно добавления поста + логика. _**Первая очередь**_ [PostsApi.js]~~
- [x] `Алексей -` ~~Модальное окно поста + логика.  _**Первая очередь**_ [PostsApi.js] [PostList]~~
- [x] `Макс -` ~~Редактирование поста~~
- [x] `Эрнест -` ~~Лайки~~
- [x] `Макс -` ~~Комментарии к посту.~~
- [x] `Алексей -` ~~Отображение всех постов.  [PostsApi.js] [PostList]~~
- [x] `Эрнест -` ~~Логика пагинации.~~
- [x] `Макс -` ~~Логика хлебных крошек(все посты/мои посты)~~
- [x] `Макс -` ~~Логаут. [AuthApi.js] [appHeader.jsx]~~
- [x] `Эрнест -` ~~Модальное окно регистрации+ логика. [AuthApi.js] [appHeader.jsx] [RegModal]~~
- [x] `Эрнест -` ~~Логика зоны видимости и возможностей авторизованного пользователя.~~
- [x] `Эрнест -` ~~Отображение информации о авторизованном пользователе  [AuthApi.js]~~
