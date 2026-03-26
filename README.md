# React Hello World

Минимальный React-проект на Vite для лабораторной работы с публикацией на GitHub Pages.

## Запуск локально

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

Готовые файлы появятся в папке `dist`.

## Публикация на GitHub Pages

1. Создай новый репозиторий на GitHub.
2. Свяжи локальный проект с репозиторием и запушь ветку `main`.
3. В настройках GitHub открой `Settings -> Pages`.
4. В `Source` выбери `GitHub Actions`.
5. После пуша workflow из `.github/workflows/deploy.yml` соберёт и опубликует сайт.
