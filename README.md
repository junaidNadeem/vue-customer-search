# Customer Search Modal

A responsive Vue2-based customer search modal component that allows users to search and view customers from a list. The component features a modern design with error handling, and responsive layout.

## Features

- Customer search functionality
- Responsive design for tablet and desktop screens
- Vuex state management
- Loading states and error handling
- Mock API integration with axios
- SCSS styling with variables and mixins

## Requirements

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/vue-customer-search.git
cd vue-customer-search
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run serve
# or
yarn serve
```

4. Build for production:

```bash
npm run build
# or
yarn build
```

## Project Structure

```
vue-customer-search/
├── public/
│   └── mock-data.json
├── src/
│   ├── api/
│   │   └── customers.js
│   ├── assets/
│   ├── components/
│   │   ├── CustomerList.vue
│   │   ├── ModalContainer.vue
│   │   └── SearchBar.vue
│   ├── store/
│   │   └── index.js
│   ├── styles/
│   │   └── variables.scss
│   ├── views/
│   │   └── CustomerModal.vue
│   ├── App.vue
│   └── main.js
├── package.json
└── vue.config.js
```

## Component Features

### ModalContainer

- Centered positioning
- Minimum 32px padding from screen edges
- Vertical scrolling for overflow content
- Responsive width (80% with max-width of 800px)

### CustomerList

- Grid layout for customer items
- Truncation for long text
- Fixed size initials square
- Verified badge for approved customers
- Hover effects and transitions

### SearchBar

- Search functionality
- Search by ID or name
- Results count display

## State Management

The project uses Vuex for state management with the following structure:

- State:

  - customers: Array of customer objects
  - loading: Boolean for loading state
  - error: String for error messages

- Actions:

  - fetchCustomers: Fetches customer data from API

- Getters:
  - filteredCustomers: Filters customers based on search query

## API Integration

The project simulates API calls using axios and mock data:

```javascript
const getCustomers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { data: mockData.result };
};
```

## Styling

The project uses SCSS with a comprehensive variables system:

- Colors
- Spacing
- Border radius
- Font weights
- Transitions
