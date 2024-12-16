# Projeto Laravel com Php 8.4 e Composer

## Gerar Api key

```
php artisan key:generate
```

## Instalar dependências do projeto

```
composer install
```

## Gerar o arquivo de rotas da Api

```
php artisan install:api
```

## Gerar uma Model, Factory, Seed e Resource Controller

```
php artisan make:model Task -mfscr
```

## Criar um Resource Controller

```
php artisan make:controller TaskController --resource
```

## Criação de rotas para Resource Controller

```
Route::resources([
    'departments' => DepartmentController::class,
    'employees' => EmployeeController::class,
    'tasks' => TaskController::class,
]);

```

## Tabela com o mapeamento de rotas de um Resouce Controller

```
| Verb        | URI                   | Action | Route Name     |
|-------------|-----------------------|--------|----------------|
| GET         | /photos               | index  | photos.index   |
| GET         | /photos/create        | create | photos.create  |
| POST        | /photos               | store  | photos.store   |
| GET         | /photos/{photo}       | show   | photos.show    |
| GET         | /photos/{photo}/edit  | edit   | photos.edit    |
| PUT/PATCH   | /photos/{photo}       | update | photos.update  |
| DELETE      | /photos/{photo}       | destroy| photos.destroy |

```

## Criar arquivo para validação de atributos de uma model antes de criar e/ou atualizar

```
php artisan make:request StorePostRequest
```

## Criar arquivos de tradução para a Api

```
php artisan lang:publish
```
