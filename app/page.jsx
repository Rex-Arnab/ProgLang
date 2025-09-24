"use client";
import {pythonLevels,javascriptLevels,reactLevels,expressLevels,tailwindLevels} from "./data"
import React, { useState, useEffect } from 'react';
import { Play, RefreshCw, Lightbulb, Trophy, Flame, Code } from 'lucide-react';

const ProgLingo = () => {
  // Curriculum data
  

  const allLevels = [...pythonLevels, ...javascriptLevels, ...reactLevels, ...expressLevels, ...tailwindLevels];

  // State management
  const [selectedLanguage, setSelectedLanguage] = useState(null); // null, 'python', 'javascript'
  const [currentLevel, setCurrentLevel] = useState(1);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [completedLevels, setCompletedLevels] = useState(new Set());
  const [streak, setStreak] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);

  // Get levels based on selected language
  const getLanguageLevels = () => {
    if (selectedLanguage === 'python') return pythonLevels;
    if (selectedLanguage === 'javascript') return javascriptLevels;
    if (selectedLanguage === 'react') return reactLevels;
    if (selectedLanguage === 'express') return expressLevels;
    if (selectedLanguage === 'tailwind') return tailwindLevels;
    return allLevels;
  };

  const languageLevels = getLanguageLevels();
  const currentLevelData = languageLevels.find(level => 
    selectedLanguage === 'python' ? level.id === currentLevel :
    selectedLanguage === 'javascript' ? level.id === currentLevel + 15 :
    selectedLanguage === 'react' ? level.id === currentLevel + 30 :
    selectedLanguage === 'express' ? level.id === currentLevel + 45 :
    selectedLanguage === 'tailwind' ? level.id === currentLevel + 60 :
    level.id === currentLevel
  );
  const totalLevels = languageLevels.length;
  const progressPercentage = (completedLevels.size / (selectedLanguage && selectedLanguage !== 'all' ? 15 : 75)) * 100;

  // Initialize with first level code if needed
  useEffect(() => {
    if (currentLevelData && !code) {
      setCode('');
    }
    setShowHint(false);
    setShowSolution(false);
    setIsCorrect(null);
    setOutput('');
  }, [currentLevel]);

  const runCode = () => {
    const userCode = code.trim();
    const expected = currentLevelData.expectedOutput;
    
    // Simple code execution simulation
    let result = '';
    try {
      if (selectedLanguage === 'python' || (selectedLanguage === null && currentLevel <= 15)) {
        result = simulatePython(userCode);
      } else if (selectedLanguage === 'javascript' || (selectedLanguage === null && currentLevel > 15 && currentLevel <= 30)) {
        result = simulateJavaScript(userCode);
      } else if (selectedLanguage === 'react') {
        result = simulateReact(userCode);
      } else if (selectedLanguage === 'express') {
        result = simulateExpress(userCode);
      } else if (selectedLanguage === 'tailwind') {
        result = simulateTailwind(userCode);
      }
    } catch (error) {
      result = 'Error in code execution';
    }

    setOutput(result);
    
    if (result.trim() === expected.trim()) {
      setIsCorrect(true);
      const levelKey = getLevelKey(currentLevel);
      if (!completedLevels.has(levelKey)) {
        setCompletedLevels(prev => new Set([...prev, levelKey]));
        setStreak(prev => prev + 1);
      }
    } else {
      setIsCorrect(false);
      setShowSolution(true);
    }
  };

  const simulatePython = (code) => {
    // Simple Python simulation
    const lines = code.split('\n');
    let output = '';
    let variables = {};
    
    for (let line of lines) {
      line = line.trim();
      if (!line || line.startsWith('#')) continue;
      
      if (line.startsWith('print(')) {
        const match = line.match(/print\(['"](.+?)['"]\)|print\((.+?)\)/);
        if (match) {
          if (match[1]) {
            output += match[1] + '\n';
          } else if (match[2]) {
            const varName = match[2];
            if (variables[varName]) {
              output += variables[varName] + '\n';
            } else if (varName.includes('+')) {
              output += eval(varName.replace(/'/g, '"')) + '\n';
            } else {
              output += varName + '\n';
            }
          }
        }
      } else if (line.includes('=') && !line.includes('==')) {
        const [varName, value] = line.split('=').map(s => s.trim());
        variables[varName] = value.replace(/['"]/g, '');
      }
    }
    
    return output.trim();
  };

  const simulateJavaScript = (code) => {
    // Simple JavaScript simulation
    let output = '';
    const originalLog = console.log;
    const logs = [];
    
    console.log = (...args) => {
      logs.push(args.join(' '));
    };
    
    try {
      eval(code);
      output = logs.join('\n');
    } catch (error) {
      output = 'Error: ' + error.message;
    } finally {
      console.log = originalLog;
    }
    
    return output;
  };

  const resetLevel = () => {
    setCode('');
    setOutput('');
    setShowHint(false);
    setShowSolution(false);
    setIsCorrect(null);
  };

  const goToLevel = (levelId) => {
    if (levelId >= 1 && levelId <= totalLevels && (levelId === 1 || completedLevels.has(getLevelKey(levelId - 1)))) {
      setCurrentLevel(levelId);
    }
  };

  const getLevelKey = (level) => {
    if (selectedLanguage === 'javascript') return level + 15;
    if (selectedLanguage === 'react') return level + 30;
    if (selectedLanguage === 'express') return level + 45;
    if (selectedLanguage === 'tailwind') return level + 60;
    return level;
  };

  const simulateReact = (code) => {
    // Simple React simulation - just return expected JSX patterns
    if (code.includes('<h1>Hello React!</h1>')) return '<h1>Hello React!</h1>';
    if (code.includes('Welcome {name}')) return '<h1>Welcome John</h1>';
    if (code.includes('Hi {props.name}')) return '<p>Hi Alice</p>';
    if (code.includes('Count: {count}')) return '<button>Count: 0</button>';
    if (code.includes('Clicks: {clicks}')) return '<button>Clicks: 1</button>';
    if (code.includes('Logged In')) return '<p>Logged In</p>';
    if (code.includes('<ul>')) return '<ul><li>apple</li><li>banana</li><li>orange</li></ul>';
    if (code.includes('Document title changed')) return 'Document title changed';
    if (code.includes('<input')) return '<div><input /><p>Hello</p></div>';
    if (code.includes('<div><h2>Title</h2><p>Content</p></div>')) return '<div><h2>Title</h2><p>Content</p></div>';
    if (code.includes('<h3>{name}</h3>')) return '<div><h3>John</h3><p>25 years old</p></div>';
    if (code.includes('useCounter')) return '<button>Count: 0</button>';
    if (code.includes('ThemeContext')) return '<p style="color: blue;">Dark Theme</p>';
    if (code.includes('Something went wrong')) return '<div>Something went wrong</div>';
    if (code.includes('React.memo')) return '<p>Optimized: Hello</p>';
    return code;
  };

  const simulateExpress = (code) => {
    // Simple Express simulation
    if (code.includes("'Hello Express!'")) return 'Hello Express!';
    if (code.includes('Hello ${req.params.name}')) return 'Hello John';
    if (code.includes('You are ${req.query.age}')) return 'You are 25';
    if (code.includes('User created: ${req.body.name}')) return 'User created: Alice';
    if (code.includes('Request received')) return 'Request received';
    if (code.includes('Error occurred')) return 'Error occurred';
    if (code.includes('Static files served')) return 'Static files served';
    if (code.includes('Users API')) return 'Users API';
    if (code.includes('Express App')) return 'Welcome to Express App';
    if (code.includes('{ id: 1, name: \'John\' }')) return '{"id":1,"name":"John"}';
    if (code.includes('CORS enabled')) return 'CORS enabled';
    if (code.includes('Login successful')) return 'Login successful';
    if (code.includes('Session created')) return 'Session created';
    if (code.includes('Valid email')) return 'Valid email';
    if (code.includes('REST API complete')) return 'REST API complete';
    return code;
  };

  const simulateTailwind = (code) => {
    // Simple Tailwind simulation - return the HTML code itself
    const trimmedCode = code.trim();
    if (trimmedCode.startsWith('<') && trimmedCode.endsWith('>')) {
      return trimmedCode;
    }
    return code;
  };

  const nextLevel = () => {
    if (currentLevel < totalLevels && isCorrect) {
      setCurrentLevel(currentLevel + 1);
    }
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setCurrentLevel(1);
    setCode('');
    setOutput('');
    setShowHint(false);
    setShowSolution(false);
    setIsCorrect(null);
  };

  // Language Selection Screen
  if (!selectedLanguage) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Code className="h-16 w-16 text-blue-600" />
              <h1 className="text-5xl font-bold text-gray-900">ProgLingo</h1>
            </div>
            <p className="text-xl text-gray-600 mb-2">Interactive Programming Learning Platform</p>
            <p className="text-gray-500">Master programming fundamentals through hands-on coding</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Choose Your Learning Path</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Python Option */}
              <button
                onClick={() => selectLanguage('python')}
                className="group relative p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="absolute top-4 right-4 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <span className="text-lg group-hover:text-white">🐍</span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Python</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Perfect for beginners! Learn programming fundamentals.
                  </p>
                </div>

                <div className="space-y-1 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Variables & Functions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    <span>Loops & Conditionals</span>
                  </div>
                </div>

                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">Beginner</span>
              </button>

              {/* JavaScript Option */}
              <button
                onClick={() => selectLanguage('javascript')}
                className="group relative p-6 border-2 border-gray-200 rounded-xl hover:border-yellow-500 hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="absolute top-4 right-4 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                  <span className="text-lg group-hover:text-white">⚡</span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-yellow-600 mb-2">JavaScript</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Learn the language of the web and modern apps.
                  </p>
                </div>

                <div className="space-y-1 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    <span>ES6+ Features</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
                    <span>Async/Await</span>
                  </div>
                </div>

                <span className="text-xs font-medium text-yellow-600 bg-yellow-50 px-2 py-1 rounded">Intermediate</span>
              </button>

              {/* React Option */}
              <button
                onClick={() => selectLanguage('react')}
                className="group relative p-6 border-2 border-gray-200 rounded-xl hover:border-cyan-500 hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="absolute top-4 right-4 w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <span className="text-lg group-hover:text-white">⚛️</span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-cyan-600 mb-2">React.js</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Build modern user interfaces and components.
                  </p>
                </div>

                <div className="space-y-1 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    <span>Components & JSX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    <span>Hooks & State</span>
                  </div>
                </div>

                <span className="text-xs font-medium text-cyan-600 bg-cyan-50 px-2 py-1 rounded">Advanced</span>
              </button>

              {/* Express Option */}
              <button
                onClick={() => selectLanguage('express')}
                className="group relative p-6 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="absolute top-4 right-4 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                  <span className="text-lg group-hover:text-white">🚀</span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-green-600 mb-2">Express.js</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Create powerful backend APIs and servers.
                  </p>
                </div>

                <div className="space-y-1 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>REST APIs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>Middleware</span>
                  </div>
                </div>

                <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Advanced</span>
              </button>

              {/* Tailwind Option */}
              <button
                onClick={() => selectLanguage('tailwind')}
                className="group relative p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:shadow-lg transition-all duration-300 text-left"
              >
                <div className="absolute top-4 right-4 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
                  <span className="text-lg group-hover:text-white">🎨</span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-indigo-600 mb-2">Tailwind CSS</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Master utility-first CSS framework.
                  </p>
                </div>

                <div className="space-y-1 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Utility Classes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                    <span>Responsive Design</span>
                  </div>
                </div>

                <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Intermediate</span>
              </button>

              {/* All Languages Option */}
              <button
                onClick={() => selectLanguage('all')}
                className="group relative p-6 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:shadow-lg transition-all duration-300 text-left md:col-span-2 lg:col-span-1"
              >
                <div className="absolute top-4 right-4 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                  <span className="text-lg group-hover:text-white">🌟</span>
                </div>
                
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-purple-600 mb-2">Full Stack</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete web development journey.
                  </p>
                </div>

                <div className="space-y-1 text-xs text-gray-500 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>All 5 Technologies</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                    <span>75 Total Levels</span>
                  </div>
                </div>

                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded">Complete</span>
              </button>
            </div>
          </div>

          <div className="text-center text-gray-500">
            <p>🎯 Gamified learning • 💡 Interactive hints • 🏆 Track your progress</p>
            <p className="text-xs mt-1">Choose any path or master them all - your learning journey awaits!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Code className="h-8 w-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ProgLingo</h1>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {selectedLanguage === 'python' ? 'Python' : 
                     selectedLanguage === 'javascript' ? 'JavaScript' : 
                     selectedLanguage === 'react' ? 'React.js' :
                     selectedLanguage === 'express' ? 'Express.js' :
                     selectedLanguage === 'tailwind' ? 'Tailwind CSS' :
                     currentLevel <= 15 ? 'Python' : 
                     currentLevel <= 30 ? 'JavaScript' :
                     currentLevel <= 45 ? 'React.js' :
                     currentLevel <= 60 ? 'Express.js' : 'Tailwind CSS'}
                  </span>
                  <span className="text-sm text-gray-500">Level {currentLevel}</span>
                  <button
                    onClick={() => setSelectedLanguage(null)}
                    className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    Switch Language
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="font-semibold text-orange-600">{streak}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold text-yellow-600">{completedLevels.size}/{totalLevels}</span>
              </div>
              <div className="w-32">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-center">{Math.round(progressPercentage)}%</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Level Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => goToLevel(Math.max(1, currentLevel - 1))}
            disabled={currentLevel === 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              currentLevel === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <span>← Previous</span>
          </button>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {currentLevelData?.title}
            </h2>
            <p className="text-gray-600">{currentLevelData?.description}</p>
          </div>
          
          <button
            onClick={nextLevel}
            disabled={!isCorrect || currentLevel === totalLevels}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              !isCorrect || currentLevel === totalLevels
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <span>Next →</span>
          </button>
        </div>

        {/* Task Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          {completedLevels.has(currentLevel) && (
            <div className="flex items-center justify-center space-x-2 text-green-600 mb-4 p-3 bg-green-50 rounded-lg">
              <Trophy className="h-5 w-5" />
              <span className="font-medium">Level Completed! 🎉</span>
            </div>
          )}

          <div className="mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">📋 Your Task:</h3>
              <p className="text-blue-800">{currentLevelData?.task}</p>
              {currentLevelData?.expectedOutput && (
                <div className="mt-3 pt-3 border-t border-blue-200">
                  <p className="text-sm text-blue-700">
                    <strong>Expected Output:</strong> <code className="bg-blue-100 px-2 py-1 rounded font-mono">"{currentLevelData.expectedOutput}"</code>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Code Editor */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-lg font-semibold text-gray-900">
                💻 Code Editor
              </label>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {selectedLanguage === 'python' ? 'Python' : 
                 selectedLanguage === 'javascript' ? 'JavaScript' : 
                 currentLevel <= 15 ? 'Python' : 'JavaScript'}
              </span>
            </div>
            <div className="relative">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg bg-gray-900 text-green-400 font-mono text-sm resize-none focus:outline-none focus:border-blue-500 transition-colors"
                placeholder={`# Write your ${selectedLanguage === 'python' ? 'Python' : selectedLanguage === 'javascript' ? 'JavaScript' : currentLevel <= 15 ? 'Python' : 'JavaScript'} code here...\n# Press 'Run Code' when ready!`}
              />
              <div className="absolute top-3 right-3 text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                {selectedLanguage === 'python' ? 'Python' : selectedLanguage === 'javascript' ? 'JS' : currentLevel <= 15 ? 'Python' : 'JS'}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <button
              onClick={runCode}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
            >
              <Play className="h-4 w-4" />
              <span className="font-medium">Run Code</span>
            </button>
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center space-x-2 bg-yellow-500 text-white px-4 py-3 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              <Lightbulb className="h-4 w-4" />
              <span>Hint</span>
            </button>
            <button
              onClick={resetLevel}
              className="flex items-center space-x-2 bg-gray-500 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Reset</span>
            </button>
          </div>

          {/* Output */}
          {output && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">📤 Output</h4>
              <div className={`p-4 rounded-lg font-mono text-sm border-2 ${
                isCorrect === true ? 'bg-green-50 border-green-300 text-green-800' : 
                isCorrect === false ? 'bg-red-50 border-red-300 text-red-800' :
                'bg-gray-50 border-gray-300 text-gray-800'
              }`}>
                <pre className="whitespace-pre-wrap">{output}</pre>
              </div>
              {isCorrect === true && (
                <div className="mt-3 p-3 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800 font-medium">🎉 Excellent! Your code works perfectly!</p>
                </div>
              )}
              {isCorrect === false && (
                <div className="mt-3 p-3 bg-red-100 border border-red-300 rounded-lg">
                  <p className="text-red-800 font-medium">🔍 Not quite right. Expected: <code className="bg-red-200 px-2 py-1 rounded">"{currentLevelData?.expectedOutput}"</code></p>
                </div>
              )}
            </div>
          )}

          {/* Hint */}
          {showHint && (
            <div className="mb-6 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
              <div className="flex items-start space-x-2">
                <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">💡 Hint</h4>
                  <p className="text-yellow-700">{currentLevelData?.hint}</p>
                </div>
              </div>
            </div>
          )}

          {/* Solution */}
          {showSolution && (
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">📚 Learning Point</h4>
                <p className="text-blue-700">{currentLevelData?.explanation}</p>
              </div>
              <div className="p-4 bg-gray-900 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-300">💡 Solution</h4>
                  <button
                    onClick={() => setCode(currentLevelData?.solution)}
                    className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700 transition-colors"
                  >
                    Copy to Editor
                  </button>
                </div>
                <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">{currentLevelData?.solution}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgLingo;