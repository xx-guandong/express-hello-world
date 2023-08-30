# Express Hello World Example
## Connect with AWS ECR

ECR Doc: https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html

1. Login Docker to AWS ECR
Docs: https://docs.aws.amazon.com/AmazonECR/latest/userguide/getting-started-cli.html (Step 2: Authenticate to your default registry -> get-login-password)

2. Create ECR Registry and get URI for the registry 

3. Create docker image and tag it by registry URI
```
docker build . --tag <registry URL>
```
4. Push to AWS ECR Registry
```
docker push <registry URL>
```