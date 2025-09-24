FROM nginx:alpine
#Uitlizando a imagem oficial do Nginx na versão alpine 

COPY nginx.conf /etc/nginx/nginx.conf 
#alterando o arquivo de configuração do Nginx para ouvir requisições na porta 8080

COPY public/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
#'deamon off faz com que o nginx rode em primeiro plano 
