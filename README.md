# node-web-server
### node  练手项目
#### blog1 基于node 博客练手项目

#### nginx配置
```
    # 学习node-server
     server {
       listen       8081;
    #  listen       localhost:8081;
       server_name  localhost;
       
       location / {
           proxy_pass http://localhost:8001;
       }
       location /api/ {
            proxy_pass http://localhost:8000;
            proxy_set_header Host $host;
       }
    # access_log logs/frp.log main;
    }
```