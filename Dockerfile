FROM node:16.10 as DoCheckerAngularBuild
WORKDIR /DoChecker/DoCheckerFront
COPY DoCheckerFront/package.json /DoChecker/DoCheckerFront/
COPY DoCheckerFront/package-lock.json /DoChecker/DoCheckerFront/
RUN npm install -g @angular/cli@13.3.0
COPY DoCheckerFront /DoChecker/DoCheckerFront
ARG configuration=production
RUN npm run build -- --outputPath=./dist/out --configuration $configuration
FROM nginx
COPY --from=DoCheckerAngularBuild /DoChecker/DoCheckerFront/dist/out/ /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 4200:80
