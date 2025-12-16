# ☕ Coffee Here App

> **Discover the best coffee shops near you with our location-based coffee finder app!**

[![Built with Expo](https://img.shields.io/badge/Built%20with-Expo-000020.svg?style=flat&logo=EXPO&labelColor=FFF&logoColor=000)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.79.6-61DAFB.svg?style=flat&logo=react&labelColor=000)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6.svg?style=flat&logo=typescript&labelColor=FFF)](https://www.typescriptlang.org/)

## 🌟 Features

- 📍 **Location-based Discovery** - Find coffee shops near your current location
- 🗺️ **Interactive Maps** - View coffee shops on an interactive map
- ⭐ **Ratings & Reviews** - Check user ratings for each coffee shop
- 🌐 **Multi-language Support** - Available in English, Spanish, and Danish
- 📱 **Cross-platform** - Works on iOS, Android, and Web
- 🎯 **Modern Navigation** - Tab-based navigation with Expo Router

## 📸 Screenshots

_Coming soon..._

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- For iOS development: [Xcode](https://developer.apple.com/xcode/)
- For Android development: [Android Studio](https://developer.android.com/studio)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/gonzalobenedi/coffee-here-app.git
   cd coffee-here-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

## 📱 Development Commands

| Command           | Description                       | Usage                                         |
| ----------------- | --------------------------------- | --------------------------------------------- |
| `npm start`       | Start the Expo development server | Opens the Expo DevTools in your browser       |
| `npm run android` | Start on Android device/emulator  | Requires Android device or emulator           |
| `npm run ios`     | Start on iOS device/simulator     | Requires iOS device or simulator (macOS only) |
| `npm run web`     | Start web version                 | Opens in your default browser                 |
| `npm run lint`    | Run ESLint to check code quality  | Checks for code style and potential issues    |

## 🏗️ Project Structure

```
coffee-here-app/
├── 📱 app/                    # Main app screens and navigation
│   ├── _layout.tsx           # Root layout configuration
│   ├── index.tsx             # Home screen
│   ├── (coffeeStore)/        # Coffee store detail screens
│   └── (tabs)/               # Tab-based navigation screens
├── 🎨 assets/                # Images, fonts, and other assets
├── 🧩 components/            # Reusable React components
│   ├── Cards/                # Card components
│   └── HorizontalScroll/     # Scroll components
├── 📊 data/                  # Static data and mock data
├── 🌐 i18n/                  # Internationalization files
│   ├── en.json               # English translations
│   ├── es.json               # Spanish translations
│   └── dk.json               # Danish translations
├── 📝 models/                # TypeScript interfaces and types
├── 🎨 styles/                # Design tokens and styling
├── 📋 app.json               # Expo configuration
├── 📦 package.json           # Dependencies and scripts
└── ⚙️ tsconfig.json          # TypeScript configuration
```

## 🛠️ Tech Stack

- **Framework:** [Expo](https://expo.dev/) with [React Native](https://reactnative.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction/)
- **Maps:** [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- **Internationalization:** [i18next](https://www.i18next.com/) with [react-i18next](https://react.i18next.com/)
- **Location Services:** [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- **Code Quality:** ESLint + Prettier + Commitlint + Husky

## 🌐 Internationalization

The app supports multiple languages:

- 🇺🇸 English (default)
- 🇪🇸 Spanish
- 🇩🇰 Danish

To add a new language:

1. Create a new JSON file in the `i18n/` directory (e.g., `fr.json`)
2. Add the translations following the existing structure
3. Import and add it to the resources in `i18n/index.ts`

## 🧪 Testing

_Testing setup coming soon..._

## 📝 Code Quality

This project uses several tools to maintain code quality:

- **ESLint** - Code linting and style checking
- **Prettier** - Code formatting
- **Commitlint** - Conventional commit message format
- **Husky** - Git hooks for pre-commit validation
- **TypeScript** - Static type checking

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Follow the commit convention**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new features
- `fix:` bug fixes
- `docs:` documentation changes
- `style:` formatting changes
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**

   ```bash
   npx expo start --clear
   ```

2. **iOS simulator not working**

   - Make sure Xcode is installed and up to date
   - Try resetting the simulator

3. **Android emulator issues**

   - Ensure Android Studio and SDK are properly installed
   - Check that the emulator is running

4. **Location permissions**
   - Make sure location permissions are granted in your device settings

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Gonzalo Benedi** - _Initial work_ - [@gonzalobenedi](https://github.com/gonzalobenedi)

## 🙏 Acknowledgments

- Thanks to the Expo team for the amazing development platform
- Coffee shop data providers
- The React Native community

---

**Ready to find your next favorite coffee shop?** ☕✨

_Built with ❤️ and lots of ☕_
