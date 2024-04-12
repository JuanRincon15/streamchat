# streamchat
Herramienta de interaccion entre participantes durante el streaming de clases 
los participantes se comunican entre ellos mediante un chat grupal disponible para los participantes de la clase

# Front-end:
-framework: angular  
la intefaz se compone de dos pantallas  
# login  
pantalla de autenticacion de usuarios el usuario ingresa el nombre de usuario y contraseña con el cual se encuentra registrado

![image](https://github.com/JuanRincon15/streamchat/assets/123415094/8b40509d-9aa9-4bb2-976d-2618b27a74d6)


# Streaming de clase
pantalla de streaming de clase en la parte izquierda se puede visualizar el contenido y en la parte derecha el chat de interaccion  

![image](https://github.com/JuanRincon15/streamchat/assets/123415094/d539e281-94ea-4a55-aa5a-ccc603a1146c)

# Back-end
-framework: NodeJs  
el backend se compone de dos servicios principalmente el servicio que interpreta los mensajes del chat grupal y el servicio de autenticacion de usuarios  
al ejecutarse el servidor abre un web socket para transmitir los mensajes y expone un servicio rest de autenticacion  

![image](https://github.com/JuanRincon15/streamchat/assets/123415094/d9e13ebe-bd50-4119-8c90-87acc7904ca5)

# instrucciones de ejecucion Back-end: 
 
despues de clonar el repositorio teniendo node js intalado desde la consola ubiquese sobre el directorio back-end y ejecute el comando:  
npm install  
para instalar las dependencias del proyecto  
despues ejecute el comando:  
npm run dev  
para ejecutar el proyecto  

# instrucciones de ejecucion Front-end:  
Front-end\chatfront\frontstreamingchatapp con angular instalado y depues de ejecutar npm intall para traer las dependencias ejecute el comando  

ng serve  
para ejecutar el proyecto de angular  

en su navegador ingrese al http://localhost:4200/ para visualizar la pantalla login  

![image](https://github.com/JuanRincon15/streamchat/assets/123415094/50fbdb9d-761e-4cb3-b639-c5aae7011c9d)

para ver la funcionalidad abra otros navegadore o pestañas de incognito de su navegar tantas como usuarios quiera ver y haga login con algunos de estos

![image](https://github.com/JuanRincon15/streamchat/assets/123415094/59beb9a7-916b-4923-b046-4a6e11f60b72)

manda mensajes entre los clientes estos se identificaran en el chat  

![image](https://github.com/JuanRincon15/streamchat/assets/123415094/dde9eb39-d97c-4a4b-9b6a-741e58ce5aef)





