# React
  
  - Es una libreria de javascript para construir interfaces de usuarios.

# Particularidades de ReactJs
  
  - Declarativo
  - Basado en Componentes
  - Learn once, write anywhere
  - react-dom renderizar en el dom ( navegador).
  - react componentest etc...
  - antes atributos ahora con react propiedades.
  - PROPS son las propiedades que tendra o se le asignaran a   el componente.
  - textos tipo quemados estaticos se le dice harcodeadas
  - Las props son inmutables.
  - El estado de los componentes si es mutable.
  - ES6 , usar spread operator para los porps
  
# Validando tipado en propiedades
  - Desde react 15.5 no esta en el core react.
   esta en 'prop-types'
    
    ```
      Media.propTypes = {
        image: PropTypes.string,
        author: PropTypes.string,
        title: PropTypes.string,
        type: PropTypes.oneOf(['video', 'audio'])
      }
    ```

# Ciclo de vida de un componente (declarativos)
  
  ## Montado
    
    - Constructor
       recomendado solo para estado inicial, propiedades al this o binds.
    - componentWillMount
       llamado justo antes de ser montado al dom.
       puede hacerse un setState, no hacer llamados a API en este momento. ( tener en cuenta serverside render).
    - render
      JSX, se pueden calcular/procesar datos.
    - componentDidMount
       lanzado una vez, llamado luego de ser montado el componente. esta montado al dom, se pueden usar las apis
       llamado de datos.

  ## Actualizaciones
    
    - componentWillReciveProps
        puedo validar props, actualizar estados segun props nuevas.
    - shouldComponentUpdate
        Metodo para mejorar/optimizar el rendimiento.
        evitar re-render
    - componentWillUpdate
       justo antes de re-render.
    - componentDidUpdate
        ...

  ## Desmontado
    - componentWillUnmount
        ...
   
  ## Manejo de errores
    - componentDidCatch
      interesante manejo de errores, reportes etc..
      ocurre de padres a hijos
      ...

  # Tipos de Componentes *
   
   - Puros (PureComponent) 
      ShouldComponent Update, ya implementado.

   - funcionales (function Component).
      sin ciclo de vida.

   - Component, hay que asignarle shouldcomponent Update.

  # Smart Components and Dumb Components
       
    -@dan_abramov
    -Como se ve (Dumb) vs Qué hace? (Smart)
    - Otras formas de llamarlos
      - Statefull vs Pure
      - Fat vs Skinny
      - Container vs Presensational Component (usado en clase)
      - Separacion de responsabilidades. ( como se ve como funciona  )
      - Mejora la capacidad de reutilizar componentes ( click difrentes en varios lugares desde un mismo componentes)

  ## Dump ( PureComponents o function compoenents) (UI CASI LA VISTA DEL MVC)
    
    - Puede contener smart components u otros componentes de UI.
    - Permiten compocision con [props.children].
    - No dependen del resto de la aplicacion. (o del contexto de la app, altamente reusable)
    - No especifica como los datos son cargados o mutados. (no tiene states)
    - Recibe datos y callbacks solo con propiedades no las maneja internamente , llegan de un componente inteligente.
    - Rara vez tienen su propio estado.
    - Estan escritos como componentes funcionales a menos que neceties mejoras de performance.


  ## smart componets ((UI CASI EL CONTROLADOR DEL MVC))
   
   - Concentrado en el funcionamiento de la aplicacion.
   - Contiene componentes de UI u otros containers.
   - No tienen estilos.
   - Proveen de datos a componentes de UI y otros contenedores.
   proveen de callbakkcs a la UI.
   - Normalmente tienen estado
   - llaman acciones.
   - Pueden ser generados por higher order components.



   notar 
      /src/[compoents name]/components
                              [- puros o funcionales
                              [./containers/ con estado o intelignetes