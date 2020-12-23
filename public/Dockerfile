FROM node:8

EXPOSE 8083

COPY ./docker/entrypoint.sh /docker/entrypoint.sh

RUN chmod 755 /docker/entrypoint.sh

CMD ["/docker/entrypoint.sh"]
