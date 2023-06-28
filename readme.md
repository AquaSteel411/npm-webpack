1) Установлен и настроен webpack-dev-server.
2) Подключен hot module replacement.
3) Запуск сервера в режиме development выполняется скриптом:
```
npm run start
```
В режиме production:
```
npm run build
```

4) Запуск JSON сервера выполняется командой:
```
json-server --watch db.json
```

5) Добавить запуск линтера при комите
```
git commit --no-verify -m "Commit message"
```


