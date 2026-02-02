# React Car Showcase Application

A premium, responsive web application built with React, Vite, and Material UI. This project features a luxurious dark and gold aesthetic, delivering a high-end user experience for browsing automotive content.

## 🚀 Features

- **Premium UI/UX**: Custom Material UI theme with a sophisticated "Dark Mode & Gold" color palette (`#D4AF37`).
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices.
- **Navigation**: Intuitive navigation with a sticky navbar.
- **User Authentication**: Sign Up functionality and Authentication Context for managing user state.
- **Dynamic Dashboard**: Interactive dashboard featuring:
  - Search functionality.
  - Car info cards.
  - User information display.
- **Landing Page**: Engaging landing page with a hero carousel.

## 🛠 Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v6+](https://reactrouter.com/)
- **UI Component Library**: [Material UI (MUI) v6+](https://mui.com/)
- **Styling Engine**: [Emotion](https://emotion.sh/)
- **Icons**: [MUI Icons Material](https://mui.com/material-ui/material-icons/)

## 📦 Installation & Setup

Follow these steps to set up the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16 or higher) installed on your machine.

### Steps

1.  **Clone the repository** (or extract the project folder):

    ```bash
    git clone <repository-url>
    cd React-Assignment
    ```

2.  **Install Dependencies**:

    ```bash
    npm install
    ```

3.  **Run the Development Server**:

    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    The application will typically start at `http://localhost:5173`.

## 📂 Project Structure

```bash
src/
├── assets/          # Static assets (images, fonts)
├── components/      # Reusable presentational components
│   ├── CarCard/
│   ├── Carousel/
│   ├── Navbar/
│   ├── SearchBar/
│   ├── SignUpForm/
│   └── UserInfoCard/
├── containers/      # Smart components/Page containers
│   ├── DashboardContainer/
│   ├── LandingContainer/
│   ├── NavbarContainer/
│   └── SignUpContainer/
├── context/         # React Context (e.g., AuthContext)
├── data/            # Mock data files
├── pages/           # Page route components
│   ├── Dashboard/
│   ├── Landing/
│   └── SignUp/
├── App.jsx          # Main application component & Theme definition
└── main.jsx         # App entry point
```

## 🎨 Theme Customization

The application uses a custom MUI Theme defined in `App.jsx`. Key colors include:

- **Primary**: Metallic Gold (`#D4AF37`)
- **Background**: Pure Black (`#000000`)
- **Typography**: Inter / Roboto

## 📜 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

---

_Created as part of a React JS Assignment._
