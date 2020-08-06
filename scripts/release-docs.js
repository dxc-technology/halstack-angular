const { exec } = require("child_process");
const AWS = require("aws-sdk");

const BUCKET_NAME = "design-system-angular-cdk-site";
const DIRECTORY = "tools/angular/";

const processListObjectsResponse = (response) => {
  return response.CommonPrefixes.map((commonPrefix) => {
    const prefix = commonPrefix.Prefix;
    return prefix.substring(
      prefix.lastIndexOf(DIRECTORY) + DIRECTORY.length,
      prefix.length - 1
    );
  })
    .filter((version) => version !== "next" && version !== "latest")
    .map((version) => Number(version));
};

const getVersionsInS3Bucket = async () => {
  const params = {
    Bucket: BUCKET_NAME,
    Prefix: DIRECTORY,
    Delimiter: "/",
  };

  return new Promise((resolve, reject) => {
    new AWS.S3().listObjectsV2(params, (error, data) => {
      if (error) {
        reject(new Error(error));
      } else {
        resolve(processListObjectsResponse(data));
      }
    });
  });
};

const removeBucket = (version) => {
   return new Promise((resolve, reject) => {
    console.log(`Removin s3://${BUCKET_NAME}/${DIRECTORY}${version}/`);
    exec(
      `aws s3 rm s3://${BUCKET_NAME}/${DIRECTORY}${version}/ --recursive`,
      (error, stdout, stderr) => {
        if (error) {
          throw new Error(error.message);
        }
        if (stderr) {
          throw new Error(stderr);
        }
        resolve(stdout);
      }
    );
  }); 
};

const moveToBucket = (version) => {
  return new Promise((resolve, reject) => {
    console.log(`Moving to s3://${BUCKET_NAME}/${DIRECTORY}${version}/`);
    exec(
      `aws s3 cp ./dist/angular-dxc-site s3://${BUCKET_NAME}/${DIRECTORY}${version}/ --recursive`,
      (error, stdout, stderr) => {
        if (error) {
          throw new Error(error.message);
        }
        if (stderr) {
          throw new Error(stderr);
        }
        resolve(stdout);
      }
    );
  });
};

const updateRedirectionToLatest = (version) => {
  const redirection = `window.location.replace("https://developer.dxc.com/tools/angular/${version}");`;
  return new Promise((resolve, reject) => {
    exec(
      `echo '${redirection}' | aws s3 cp - s3://${BUCKET_NAME}/${DIRECTORY}redirect.js`,
      (error, stdout, stderr) => {
        if (error) {
          throw new Error(error.message);
        }
        if (stderr) {
          throw new Error(stderr);
        }
        resolve(stdout);
      }
    );
  });
};

const deploy = async () => {
  const versionToDeploy = process.argv[2];
  const majorVersionToDeploy = Number(
    versionToDeploy.substring(0, versionToDeploy.indexOf("."))
  );
  const existingVersionsInBucket = await getVersionsInS3Bucket();
  const isNewLatest = !existingVersionsInBucket.includes(majorVersionToDeploy);
  await removeBucket(majorVersionToDeploy);
  await moveToBucket(majorVersionToDeploy);
  if (isNewLatest) {
    await updateRedirectionToLatest(majorVersionToDeploy);
  }
};

deploy();
