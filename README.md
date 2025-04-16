Step by step instructions for deploying to S3 using localstack.

1)docker compose up -d

2)docker exec -it stacky bash

3)cd my-site

4)awslocal s3api create-bucket --bucket my-site

5)awslocal s3api list-buckets

6)cd dist

7)awslocal s3 website s3://my-site --index-document index.html

8)cd ..

9)awslocal s3 sync dist s3://my-site

10)awslocal s3api put-bucket-policy --bucket my-site --policy file://policy.json

11)Access website at http://my-site.s3.localhost.localstack.cloud:4566/index.html

12)exit

13)docker compose down
