# payments
# Doc

## Constants

- configuraciones golbales
- currency
- Payments, status valores admitidos.

## Helpers

- CreatedPayment : retorna un objeto payment.
- Fix Currency : Da formato al precio a moneda en este caso Unidad de fomento chile la cual se representa como CLF segun la ISO 4217
- Format Date : formato de fecha, 09 Oct 2022

## Filters Globales

- currency
- date

```js
{{obj.date | date}}
{{obj.price | currency}}
```

### AppPayment

- componente principal, es cual esta compuesto por los componentes

  - AppTopbar: emite evento, para poder editar o guardar
  - AppCarPay: muestra la lista de pagos.

### AppCarPay

- Tiene dos componentes, los cuales se rederizan segun una condicion.
- canEdit == true && status == 'pendiente' **AppCarEditing**
- canEdit = false **AppCardPending**

- boton agregar nuevo Pago. al lado derecho de cada Card

### Request Api

- Save
- update + id
- get created AppPayment.

## Funcionamiento Vuex

- 2 arrays de objetos en Vuex
- Arreglo payments original -
- Arreglo paymentsEdit para realizar cambios.
- una vez realizados los cambios, se guardan los datos del arreglo edit. al original

- Una variable que apunta o hace referencia al arreglo original cuando se muestran los datos, cuando se hace click e edit, esta cambia de referencia apuntando al arreglo edit. Para poder trabajar con este

## Todo

- styles css
- fix date


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
