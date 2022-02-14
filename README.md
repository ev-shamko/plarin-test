# Тестовое задание Plarin

Это простое REST API приложение, отображающее список Домов из вселенной «Песнь льда и пламени» Джорджа Р. Р. Мартина с помощью anapioficeandfire.com
Приложение позволяет посмотреть список домов и добавить понравившиеся дома в избранное. Избранные дома будут доступны после перезагрузки приложения (данные сохраняются в localStorage).

**Демо на gh-pages:** https://ev-shamko.github.io/plarin-test/ 

Кстати, вы можете посмотреть другое написанное мной SPA приложение на React в этом репозитории: https://github.com/ev-shamko/react-stellar-burgers  Оно больше, сложнее, немного другой стек. Демо:  https://ev-shamko.github.io/react-stellar-burgers 

### Главная страница:
Содержит в себе список карточек с названиями домов и кнопкой добавления домов в избранное. Размещение - по 12 карточек на странице, доступ к остальным карточкам через пагинацию.

### Страница с избранным:
Содержит в себе список карточек, которые отметил пользователь (все карточки на одной странице). При перезагрузке страницы информация со страницы “Избранное” сохранятся.

## Использованы технологии:
* React, functional components, hooks
* TypeScript
* SASS(SCSS)
* material-ui
* Mobx;
* axios;

Проект написан на основании базового репозитория, предоставленного Plarin.

## Запуск проекта

#### `Для установки необходимых зависимостей используйте npm install`
#### `для запуска проекта используйте npm run dev`
#### `деплой на gh-pages:  npm run build >> npm run deploy`
