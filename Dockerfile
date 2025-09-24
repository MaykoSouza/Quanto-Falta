FROM nginx:alpine
#Uitlizando a imagem oficial do Nginx na versão alpine 

COPY public/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
#'deamon off faz com que o nginx rode em primeiro plano 
