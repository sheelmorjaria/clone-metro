Step by step instructions for deploying to S3 using localstack.

1)npm run build

2)docker compose up -d

3)docker exec -it stacky bash

4)cd my-site

5)awslocal s3api create-bucket --bucket my-site

6)awslocal s3api list-buckets

7)cd dist

8)awslocal s3 website s3://my-site --index-document index.html

9)cd ..

10)awslocal s3 sync dist s3://my-site

11)awslocal s3api put-bucket-policy --bucket my-site --policy file://policy.json

12)Access website at http://my-site.s3.localhost.localstack.cloud:4566/index.html

13)exit

14)docker compose down
