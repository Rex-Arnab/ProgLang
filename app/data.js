const reactLevels = [
    {
      id: 31,
      title: "Hello React",
      description: "Create your first React component",
      task: "Create a component that returns an h1 with 'Hello React!'",
      expectedOutput: "<h1>Hello React!</h1>",
      hint: "Use JSX to return HTML-like syntax in your component",
      solution: "function HelloReact() {\n  return <h1>Hello React!</h1>;\n}\n\nReactDOM.render(<HelloReact />, document.body);",
      explanation: "React components return JSX, which looks like HTML but is JavaScript."
    },
    {
      id: 32,
      title: "JSX Variables",
      description: "Use JavaScript variables in JSX",
      task: "Create a component that displays 'Welcome John' using a variable",
      expectedOutput: "<h1>Welcome John</h1>",
      hint: "Use curly braces {} to embed JavaScript in JSX",
      solution: "function Welcome() {\n  const name = 'John';\n  return <h1>Welcome {name}</h1>;\n}\n\nReactDOM.render(<Welcome />, document.body);",
      explanation: "Curly braces allow you to embed any JavaScript expression in JSX."
    },
    {
      id: 33,
      title: "React Props",
      description: "Pass data to components with props",
      task: "Create a Greeting component that accepts a 'name' prop and shows 'Hi Alice'",
      expectedOutput: "<p>Hi Alice</p>",
      hint: "Props are passed as parameters to function components",
      solution: "function Greeting(props) {\n  return <p>Hi {props.name}</p>;\n}\n\nReactDOM.render(<Greeting name=\"Alice\" />, document.body);",
      explanation: "Props allow you to pass data from parent to child components."
    },
    {
      id: 34,
      title: "useState Hook",
      description: "Manage component state with useState",
      task: "Create a counter that starts at 0 and shows the count",
      expectedOutput: "<button>Count: 0</button>",
      hint: "Import useState from React and use it to create state",
      solution: "const { useState } = React;\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button>Count: {count}</button>;\n}\n\nReactDOM.render(<Counter />, document.body);",
      explanation: "useState returns an array with the current state and a setter function."
    },
    {
      id: 35,
      title: "Event Handling",
      description: "Handle user interactions in React",
      task: "Create a button that increments count when clicked",
      expectedOutput: "<button>Clicks: 1</button>",
      hint: "Use onClick event handler and state setter function",
      solution: "const { useState } = React;\n\nfunction ClickButton() {\n  const [clicks, setClicks] = useState(0);\n  return <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>;\n}\n\nReactDOM.render(<ClickButton />, document.body);",
      explanation: "Event handlers in React use camelCase and accept functions."
    },
    {
      id: 36,
      title: "Conditional Rendering",
      description: "Show different content based on conditions",
      task: "Show 'Logged In' if user is true, 'Please Login' otherwise",
      expectedOutput: "<p>Logged In</p>",
      hint: "Use ternary operator or && for conditional rendering",
      solution: "function LoginStatus() {\n  const user = true;\n  return <p>{user ? 'Logged In' : 'Please Login'}</p>;\n}\n\nReactDOM.render(<LoginStatus />, document.body);",
      explanation: "JSX supports JavaScript expressions including conditional operators."
    },
    {
      id: 37,
      title: "Lists and Keys",
      description: "Render lists of data in React",
      task: "Render a list of fruits: ['apple', 'banana', 'orange']",
      expectedOutput: "<ul><li>apple</li><li>banana</li><li>orange</li></ul>",
      hint: "Use map() to transform array into JSX elements",
      solution: "function FruitList() {\n  const fruits = ['apple', 'banana', 'orange'];\n  return (\n    <ul>\n      {fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}\n    </ul>\n  );\n}\n\nReactDOM.render(<FruitList />, document.body);",
      explanation: "Use map() to render arrays and always provide a key prop."
    },
    {
      id: 38,
      title: "useEffect Hook",
      description: "Handle side effects in React",
      task: "Use useEffect to set document title to 'React App'",
      expectedOutput: "Document title changed",
      hint: "useEffect runs after component renders",
      solution: "const { useEffect } = React;\n\nfunction App() {\n  useEffect(() => {\n    document.title = 'React App';\n  }, []);\n  return <div>Document title changed</div>;\n}\n\nReactDOM.render(<App />, document.body);",
      explanation: "useEffect handles side effects like DOM updates, API calls, etc."
    },
    {
      id: 39,
      title: "Form Inputs",
      description: "Handle form inputs with controlled components",
      task: "Create an input that shows typed text below it",
      expectedOutput: "<div><input /><p>Hello</p></div>",
      hint: "Use value and onChange props for controlled inputs",
      solution: "const { useState } = React;\n\nfunction TextInput() {\n  const [text, setText] = useState('Hello');\n  return (\n    <div>\n      <input value={text} onChange={(e) => setText(e.target.value)} />\n      <p>{text}</p>\n    </div>\n  );\n}\n\nReactDOM.render(<TextInput />, document.body);",
      explanation: "Controlled components sync input value with React state."
    },
    {
      id: 40,
      title: "Component Composition",
      description: "Combine components to build complex UIs",
      task: "Create a Card component with Header and Body components",
      expectedOutput: "<div><h2>Title</h2><p>Content</p></div>",
      hint: "Break UI into smaller, reusable components",
      solution: "function Header() {\n  return <h2>Title</h2>;\n}\n\nfunction Body() {\n  return <p>Content</p>;\n}\n\nfunction Card() {\n  return (\n    <div>\n      <Header />\n      <Body />\n    </div>\n  );\n}\n\nReactDOM.render(<Card />, document.body);",
      explanation: "Component composition allows building complex UIs from simple components."
    },
    {
      id: 41,
      title: "Props Destructuring",
      description: "Destructure props for cleaner code",
      task: "Create UserCard that destructures name and age props",
      expectedOutput: "<div><h3>John</h3><p>25 years old</p></div>",
      hint: "Destructure props in function parameters: {name, age}",
      solution: "function UserCard({name, age}) {\n  return (\n    <div>\n      <h3>{name}</h3>\n      <p>{age} years old</p>\n    </div>\n  );\n}\n\nReactDOM.render(<UserCard name=\"John\" age={25} />, document.body);",
      explanation: "Destructuring props makes component code cleaner and more readable."
    },
    {
      id: 42,
      title: "Custom Hooks",
      description: "Create reusable stateful logic",
      task: "Create useCounter hook that returns count and increment function",
      expectedOutput: "<button>Count: 0</button>",
      hint: "Custom hooks are functions that use other hooks",
      solution: "const { useState } = React;\n\nfunction useCounter(initial = 0) {\n  const [count, setCount] = useState(initial);\n  const increment = () => setCount(count + 1);\n  return [count, increment];\n}\n\nfunction Counter() {\n  const [count, increment] = useCounter();\n  return <button onClick={increment}>Count: {count}</button>;\n}\n\nReactDOM.render(<Counter />, document.body);",
      explanation: "Custom hooks let you reuse stateful logic between components."
    },
    {
      id: 43,
      title: "Context API",
      description: "Share data across component tree",
      task: "Create a theme context and use it in a component",
      expectedOutput: "<p style=\"color: blue;\">Dark Theme</p>",
      hint: "Use createContext and useContext hooks",
      solution: "const { createContext, useContext } = React;\n\nconst ThemeContext = createContext();\n\nfunction ThemedText() {\n  const theme = useContext(ThemeContext);\n  return <p style={{color: 'blue'}}>{theme} Theme</p>;\n}\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"Dark\">\n      <ThemedText />\n    </ThemeContext.Provider>\n  );\n}\n\nReactDOM.render(<App />, document.body);",
      explanation: "Context provides a way to share data without prop drilling."
    },
    {
      id: 44,
      title: "Error Boundaries",
      description: "Handle errors gracefully in React",
      task: "Create an error boundary that catches errors",
      expectedOutput: "<div>Something went wrong</div>",
      hint: "Error boundaries use componentDidCatch lifecycle method",
      solution: "class ErrorBoundary extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { hasError: false };\n  }\n\n  static getDerivedStateFromError(error) {\n    return { hasError: true };\n  }\n\n  render() {\n    if (this.state.hasError) {\n      return <div>Something went wrong</div>;\n    }\n    return this.props.children;\n  }\n}\n\nReactDOM.render(<ErrorBoundary><div>App</div></ErrorBoundary>, document.body);",
      explanation: "Error boundaries catch JavaScript errors in component tree."
    },
    {
      id: 45,
      title: "React Performance",
      description: "Optimize React apps with React.memo",
      task: "Create a memoized component that only re-renders when props change",
      expectedOutput: "<p>Optimized: Hello</p>",
      hint: "Wrap component with React.memo for optimization",
      solution: "const OptimizedComponent = React.memo(function({text}) {\n  return <p>Optimized: {text}</p>;\n});\n\nfunction App() {\n  return <OptimizedComponent text=\"Hello\" />;\n}\n\nReactDOM.render(<App />, document.body);",
      explanation: "React.memo prevents unnecessary re-renders when props haven't changed."
    }
  ];

  const expressLevels = [
    {
      id: 46,
      title: "Hello Express",
      description: "Create your first Express server",
      task: "Create a basic Express server that responds with 'Hello Express!'",
      expectedOutput: "Hello Express!",
      hint: "Use app.get() to handle GET requests",
      solution: "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello Express!');\n});\n\napp.listen(3000);\nconsole.log('Hello Express!');",
      explanation: "Express.js is a minimal web framework for Node.js applications."
    },
    {
      id: 47,
      title: "Route Parameters",
      description: "Handle dynamic routes with parameters",
      task: "Create a route /user/:name that responds with 'Hello John'",
      expectedOutput: "Hello John",
      hint: "Use req.params to access route parameters",
      solution: "const express = require('express');\nconst app = express();\n\napp.get('/user/:name', (req, res) => {\n  res.send(`Hello ${req.params.name}`);\n});\n\n// Simulate request\nconsole.log('Hello John');",
      explanation: "Route parameters are defined with : and accessed via req.params."
    },
    {
      id: 48,
      title: "Query Parameters",
      description: "Handle URL query parameters",
      task: "Create route that responds with query param 'age': 'You are 25'",
      expectedOutput: "You are 25",
      hint: "Use req.query to access query parameters",
      solution: "const express = require('express');\nconst app = express();\n\napp.get('/info', (req, res) => {\n  res.send(`You are ${req.query.age}`);\n});\n\n// Simulate request with ?age=25\nconsole.log('You are 25');",
      explanation: "Query parameters are accessed through req.query object."
    },
    {
      id: 49,
      title: "POST Requests",
      description: "Handle POST requests with body data",
      task: "Create POST /users that responds with received name data",
      expectedOutput: "User created: Alice",
      hint: "Use express.json() middleware and req.body",
      solution: "const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.post('/users', (req, res) => {\n  res.send(`User created: ${req.body.name}`);\n});\n\n// Simulate POST request\nconsole.log('User created: Alice');",
      explanation: "express.json() middleware parses JSON request bodies."
    },
    {
      id: 50,
      title: "Middleware",
      description: "Use middleware for request processing",
      task: "Create logging middleware that logs 'Request received'",
      expectedOutput: "Request received",
      hint: "Middleware functions have (req, res, next) parameters",
      solution: "const express = require('express');\nconst app = express();\n\nconst logger = (req, res, next) => {\n  console.log('Request received');\n  next();\n};\n\napp.use(logger);\n\napp.get('/', (req, res) => {\n  res.send('Hello');\n});\n\n// Output from middleware\nconsole.log('Request received');",
      explanation: "Middleware functions execute during the request-response cycle."
    },
    {
      id: 51,
      title: "Error Handling",
      description: "Handle errors in Express applications",
      task: "Create error handling middleware that responds with 'Error occurred'",
      expectedOutput: "Error occurred",
      hint: "Error middleware has (err, req, res, next) parameters",
      solution: "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  throw new Error('Something went wrong');\n});\n\napp.use((err, req, res, next) => {\n  res.status(500).send('Error occurred');\n});\n\nconsole.log('Error occurred');",
      explanation: "Error handling middleware catches and processes application errors."
    },
    {
      id: 52,
      title: "Static Files",
      description: "Serve static files with Express",
      task: "Serve static files from 'public' directory",
      expectedOutput: "Static files served",
      hint: "Use express.static() middleware",
      solution: "const express = require('express');\nconst app = express();\n\napp.use(express.static('public'));\n\napp.get('/', (req, res) => {\n  res.send('Static files served');\n});\n\nconsole.log('Static files served');",
      explanation: "express.static() serves static files like CSS, images, and JavaScript."
    },
    {
      id: 53,
      title: "Router Module",
      description: "Organize routes with Express Router",
      task: "Create a router with /api/users route returning 'Users API'",
      expectedOutput: "Users API",
      hint: "Use express.Router() to create modular routes",
      solution: "const express = require('express');\nconst app = express();\nconst router = express.Router();\n\nrouter.get('/users', (req, res) => {\n  res.send('Users API');\n});\n\napp.use('/api', router);\n\nconsole.log('Users API');",
      explanation: "Express Router helps organize routes into modular, mountable handlers."
    },
    {
      id: 54,
      title: "Template Engines",
      description: "Render dynamic content with templates",
      task: "Use template to render 'Welcome to Express App'",
      expectedOutput: "Welcome to Express App",
      hint: "Templates combine HTML with dynamic data",
      solution: "const express = require('express');\nconst app = express();\n\napp.set('view engine', 'ejs');\n\napp.get('/', (req, res) => {\n  res.render('index', { title: 'Express App' });\n});\n\n// Simulated template output\nconsole.log('Welcome to Express App');",
      explanation: "Template engines like EJS render dynamic HTML with server data."
    },
    {
      id: 55,
      title: "Database Connection",
      description: "Connect Express to a database",
      task: "Create a simple user model and return user data",
      expectedOutput: "{\"id\":1,\"name\":\"John\"}",
      hint: "Simulate database operations with objects",
      solution: "const express = require('express');\nconst app = express();\n\n// Simulated database\nconst users = [{ id: 1, name: 'John' }];\n\napp.get('/api/users/:id', (req, res) => {\n  const user = users.find(u => u.id == req.params.id);\n  res.json(user);\n});\n\nconsole.log(JSON.stringify({ id: 1, name: 'John' }));",
      explanation: "Express apps typically connect to databases to store and retrieve data."
    },
    {
      id: 56,
      title: "CORS Handling",
      description: "Handle Cross-Origin Resource Sharing",
      task: "Enable CORS for your Express API",
      expectedOutput: "CORS enabled",
      hint: "Use cors middleware or set headers manually",
      solution: "const express = require('express');\nconst app = express();\n\napp.use((req, res, next) => {\n  res.header('Access-Control-Allow-Origin', '*');\n  res.header('Access-Control-Allow-Headers', '*');\n  next();\n});\n\napp.get('/api/data', (req, res) => {\n  res.json({ message: 'CORS enabled' });\n});\n\nconsole.log('CORS enabled');",
      explanation: "CORS headers allow your API to be accessed from different domains."
    },
    {
      id: 57,
      title: "Authentication",
      description: "Implement basic authentication",
      task: "Create login route that validates credentials",
      expectedOutput: "Login successful",
      hint: "Check username and password in request body",
      solution: "const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.post('/login', (req, res) => {\n  const { username, password } = req.body;\n  if (username === 'user' && password === 'pass') {\n    res.send('Login successful');\n  } else {\n    res.status(401).send('Invalid credentials');\n  }\n});\n\nconsole.log('Login successful');",
      explanation: "Authentication verifies user credentials before granting access."
    },
    {
      id: 58,
      title: "Session Management",
      description: "Manage user sessions in Express",
      task: "Create session-based user tracking",
      expectedOutput: "Session created",
      hint: "Use express-session middleware for session handling",
      solution: "const express = require('express');\nconst app = express();\n\n// Simulated session middleware\napp.use((req, res, next) => {\n  req.session = { user: null };\n  next();\n});\n\napp.post('/login', (req, res) => {\n  req.session.user = { id: 1, name: 'User' };\n  res.send('Session created');\n});\n\nconsole.log('Session created');",
      explanation: "Sessions store user data across multiple requests."
    },
    {
      id: 59,
      title: "API Validation",
      description: "Validate request data in Express",
      task: "Validate that POST data has required 'email' field",
      expectedOutput: "Valid email",
      hint: "Check if required fields exist in req.body",
      solution: "const express = require('express');\nconst app = express();\n\napp.use(express.json());\n\napp.post('/users', (req, res) => {\n  if (!req.body.email) {\n    return res.status(400).send('Email required');\n  }\n  res.send('Valid email');\n});\n\n// Simulate valid request\nconsole.log('Valid email');",
      explanation: "Input validation ensures data integrity and security."
    },
    {
      id: 60,
      title: "REST API Design",
      description: "Build a complete REST API",
      task: "Create CRUD operations for users resource",
      expectedOutput: "REST API complete",
      hint: "Implement GET, POST, PUT, DELETE for /users",
      solution: "const express = require('express');\nconst app = express();\napp.use(express.json());\n\nlet users = [];\n\napp.get('/users', (req, res) => res.json(users));\napp.post('/users', (req, res) => {\n  users.push(req.body);\n  res.status(201).json(req.body);\n});\napp.put('/users/:id', (req, res) => {\n  // Update user logic\n  res.json(req.body);\n});\napp.delete('/users/:id', (req, res) => {\n  // Delete user logic\n  res.status(204).send();\n});\n\nconsole.log('REST API complete');",
      explanation: "REST APIs follow conventions for resource manipulation using HTTP methods."
    }
  ];

  const tailwindLevels = [
    {
      id: 61,
      title: "Hello Tailwind",
      description: "Apply your first Tailwind classes",
      task: "Create a blue text heading saying 'Hello Tailwind'",
      expectedOutput: "<h1 class=\"text-blue-500\">Hello Tailwind</h1>",
      hint: "Use text-blue-500 class for blue text",
      solution: "<h1 class=\"text-blue-500\">Hello Tailwind</h1>",
      explanation: "Tailwind uses utility classes like text-{color}-{shade} for styling."
    },
    {
      id: 62,
      title: "Layout Basics",
      description: "Use Tailwind for basic layout",
      task: "Create a centered container with padding",
      expectedOutput: "<div class=\"container mx-auto p-4\">Content</div>",
      hint: "Use container, mx-auto for center, p-4 for padding",
      solution: "<div class=\"container mx-auto p-4\">Content</div>",
      explanation: "mx-auto centers elements horizontally, p-4 adds padding."
    },
    {
      id: 63,
      title: "Flexbox Layout",
      description: "Create flexible layouts with Flexbox",
      task: "Create a flex container with centered items",
      expectedOutput: "<div class=\"flex justify-center items-center\">Centered</div>",
      hint: "Use flex, justify-center, items-center",
      solution: "<div class=\"flex justify-center items-center\">Centered</div>",
      explanation: "Flexbox utilities make layout alignment simple and intuitive."
    },
    {
      id: 64,
      title: "Grid System",
      description: "Build layouts with CSS Grid",
      task: "Create a 3-column grid layout",
      expectedOutput: "<div class=\"grid grid-cols-3 gap-4\">Grid</div>",
      hint: "Use grid, grid-cols-3, gap-4",
      solution: "<div class=\"grid grid-cols-3 gap-4\">\n  <div>Item 1</div>\n  <div>Item 2</div>\n  <div>Item 3</div>\n</div>",
      explanation: "Grid utilities provide powerful layout control with simple classes."
    },
    {
      id: 65,
      title: "Colors and Backgrounds",
      description: "Style with colors and backgrounds",
      task: "Create a card with white background and gray border",
      expectedOutput: "<div class=\"bg-white border border-gray-300\">Card</div>",
      hint: "Use bg-white, border, border-gray-300",
      solution: "<div class=\"bg-white border border-gray-300 p-4 rounded\">\n  <p>Card content</p>\n</div>",
      explanation: "Color utilities follow a consistent naming pattern across all properties."
    },
    {
      id: 66,
      title: "Typography",
      description: "Style text with Tailwind",
      task: "Create large, bold, center-aligned text",
      expectedOutput: "<h1 class=\"text-4xl font-bold text-center\">Big Title</h1>",
      hint: "Use text-4xl, font-bold, text-center",
      solution: "<h1 class=\"text-4xl font-bold text-center\">Big Title</h1>",
      explanation: "Typography utilities provide complete control over text appearance."
    },
    {
      id: 67,
      title: "Spacing System",
      description: "Master Tailwind's spacing scale",
      task: "Create element with margin top 8 and padding 6",
      expectedOutput: "<div class=\"mt-8 p-6\">Spaced content</div>",
      hint: "Use mt-8 for margin-top, p-6 for padding",
      solution: "<div class=\"mt-8 p-6 bg-gray-100\">\n  <p>Spaced content</p>\n</div>",
      explanation: "Spacing scale uses consistent increments across margin and padding."
    },
    {
      id: 68,
      title: "Responsive Design",
      description: "Build responsive layouts",
      task: "Create text that's small on mobile, large on desktop",
      expectedOutput: "<p class=\"text-sm md:text-lg\">Responsive text</p>",
      hint: "Use text-sm md:text-lg for responsive sizing",
      solution: "<p class=\"text-sm md:text-lg\">Responsive text</p>",
      explanation: "Responsive prefixes like md: apply styles at specific breakpoints."
    },
    {
      id: 69,
      title: "Hover Effects",
      description: "Add interactive hover states",
      task: "Create button that changes color on hover",
      expectedOutput: "<button class=\"bg-blue-500 hover:bg-blue-600\">Hover me</button>",
      hint: "Use hover: prefix for hover states",
      solution: "<button class=\"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded\">\n  Hover me\n</button>",
      explanation: "State variants like hover: provide interactive feedback."
    },
    {
      id: 70,
      title: "Forms Styling",
      description: "Style form elements with Tailwind",
      task: "Create styled input with focus ring",
      expectedOutput: "<input class=\"border rounded px-3 py-2 focus:ring-2\">",
      hint: "Use border, rounded, px-3, py-2, focus:ring-2",
      solution: "<input type=\"text\" class=\"border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none\" placeholder=\"Enter text\">",
      explanation: "Form utilities provide consistent styling across all input types."
    },
    {
      id: 71,
      title: "Component Patterns",
      description: "Build reusable component patterns",
      task: "Create a card component with shadow and rounded corners",
      expectedOutput: "<div class=\"bg-white rounded-lg shadow-md p-6\">Card</div>",
      hint: "Combine bg-white, rounded-lg, shadow-md, p-6",
      solution: "<div class=\"bg-white rounded-lg shadow-md p-6\">\n  <h3 class=\"text-lg font-semibold mb-2\">Card Title</h3>\n  <p class=\"text-gray-600\">Card content goes here.</p>\n</div>",
      explanation: "Combining utilities creates reusable component patterns."
    },
    {
      id: 72,
      title: "Animation Classes",
      description: "Add animations with Tailwind",
      task: "Create element with spin animation",
      expectedOutput: "<div class=\"animate-spin\">⚡</div>",
      hint: "Use animate-spin for spinning animation",
      solution: "<div class=\"animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full\"></div>",
      explanation: "Animation utilities provide common animations out of the box."
    },
    {
      id: 73,
      title: "Dark Mode",
      description: "Implement dark mode with Tailwind",
      task: "Create text that's black in light mode, white in dark mode",
      expectedOutput: "<p class=\"text-black dark:text-white\">Mode-aware text</p>",
      hint: "Use dark: prefix for dark mode styles",
      solution: "<div class=\"bg-white dark:bg-gray-800 p-4\">\n  <p class=\"text-black dark:text-white\">Mode-aware text</p>\n</div>",
      explanation: "Dark mode variants use the dark: prefix for alternate color schemes."
    },
    {
      id: 74,
      title: "Custom Properties",
      description: "Extend Tailwind with custom values",
      task: "Create element with custom spacing using arbitrary values",
      expectedOutput: "<div class=\"p-[17px]\">Custom spacing</div>",
      hint: "Use square brackets for arbitrary values: p-[17px]",
      solution: "<div class=\"p-[17px] bg-gray-100 border border-gray-300\">\n  <p>Custom spacing of 17px</p>\n</div>",
      explanation: "Arbitrary values in square brackets let you use any CSS value."
    },
    {
      id: 75,
      title: "Advanced Layout",
      description: "Create complex layouts combining techniques",
      task: "Build a responsive card grid with hover effects",
      expectedOutput: "<div class=\"grid md:grid-cols-2 gap-4\">Cards</div>",
      hint: "Combine grid, responsive breakpoints, and hover effects",
      solution: "<div class=\"grid md:grid-cols-2 lg:grid-cols-3 gap-4\">\n  <div class=\"bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6\">\n    <h3 class=\"text-lg font-semibold mb-2\">Card 1</h3>\n    <p class=\"text-gray-600\">Card content</p>\n  </div>\n</div>",
      explanation: "Advanced layouts combine multiple Tailwind concepts for rich user interfaces."
    }
  ];

  const pythonLevels = [
    {
      id: 1,
      title: "Hello World",
      description: "Learn to output text in Python",
      task: "Write a program that prints 'Hello, World!'",
      expectedOutput: "Hello, World!",
      hint: "Use the print() function to display text",
      solution: "print('Hello, World!')",
      explanation: "The print() function displays text to the console. Text must be wrapped in quotes."
    },
    {
      id: 2,
      title: "Variables",
      description: "Store and use data in variables",
      task: "Create a variable 'name' with your name and print it",
      expectedOutput: "Alice",
      hint: "Variables store data. Use name = 'YourName' then print(name)",
      solution: "name = 'Alice'\nprint(name)",
      explanation: "Variables are containers for storing data. Use = to assign values."
    },
    {
      id: 3,
      title: "Math Operations",
      description: "Perform calculations with Python",
      task: "Calculate and print the result of 15 + 25",
      expectedOutput: "40",
      hint: "Python can do math! Use + for addition",
      solution: "result = 15 + 25\nprint(result)",
      explanation: "Python supports arithmetic operations: +, -, *, /, and more."
    },
    {
      id: 4,
      title: "String Concatenation",
      description: "Combine text strings together",
      task: "Combine 'Hello' and 'Python' with a space and print the result",
      expectedOutput: "Hello Python",
      hint: "Use + to join strings, don't forget the space!",
      solution: "greeting = 'Hello' + ' ' + 'Python'\nprint(greeting)",
      explanation: "String concatenation joins text together using the + operator."
    },
    {
      id: 5,
      title: "User Input",
      description: "Get input from users",
      task: "Ask for user's age and print 'You are X years old'",
      expectedOutput: "You are 25 years old",
      hint: "Use input() to get user data, then combine with text",
      solution: "age = input('Enter your age: ')\nprint('You are ' + age + ' years old')",
      explanation: "input() function gets text from the user. Always returns a string."
    },
    {
      id: 6,
      title: "If Statements",
      description: "Make decisions in your code",
      task: "Check if a number (15) is greater than 10 and print 'Big number!'",
      expectedOutput: "Big number!",
      hint: "Use if statement: if condition: then do something",
      solution: "number = 15\nif number > 10:\n    print('Big number!')",
      explanation: "If statements execute code only when a condition is true. Mind the indentation!"
    },
    {
      id: 7,
      title: "Else Statements",
      description: "Handle alternative conditions",
      task: "Check if 5 > 10, if true print 'Yes', else print 'No'",
      expectedOutput: "No",
      hint: "Use if-else: if condition: do this, else: do that",
      solution: "if 5 > 10:\n    print('Yes')\nelse:\n    print('No')",
      explanation: "Else provides an alternative when the if condition is false."
    },
    {
      id: 8,
      title: "Lists",
      description: "Store multiple items in a list",
      task: "Create a list with fruits ['apple', 'banana', 'orange'] and print it",
      expectedOutput: "['apple', 'banana', 'orange']",
      hint: "Lists use square brackets and commas: [item1, item2, item3]",
      solution: "fruits = ['apple', 'banana', 'orange']\nprint(fruits)",
      explanation: "Lists store multiple items in a single variable, enclosed in square brackets."
    },
    {
      id: 9,
      title: "List Access",
      description: "Access individual items in a list",
      task: "Print the first item from the list ['red', 'green', 'blue']",
      expectedOutput: "red",
      hint: "Use index 0 for the first item: list[0]",
      solution: "colors = ['red', 'green', 'blue']\nprint(colors[0])",
      explanation: "List indexing starts at 0. colors[0] gets the first item."
    },
    {
      id: 10,
      title: "For Loops",
      description: "Repeat code for each item",
      task: "Loop through [1, 2, 3] and print each number",
      expectedOutput: "1\n2\n3",
      hint: "Use for item in list: then print(item)",
      solution: "numbers = [1, 2, 3]\nfor num in numbers:\n    print(num)",
      explanation: "For loops iterate through each item in a sequence."
    },
    {
      id: 11,
      title: "While Loops",
      description: "Repeat code while condition is true",
      task: "Print numbers 1 to 3 using a while loop",
      expectedOutput: "1\n2\n3",
      hint: "Start with i=1, while i<=3: print(i), then i=i+1",
      solution: "i = 1\nwhile i <= 3:\n    print(i)\n    i = i + 1",
      explanation: "While loops continue as long as the condition remains true."
    },
    {
      id: 12,
      title: "Functions",
      description: "Create reusable code blocks",
      task: "Define a function 'greet' that prints 'Hello!' and call it",
      expectedOutput: "Hello!",
      hint: "Use def function_name(): then call function_name()",
      solution: "def greet():\n    print('Hello!')\n\ngreet()",
      explanation: "Functions are reusable blocks of code defined with 'def'."
    },
    {
      id: 13,
      title: "Function Parameters",
      description: "Pass data to functions",
      task: "Create function 'say_hello' with name parameter, call with 'World'",
      expectedOutput: "Hello, World!",
      hint: "def function(parameter): then use parameter inside",
      solution: "def say_hello(name):\n    print('Hello, ' + name + '!')\n\nsay_hello('World')",
      explanation: "Parameters allow functions to accept input data."
    },
    {
      id: 14,
      title: "Return Values",
      description: "Functions can return results",
      task: "Create function 'add' that returns sum of 5 and 3, print result",
      expectedOutput: "8",
      hint: "Use 'return' to send back a value from function",
      solution: "def add(a, b):\n    return a + b\n\nresult = add(5, 3)\nprint(result)",
      explanation: "Return statements send values back from functions."
    },
    {
      id: 15,
      title: "Dictionaries",
      description: "Store key-value pairs",
      task: "Create dict with 'name': 'Python' and print the name value",
      expectedOutput: "Python",
      hint: "Use {key: value} format, access with dict[key]",
      solution: "person = {'name': 'Python'}\nprint(person['name'])",
      explanation: "Dictionaries store data as key-value pairs in curly braces."
    }
  ];

  const javascriptLevels = [
    {
      id: 16,
      title: "Hello JavaScript",
      description: "Output text in JavaScript",
      task: "Write code that outputs 'Hello, JavaScript!'",
      expectedOutput: "Hello, JavaScript!",
      hint: "Use console.log() to display text",
      solution: "console.log('Hello, JavaScript!');",
      explanation: "console.log() displays text to the console. Don't forget the semicolon!"
    },
    {
      id: 17,
      title: "Variables in JS",
      description: "Declare and use variables",
      task: "Create a variable 'message' with 'Learning JS' and log it",
      expectedOutput: "Learning JS",
      hint: "Use let or const to declare variables",
      solution: "let message = 'Learning JS';\nconsole.log(message);",
      explanation: "Use 'let' for variables that can change, 'const' for constants."
    },
    {
      id: 18,
      title: "Numbers in JS",
      description: "Work with numeric data",
      task: "Calculate and log the result of 20 * 3",
      expectedOutput: "60",
      hint: "JavaScript can do math operations like * for multiplication",
      solution: "let result = 20 * 3;\nconsole.log(result);",
      explanation: "JavaScript supports all basic math operations: +, -, *, /, %."
    },
    {
      id: 19,
      title: "String Templates",
      description: "Use template literals for strings",
      task: "Use template literal to log 'The answer is 42'",
      expectedOutput: "The answer is 42",
      hint: "Use backticks `` and ${} for variables in template literals",
      solution: "let answer = 42;\nconsole.log(`The answer is ${answer}`);",
      explanation: "Template literals use backticks and ${} for embedding expressions."
    },
    {
      id: 20,
      title: "Arrays in JS",
      description: "Create and use arrays",
      task: "Create array ['JavaScript', 'React', 'Node'] and log it",
      expectedOutput: "['JavaScript', 'React', 'Node']",
      hint: "Arrays use square brackets with comma-separated values",
      solution: "let technologies = ['JavaScript', 'React', 'Node'];\nconsole.log(technologies);",
      explanation: "Arrays store multiple values in a single variable."
    },
    {
      id: 21,
      title: "Array Methods",
      description: "Use array methods to manipulate data",
      task: "Add 'Vue' to array ['React'] and log the result",
      expectedOutput: "['React', 'Vue']",
      hint: "Use the push() method to add items to an array",
      solution: "let frameworks = ['React'];\nframeworks.push('Vue');\nconsole.log(frameworks);",
      explanation: "Array methods like push() add elements to the end of an array."
    },
    {
      id: 22,
      title: "Objects in JS",
      description: "Create and access object properties",
      task: "Create object with property 'language': 'JavaScript' and log the language",
      expectedOutput: "JavaScript",
      hint: "Objects use curly braces {key: value}, access with object.key",
      solution: "let course = {language: 'JavaScript'};\nconsole.log(course.language);",
      explanation: "Objects store data as key-value pairs and are accessed with dot notation."
    },
    {
      id: 23,
      title: "If Statements in JS",
      description: "Make conditional decisions",
      task: "Check if 10 > 5 and log 'Correct!' if true",
      expectedOutput: "Correct!",
      hint: "Use if (condition) { code } syntax",
      solution: "if (10 > 5) {\n    console.log('Correct!');\n}",
      explanation: "If statements in JavaScript use parentheses for conditions and braces for code blocks."
    },
    {
      id: 24,
      title: "Functions in JS",
      description: "Create reusable functions",
      task: "Create function 'welcome' that logs 'Welcome to JS!' and call it",
      expectedOutput: "Welcome to JS!",
      hint: "Use function name() {} syntax",
      solution: "function welcome() {\n    console.log('Welcome to JS!');\n}\nwelcome();",
      explanation: "Functions are declared with the 'function' keyword followed by parentheses and braces."
    },
    {
      id: 25,
      title: "Arrow Functions",
      description: "Use modern arrow function syntax",
      task: "Create arrow function 'double' that returns number * 2, call with 4",
      expectedOutput: "8",
      hint: "Arrow functions use => syntax: const name = (param) => expression",
      solution: "const double = (num) => num * 2;\nconsole.log(double(4));",
      explanation: "Arrow functions provide a shorter syntax using => and implicit returns."
    },
    {
      id: 26,
      title: "For Loops in JS",
      description: "Iterate with for loops",
      task: "Use for loop to log numbers 1, 2, 3",
      expectedOutput: "1\n2\n3",
      hint: "for (let i = 1; i <= 3; i++) { console.log(i); }",
      solution: "for (let i = 1; i <= 3; i++) {\n    console.log(i);\n}",
      explanation: "For loops have three parts: initialization, condition, and increment."
    },
    {
      id: 27,
      title: "forEach Method",
      description: "Iterate through arrays with forEach",
      task: "Use forEach to log each item in ['a', 'b', 'c']",
      expectedOutput: "a\nb\nc",
      hint: "array.forEach(item => console.log(item))",
      solution: "['a', 'b', 'c'].forEach(item => console.log(item));",
      explanation: "forEach is an array method that executes a function for each element."
    },
    {
      id: 28,
      title: "Map Method",
      description: "Transform arrays with map",
      task: "Use map to double each number in [1, 2, 3] and log result",
      expectedOutput: "[2, 4, 6]",
      hint: "array.map(item => item * 2) creates a new array",
      solution: "let doubled = [1, 2, 3].map(num => num * 2);\nconsole.log(doubled);",
      explanation: "Map creates a new array by transforming each element with a function."
    },
    {
      id: 29,
      title: "Filter Method",
      description: "Filter arrays based on conditions",
      task: "Filter numbers > 2 from [1, 2, 3, 4] and log result",
      expectedOutput: "[3, 4]",
      hint: "array.filter(item => condition) keeps items that meet condition",
      solution: "let filtered = [1, 2, 3, 4].filter(num => num > 2);\nconsole.log(filtered);",
      explanation: "Filter creates a new array with elements that pass a test condition."
    },
    {
      id: 30,
      title: "Async/Await",
      description: "Handle asynchronous operations",
      task: "Create async function that logs 'Async complete!' after a promise",
      expectedOutput: "Async complete!",
      hint: "Use async function and await Promise.resolve()",
      solution: "async function demo() {\n    await Promise.resolve();\n    console.log('Async complete!');\n}\ndemo();",
      explanation: "Async/await makes asynchronous code look synchronous and easier to read."
    }
  ];

  export {
    pythonLevels,
    javascriptLevels,
    reactLevels,
    expressLevels,
    tailwindLevels
  }