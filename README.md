# Express Hello World Example

## AWS Elastic Beanstalk
Doc: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.html

Use Dockerrun.aws.json file for uploading to Elastic Beanstalk Docker Env
Dockerrun.aws.json:
```json
{
  "AWSEBDockerrunVersion": "1",
  "Logging": "/tmp/sample-app",
  "Image": {
    "Update": "true",
    "Name": "<registry URL>:latest"
  },
  "Ports": [{ "ContainerPort": "3010" }]
}
```
## Connect with AWS ECR

ECR Doc: https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html

1. Login Docker to AWS ECR
Docs: https://docs.aws.amazon.com/AmazonECR/latest/userguidegetting-started-cli.html (Step 2: Authenticate to your default registry -> get-login-password)

2. Create ECR Registry and get URI for the registry 

3. Create docker image and tag it by registry URI
```
docker build . --platform=linux/amd64 --tag <registry URL>
```
4. Push to AWS ECR Registry
```bash
docker push <registry URL>
```

### Optional: Upload to Elastic Beanstalk
Docs: 
Use Dockerrun.aws.json file for uploading to Elastic Beanstalk Docker Env
Dockerrun.aws.json:
1. Version 1
Docs: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/single-container-docker-configuration.html#single-container-docker-configuration.no-compose

2. Version 2
Docs: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker_v2config.html

### Optional: Define Environment Variables
Doc: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-softwaresettings.html
1. Dockerrun.aws.json v1: on AWS portal: Environment -> Configuration -> Updates, monitoring, and logging -> Environment properties.
https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/single-container-docker-configuration.html
2. For v2 version, need to run in multiple container env which is ECS platform. -> environment
https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_docker_v2config.html#create_deploy_docker_v2config_dockerrun


## Connect with Github action
Use github action to replace manually create docker image, push and deploy on Beanstalk
Refer to .github/workflows/deploy-to-beanstalk