# Netflix GPT

A React-based web application that combines Netflix's interface with GPT-powered movie and TV show recommendations.

## 📋 Overview

Netflix GPT is a modern streaming recommendation platform built with React and powered by ChatGPT API. It provides users with intelligent movie and TV show suggestions based on their preferences, wrapped in a Netflix-inspired user interface.

## ✨ Features

- **ChatGPT Integration** - AI-powered movie and TV show recommendations
- **User Authentication** - Sign in/Sign up with Firebase or Auth0
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Tailwind CSS Styling** - Modern and clean UI components
- **Movie/Show Details** - Browse title descriptions, trailers, and suggestions
- **Form Validation** - Robust error handling using React hooks
- **Trailer Playback** - Background trailers with title information

## 🛠 Tech Stack

- **Frontend Framework** - React
- **Styling** - Tailwind CSS
- **API** - ChatGPT API integration
- **Authentication** - Firebase / Auth0 (optional)
- **State Management** - React Hooks (useRef, useState, useEffect)
- **Language Composition** - JavaScript (83%), HTML (14.1%), CSS (2.9%)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Anant23452/Netflix-gpt.git
   cd Netflix-gpt
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```env
   REACT_APP_CHATGPT_API_KEY=your_chatgpt_api_key
   REACT_APP_FIREBASE_API_KEY=your_firebase_key (optional)
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
Netflix-gpt/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── MainMovie.js
│   │   └── MovieSuggestions.js
│   ├── pages/
│   │   ├── SignIn.js
│   │   └── SignUp.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 🔐 Authentication

The app includes sign in/sign up functionality with form validation:
- Form validation with error handling
- Secure authentication using Firebase or Auth0
- Redirect to main app after successful login
- Protected routes for authenticated users

## 🎬 Features Breakdown

### Header
- Navigation and branding
- User profile/logout options

### Main Movie
- Background trailer playback
- Movie title and description
- Call-to-action buttons

### Movie Suggestions
- AI-generated recommendations from ChatGPT
- Movie list display with details
- Dynamic filtering based on user preferences

## 🔧 Development

### Available Scripts

```bash
npm start       # Run development server
npm build       # Build for production
npm test        # Run tests
npm eject       # Eject from Create React App
```

## 📝 Form Validation & Error Handling

The application uses React's `useRef` hook for form validation and includes comprehensive error handling:
- Email format validation
- Password strength validation
- User feedback on errors
- Try-catch blocks for API calls

## 🌟 Future Enhancements

- [ ] User watchlist feature
- [ ] Rating and reviews system
- [ ] Advanced filtering options
- [ ] Dark mode toggle
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License. See LICENSE file for details.

## 👨‍💻 Author

**Anant23452**

## 📞 Support

For support, please open an issue in the GitHub repository.

---

*Built with ❤️ combining Netflix's UX with GPT's intelligence*
