StoryBuilder is a digital photo album. It allows you to organize your pictures into stories. Each story has a title, year, description and a collection of photos. Simply drag your pictures onto the page and upload them.

StoryBuilder is a fullstack webapplication. The backend consists of Node.js, Express.js and MongoDB.
The frontend exist of React build with create-react-app. The images upload functionality is implemented with the [react-dropzone](https://react-dropzone.js.org/) package

For the backend you need one environt variable in your .env file:

- JWT_KEY=your_jwt_key

For the front end to work, you need access to the Cloudinary service. In .env on the client you need to set these environment variables:

- REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
- REACT_APP_CLOUDINARY_UPLOAD_URL=your_upload_url
- REACT_APP_CLOUDINARY_API_KEY=your_cloudinary_api_key

Ideas to extend StoryBuilder are welcome. I think for instance on the ability to comment on the photos.
