<?php

use craft\helpers\App;

$dsn = App::env('DB_DSN');

return [
    'dsn' => $dsn,
    'password' => App::env('DB_PASSWORD'),
    'user' => App::env('DB_USER'),
    'tablePrefix' => App::env('DB_TABLE_PREFIX'),
    'schema' => App::env('DB_SCHEMA'),
    'driver' => str_contains($dsn, 'mysql:') ? 'mysql' : null,
];
