FROM nginx:1.22.0-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN mkdir /var/www/html -p && touch /var/www/html/index.php