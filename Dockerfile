
FROM eclipse-temurin:17-jdk-alpine

VOLUME /tmp

ARG JAR_NAME

ARG JAR_FILE=target/${JAR_NAME}

COPY ${JAR_FILE} ${JAR_NAME}

ENTRYPOINT ["java", "-jar", "/${JAR_NAME}"]

