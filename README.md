# Avatar Portfolio

Hi there! 😁

This is my personal portfolio showcasing me- inspired by the software that I use often! There is still room for improvement so bear with me but feel free to explore for now! =)

## 🌟 Features

- **Real-time Spotify Integration**: Displays currently playing music using Spotify Web API with OAuth authentication
- **Discord/Steam-style UI**: Steam cards with 3D tilt effects and familiar Discord aesthetics
- **Responsive Design**: For screens bigger and smaller than 1000px
- **Modern Tech Stack**: Built with React frontend and .NET Web API backend
- **More Coming In The Future!**

## 🚀 Live Demo

- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Azure App Service

## 🛠️ Tech Stack

### Frontend

- React
- HTML5 & CSS3 (Flexbox layouts)
- Responsive design patterns
- 3D CSS transforms for interactive elements

### Backend

- .NET Web API
- Spotify Web API integration
- OAuth 2.0 authentication
- Azure App Service hosting

### Database

- MSSQL (WIP)

## 📁 Project Structure

```
avatar/
├── frontend/          # React application
│   ├── src/
│   └── public/
└── backend/           # .NET Web API
    ├── Controllers/
    └── Services/
```

## 🔧 Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- .NET SDK
- Spotify Developer Account

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Backend Setup

```bash
cd backend
dotnet restore
dotnet run
```

### Environment Variables

Create a `.env` file in the frontend directory:

```
REACT_APP_API_URL=YOUR_BACKEND_URL
```

Configure your backend with Spotify API credentials in `appsettings.json`:

```json
{
	"Spotify": {
		"ClientId": "YOUR_SPOTIFY_CLIENT_ID",
		"ClientSecret": "YOUR_SPOTIFY_CLIENT_SECRET",
		"RedirectUri": "YOUR_REDIRECT_URI",
		"RefreshToken": "YOUR_SPOTIFY_REFRESH_TOKEN"
	}
}
```

## 🔄 Version Control

This project uses Git for version control with workflows across multiple development environments.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Richard**

- [GitHub](https://github.com/richardRiv/)
- [LinkedIn](https://www.linkedin.com/in/richard-rivera-/)

## 🙏 Acknowledgments

- Spotify Web API for music integration
- Discord & Steam for UI/UX inspiration
- Vercel and Azure for hosting solutions
