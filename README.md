# filesrocket-express-app

This is an application that implements [**Filesrocket**](https://github.com/Filesrocket/filesrocket) to upload, list and delete files

## Setup

Cloning project in your computer

```
git clone https://github.com/Filesrocket/filesrocket-express-app.git
```

Enter project

```
cd filesrocket-express-app
```

Open **VSCode**

```
code .
```

## Installation

```
npm install
```

## Development

```
npm run dev
```

## Build

```
npm run build
```

## Extras

As you may have noticed in the project you will see that there are files like `src/index.ts` and `src/filesrocket.ts`

If you want to be able to interact with the other services, follow the steps below:

1. Copy the contents of the `.example.env` file
2. Create a file named `.env` and copy the content
3. Add the keys of the service you want to use
4. Remove comments

All endpoints available

- **Local**: http://localhost:3030/local/files
- **Cloudinary**: http://localhost:3030/cloudinary/files
- **Amazon S3**: http://localhost:3030/amazons3/files
