# piotr-moj-pt

Landing page for Piotrek Moj's personal training website.

## Build

A Dockerfile is included for a simple and secure development process. I recommend using VSCode with the Microsoft Dev Containers extension to access the container once it's running.

With Docker installed, open the directory of the cloned repo in a terminal and run:

``docker build -t piotr-moj-pt . --network=host``

Docker will build the image. Once it's done, run:

``docker run --name piotr-moj-pt -d -p 3000:3000 piotr-moj-pt``

This will start a container running the site. You can access it through your browser by navigating to `http://localhost:3000`. Once you're done, you can remove both the container and image by running:

Linux:

``docker stop piotr-moj-pt && docker rm piotr-moj-pt && docker rmi piotr-moj-pt``

Windows:

``docker stop piotr-moj-pt; docker rm piotr-moj-pt; docker rmi piotr-moj-pt``

Here's the complete command to recreate and restart the docker container after removing the existing one (make sure to push your changes from the container and pull in the changes on your local machine before doing so):

Linux:

``docker stop piotr-moj-pt && docker rm piotr-moj-pt && docker rmi piotr-moj-pt && docker build -t piotr-moj-pt . --network=host && docker run --name piotr-moj-pt -d -p 3000:3000 piotr-moj-pt``

Windows:

``docker stop piotr-moj-pt; docker rm piotr-moj-pt; docker rmi piotr-moj-pt; docker build -t piotr-moj-pt . --network=host; docker run --name piotr-moj-pt -d -p 3000:3000 piotr-moj-pt``

## Fixes

If you're using VSCode, IntelliSense won't work for CSS files because I enabled a file association for CSS files and Tailwind. You can fix this by getting the official Tailwind CSS IntelliSense extension. The extension will get installed to the container, not your local installation of VSCode, as long as you have the container open through Dev Containers.
