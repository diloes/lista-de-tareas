# Lista de Tareas - REACT 

El clásico ToDo que se suele hacer cuando uno está aprendiendo React. He querido dejarlo por aquí por si 
alguien le viene bien el código y puede aprender algo de él. 

## Cómo funciona

A continuación voy a detallar el funcionamiento de la aplicación.

### Componente principal: `TodoApp`

En este componente vamos a mostrar un formulario y una lista de tareas a través del componente hijo: `Todo`.
Tenemos dos estados, uno para el texto del formulario(tarea) y otro para la lista de tareas(todos).

También disponemos de 4 funciones:
 - handleChange -> Para asignar el valor del input del formulario a la variable de estado `tarea`
 - handleSubmit -> Para añadir una nueva tarea a la lista de tareas
 - handleDelete -> Para eliminar una tarea de la lista de tareas(Se ejecuta en el componente hijo)
 - handleUpdate -> Para actualizar una tarea de la lista de tareas(Se ejecuta en el componente hijo)

### Componente hijo: `Todo`

Este componente tiene un estado: `isEdit` que nos permite saber si estamos editando o no una tarea.
Si isEdit es true, mostramos un formulario con un input para editar la tarea a través del componente hijo: `FormEdit`.
Si isEdit es false, mostramos la tarea y dos botones, uno para eliminar y otro para actualizar, a través del 
componente hijo: `TodoElement`.

Tenemos una función, `isEditChange`, que se ejecuta al pulsar el botón de Editar o Actualizar y cambia el estado
isEdit a true o false.

### Componente nieto: `FormEdit`


