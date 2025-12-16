# 💻 Laptop Value Estimator

A machine learning-powered web application that predicts laptop prices based on specifications. Built with Flask and Random Forest Regressor, this tool provides accurate price estimates to help buyers and sellers make informed decisions.

![Laptop Value Estimator](Sample%20images/laptop's%20value.png)

## 🌟 Features

- **Intelligent Price Prediction**: Uses Random Forest Regressor algorithm with ~77% accuracy
- **User-Friendly Interface**: Modern, responsive design with smooth animations
- **Comprehensive Inputs**: Considers multiple factors including:
  - RAM (GB)
  - Weight (kg)
  - Company/Brand
  - Laptop Type (Gaming, Ultrabook, Notebook, etc.)
  - Operating System
  - CPU Type
  - GPU Type
  - Touchscreen capability
  - IPS Display
- **Real-time Results**: Instant price predictions in Euros
- **Form Validation**: Ensures accurate input data
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Tech Stack

**Machine Learning:**
- Python 3.x
- scikit-learn (Random Forest Regressor)
- NumPy
- Pandas
- Pickle (Model serialization)

**Web Development:**
- Flask (Backend framework)
- HTML5/CSS3
- JavaScript (ES6+)
- Jinja2 (Templating)

**Model Performance:**
- Algorithm: Random Forest Regressor
- R² Score: ~0.77 (77% accuracy)
- Dataset: 1,303 laptop records
- Features: 33 encoded features

## 📁 Project Structure

```
laptop-value-estimator/
│
├── model/                          # ML Model and Training
│   ├── laptop_price.csv           # Dataset (1,303 records)
│   ├── price_predictor.ipynb      # Jupyter notebook with model training
│   └── env/                       # Python virtual environment (not in repo)
│
├── website/                        # Flask Web Application
│   ├── app.py                     # Main Flask application
│   ├── model/                     # Trained model storage
│   │   └── predictor.pickle       # Serialized ML model
│   ├── templates/                 # HTML templates
│   │   └── index.html            # Main page
│   ├── static/                    # Static assets
│   │   ├── style.css             # Stylesheet
│   │   └── script.js             # Client-side JavaScript
│   └── env/                       # Python virtual environment (not in repo)
│
├── Sample images/                  # Screenshots
│   └── laptop's value.png         # Application screenshot
│
├── requirements.txt               # Python dependencies
├── .gitignore                     # Git ignore rules
└── README.md                      # Project documentation
```

## 🛠️ Installation

### Prerequisites
- Python 3.7 or higher
- pip (Python package manager)

### Setup Instructions

1. **Clone the repository**
   ```bash
   https://github.com/JKPLakshithaDilshan/Laptop-Value-Estimator.git
   cd Laptop-Value-Estimator
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   # Windows
   python -m venv env
   env\Scripts\activate

   # macOS/Linux
   python3 -m venv env
   source env/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Navigate to the website directory**
   ```bash
   cd website
   ```

5. **Run the application**
   ```bash
   python app.py
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5000`
   - Start predicting laptop prices!

## 📊 Model Training

The model was trained using the following process:

1. **Data Preprocessing:**
   - Cleaned and encoded categorical features
   - Feature engineering for Company, Type, OS, CPU, and GPU
   - Extracted Touchscreen and IPS features from screen resolution
   - Removed outliers and handled missing values

2. **Model Selection:**
   - Tested Linear Regression (R² = 0.697)
   - **Selected Random Forest Regressor (R² = 0.772)** ✓
   - Hyperparameter tuning using GridSearchCV

3. **Features Used:**
   - Numerical: RAM, Weight
   - Binary: Touchscreen, IPS
   - Categorical (One-Hot Encoded): Company, TypeName, OS, CPU, GPU

To retrain the model:
```bash
cd model
jupyter notebook price_predictor.ipynb
```

## 🎯 Usage

1. Fill in the laptop specifications:
   - **RAM**: Memory in GB (e.g., 8, 16, 32)
   - **Weight**: Laptop weight in kg (e.g., 2.0)
   - **Company**: Select from brands like Apple, Dell, HP, Lenovo, etc.
   - **Type**: Choose laptop category (Gaming, Ultrabook, Notebook, etc.)
   - **Operating System**: Windows, macOS, Linux, or Other
   - **CPU**: Processor type (Intel Core i3/i5/i7, AMD, etc.)
   - **GPU**: Graphics card (NVIDIA, AMD, Intel)
   - **Touchscreen**: Check if touchscreen is available
   - **IPS**: Check if IPS display is present

2. Click "Predict Price"

3. View the estimated price in Euros

## 👨‍💻 Author

**Lakshitha Dilshan**
- GitHub: [@yourusername](https://github.com/JKPLakshithaDilshan)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/jkplakshithadilshan)
