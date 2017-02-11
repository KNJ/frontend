# Frontend

## Getting Started

### Setup container

```sh
docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock jwilder/nginx-proxy
docker build . -t knj/frontend
docker run -e VIRTUAL_HOST=dock.wazly.com -v $(pwd)/dist:/var/www -it -d knj/frontend
```
