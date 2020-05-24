# BangerShare

Brought to you by SOFTENG 750 Group 6, BangerShare is a social music platform that allows users to create and share playlists with friends, and listen to music from a variety of platforms (e.g. Youtube, Spotify) all in one place.

## Technical layout

The application has two parts, the frontend and the server (or backend), which are in separate directories in this repository. Both parts need to be running for the application to work properly. To get everything set up, see:

- [Backend tech page](https://github.com/BennyChun/Group-6-Gray-Goat/wiki/Backend/)
- [Frontend tech page](https://github.com/BennyChun/Group-6-Gray-Goat/wiki/Frontend)

Before contributing to the repository, make sure to read the [license](https://github.com/BennyChun/Group-6-Gray-Goat/blob/master/LICENSE) and [code of conduct](https://github.com/BennyChun/Group-6-Gray-Goat/wiki/Code-of-Conduct).

## Get Started!

To get the project running, follow these steps:

### Prerequisites
- Visual Studio (for editing C# code) [or the equivalent `dotnet` command line tools, or JetBrains Rider]
- Make sure you've installed the `ASP.NET and Web Development Tools package` in Visual Studio
- Visual Studio Code [or equivalent frontend tooling]
- NPM/NodeJS (for running the frontend)

### Steps

1. Open the backend folder (BangerShare Backend) and find the Solution (.sln) file, and open in Visual Studio.
2. Once Visual Studio loads up, you should have a green "IIS Express" button to start the app in the top toolbar. Click it.
3. It'll take some time the first run (as Visual Studio should install all dependencies). Once the backend server is running, a new window will open displaying Swagger, which is a tool used for testing the API endpoints.
4. Open the frontend folder (Bangershare Frontend\bangershare-app) in a command line tool.
5. Run `npm install` to download and install all dependencies.
6. Run `npm start` to start the React development server. 
7. Your browser should open (or you may have to open a link from the React command line tool). You should see the home page, and it should successfully connect to the backend. 

## Testing
To test the project, follow these steps:
### Steps
1. Navigate to the root frontend project folder `Group-6-Gray-Goat` -> `Bangershare Frontend` -> `bangershare-app`.
2. In the terminal, enter the command `npm run test`

## Further information

For more information about the project, consult the [wiki](https://github.com/BennyChun/Group-6-Gray-Goat/wiki).
