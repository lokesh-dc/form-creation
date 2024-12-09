# Form Builder Assignment
## Features
### 1. **Form Creation**
- Start with an empty form creation interface.
- Add questions dynamically by selecting input types from the following options:
  1. **Short Answer**
  2. **Long Answer**
  3. **Single Select**
  4. **Number**
  5. **URL**

### 2. **Form Preview**
- See all your created forms in a single place 
- View the created form in a preview mode before filling it out.
- Share the form with your target users & see the data filled in tabular format.

### 3. **Form Filling**
- Display form completeness as a percentage, showing the progress of completed fields.

### 4. **Form Submission**
- Display a success message upon form submission.

## Technologies Used

- **Next.js** - server-side rendering and frontend development.
- **CSS Modules** for styling.

---

## Getting Started

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/lokesh-dc/form-creation.git
   ```

2. Navigate to the project directory:
   ```bash
   cd form-builder
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

### Building for Production

To build the application for production:
```bash
npm run build
```

---

## Project Structure

```
form-builder/
├── Components/      # Reusable UI components
├── backend/         # Reusable utility functionns - form submission & retrieval
├── app/             # Application pages
├── app/             # APIs
├── public/          # Static assets
└── README.md        # Project documentation
```

---

## Implementation Details

### 1. Form Creation
- Users can dynamically add questions to the form by selecting from the 5 predefined input types.
- Each question can be customized with labels, placeholders, and required status.

### 2. Form Preview
- Displays a read-only version of the form for review.
- Ensures proper layout and usability before submission.

### 3. Form Filling
- Tracks the completion of required fields.
- Displays a percentage progress indicator.

### 4. Form Submission
- Validates all fields before submission.
- Shows a success message upon successful submission.

---

## Future Enhancements
- Drag-and-drop functionality to reorder questions.
- Advanced animations for question transitions.
- Additional input types, such as date and file upload.


