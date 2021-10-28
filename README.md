# sentry-webpack-postgres

## Dependencies

- Running Postgres service
- Active Sentry acccount and with an api key. Key goes in 
  ``` 
  Sentry.init({
    dsn: "<key>",
  ```


## Run

`yarn start`

## Issue 

As soon as the services start debug tracing outputs below to the console
```
Senry Logger [Error]: Postgres Integration was unable to require `pg` package.
```
