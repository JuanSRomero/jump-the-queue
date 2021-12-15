#Stage 1
FROM maven:3.8.4-openjdk-11 as build

RUN mkdir -p /app
#directorio de trabajo donde se hacen las acciones
WORKDIR /app

COPY jtqj/ /app
#creamos el .jar
RUN mvn clean install

#Stage 2 Deploy

FROM adoptopenjdk/openjdk11:jre-11.0.11_9-alpine

WORKDIR /app

COPY --from=build /app/server/target/jtqj-server-bootified.war /app/
#ojo, carpeta donde mira
ENTRYPOINT ["java","-jar", "/app/jtqj-server-bootified.war"]

EXPOSE 8081



