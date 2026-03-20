💱 Currency Converter Web Application
<img src="assets/landing_page.png" alt="landing_page">
A simple and interactive Currency Converter Web Application built using HTML, CSS, and JavaScript.
The application allows users to convert currencies in real time using live exchange rates and dynamically displays the country flags corresponding to the selected currencies.

📌 Features
-> 🌍 Convert between multiple international currencies
-> 📡 Fetch real-time exchange rates
-> 🏳️ Automatically display country flags
-> 🔄 Swap currencies using a conversion toggle
-> 🎨 Clean and responsive user interface
-> 📊 Displays the current exchange rate
-> ⚡ Fast and lightweight (no frameworks used)

🛠️ Technologies Used
  -> HTML5:	Structure of the web application
  -> CSS3:	Styling and UI layout
  -> JavaScript (ES6):	Logic and API integration
  -> Font Awesome:	Icons used in the UI
  -> Exchange Rate API:	Fetching real-time currency data
  -> FlagsAPI:	Displaying country flags
  
📂 Project Structure
currency-converter/
│
├── index.html          # Main HTML structure
├── style.css           # Styling file
├── script.js           # JavaScript logic
├── codes.js            # Currency-country mapping
├── README.md           # Project documentation
│
└── assets/
    └── background.jpg  # Background image (optional)
    
⚙️ How It Works

  1. The user enters an amount.
  2. The user selects the source currency.
  3. The user selects the target currency.
  4. When the user clicks Get Exchange Rate:
  5. The application fetches the latest exchange rate from the API.
  6. The rate is calculated dynamically.
  7. The converted value is displayed.
  8. The corresponding country flags update automatically when the currency selection changes.

🌐 APIs Used
  1️. Currency Exchange API

  Base URL:
    https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies

  Example request:
  /usd/inr.json
  
  Example response:
  ```{
    "date": "2026-03-08",
    "inr": 92.10
  }
  ```

  2️. Flags API

  Base URL:
    https://flagsapi.com/{country_code}/flat/64.png
  
  Example:
  
  https://flagsapi.com/US/flat/64.png
  🔁 Currency Flag Mapping
  
  Example:
  ```const country_list = {
    USD: "US",
    INR: "IN",
    EUR: "EU",
    GBP: "GB",
    JPY: "JP"
  };
  ```

🚀 Installation & Setup:

  1️. Clone the Repository
    git clone https://github.com/your-username/currency-converter.git
    
  2️. Navigate to the Project Folder
    cd currency-converter

  3️. Open the Project
    -> VS Code
    -> Any code editor
    -> Live Server extension

  4. Run the Application
      Simply open:
      ```index.html
      ```
      in your browser.
      Or
      run with Live Server.

If you like this project, consider giving it a ⭐ on GitHub.
