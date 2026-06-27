# 🏰 Kanaka Durga Real Estate & Finance Services

> **Amaravathi Capital Region's Premier Real Estate & Trusted Financial Advisory Platform.**
> Engineered for visual excellence, performance, and SEO optimization.

---

## 🌟 Overview

**Kanaka Durga Real Estate** is a premium, high-converting digital storefront designed to showcase premium residential, commercial, and agricultural properties across the **Amaravathi Capital Region** (Andhra Pradesh, India). Additionally, it hosts details of trusted financial advisory services, bank loan processing, and gold retrieval solutions.

The application is built with a **modern glassmorphism design system**, buttery-smooth micro-animations, and high-performance React code, optimized to rank at the top of search engine results.

---

## ⚡ Key Features

*   **🏆 Premium Hero Slider**: An interactive, auto-playing carousel with dynamic slide changes, Outfit typography, gold gradient styling, and custom floating backgrounds.
*   **📈 Animated Stats Counters**: Integrates a custom React-based counter (using `requestAnimationFrame`) that counts up from 0 to target metrics (12+ Years, 7 Prime Locations, etc.) synchronized to fire immediately *after* the custom Preloader fades away.
*   **💬 Double WhatsApp Integration**:
    *   **Enquiry Modal**: A customized validation form that automatically redirects users to a pre-filled WhatsApp message on submit to start chats instantly.
    *   **Hero Button & Float**: Styled WhatsApp direct buttons with a premium green color gradient (`#25D366` to `#128C7E`) and custom hover glow shadows.
*   **📍 7 Prime Locations Grid**: Displays photographic cards of key investment zones (Thullur, Rayapudi, Mandadam, Tadepalli, Velagapudi, Undavalli, and Nelapadu) with the final card perfectly centered and aligned.
*   **🗺️ Coordinates-Based Map Embeds**: Integrated interactive maps utilizing precise office coordinates (`16.546527, 80.481391`) for seamless navigation.
*   **🚀 Vercel Ready**: Custom Single-Page Application (SPA) rewrite rules configured in `vercel.json` to prevent route reload errors in production.

---

## 🛠️ Technology Stack

*   **Framework**: React (Vite-powered for high-performance HMR)
*   **Styling**: Vanilla CSS (Tailored HSL theme colors, custom glassmorphism utilities)
*   **UI Components**: React Bootstrap (Grid/Layout System)
*   **Icons**: React Icons (Fi & Fa libraries)
*   **Animations**: AOS (Animate On Scroll) & Custom CSS keyframes

---

## 🔍 SEO & Visibility Optimization

The application is engineered to achieve high search rankings on search engines (like Google) for queries such as *"Best Real Estates in Guntur, Vijayawada, Amaravathi, and nearby places"*.

*   **LocalBusiness Structured Data**: Rich JSON-LD schema injected into `index.html` detailing coordinates, business categories, contact numbers, and social linkages.
*   **Semantic SEO copywriting**: Native inclusion of regional search terms and heading levels (`H1`-`H6` hierarchy).
*   **Optimized Assets**: Local image compilation and compression to deliver excellent PageSpeed metrics.

---

## 💻 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (LTS version recommended).

### Installation

1. Clone or download the repository contents to your workspace:
   ```bash
   cd "Kanaka Durga Real Estate"
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```
   *The application will boot up at [http://localhost:5173/](http://localhost:5173/) (or the next available port, e.g. `http://localhost:5174/`).*

### Building for Production

To compile a highly optimized production bundle:
```bash
npm run build
```
The output will be generated inside the `/dist` directory, fully ready for upload to hosting platforms like Vercel or Netlify.

---

## 📂 Project Structure

```text
├── public/                 # Static assets (favicons, logos)
├── src/
│   ├── assets/             # Images, logos, and high-res property/location photos
│   ├── components/         # Reusable React components:
│   │   ├── Navbar.jsx      # Glassmorphism navigation bar
│   │   ├── Hero.jsx        # Premium slider and count-up stats
│   │   ├── Services.jsx    # Real estate & financial service catalog
│   │   ├── Locations.jsx   # handpicked regional plots grid
│   │   └── EnquiryModal.js # Form validation and WhatsApp redirection
│   ├── App.jsx             # Main application router and state management
│   ├── index.css           # Premium core CSS design system tokens
│   └── main.jsx            # React root mount point
├── vercel.json             # Vercel deployment configuration
├── package.json            # Scripts & project dependencies
└── README.md               # Documentation
```

---

*Developed with ❤️ for Kanaka Durga Real Estate & Financial Services.*
