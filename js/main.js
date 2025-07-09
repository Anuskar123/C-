// Main JavaScript for C++ Programming Question Bank
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeHamburgerMenu();
    initializeQuestions();
    loadWeekContent();
    initializeQuestionDatabase(); // Add database initialization
});

// Make exam preview function globally accessible
window.showExamPreview = showExamPreview;
window.closeExamPreview = closeExamPreview;

// Hamburger menu functionality
function initializeHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navTabs = document.getElementById('navTabs');
    const currentTabTitle = document.querySelector('.current-tab-title');
    const mobileBackdrop = document.getElementById('mobileBackdrop');

    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', function() {
            // Toggle hamburger animation
            this.classList.toggle('active');
            
            // Toggle navigation visibility
            navTabs.classList.toggle('active');
            
            // Toggle backdrop
            if (mobileBackdrop) {
                mobileBackdrop.classList.toggle('active');
            }
        });

        // Close menu when clicking backdrop
        if (mobileBackdrop) {
            mobileBackdrop.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                navTabs.classList.remove('active');
                mobileBackdrop.classList.remove('active');
            });
        }

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburgerBtn.contains(e.target) && !navTabs.contains(e.target)) {
                hamburgerBtn.classList.remove('active');
                navTabs.classList.remove('active');
                if (mobileBackdrop) {
                    mobileBackdrop.classList.remove('active');
                }
            }
        });

        // Update current tab title when tab is clicked
        const tabs = document.querySelectorAll('.nav-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                if (currentTabTitle) {
                    currentTabTitle.textContent = this.textContent;
                }
                // Close mobile menu after selection
                hamburgerBtn.classList.remove('active');
                navTabs.classList.remove('active');
                if (mobileBackdrop) {
                    mobileBackdrop.classList.remove('active');
                }
            });
        });
    }
}

// Navigation functionality
function initializeNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const contentSections = document.querySelectorAll('.content-section');

    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            console.log('=== TAB CLICKED ===');
            console.log('Target tab:', targetTab);
            
            // Remove active class from all tabs
            navTabs.forEach(t => t.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Update mobile menu title
            const currentTabTitle = document.querySelector('.current-tab-title');
            if (currentTabTitle) {
                currentTabTitle.textContent = this.textContent;
            }
            
            // Show corresponding content
            const targetSection = document.getElementById(targetTab);
            console.log('Target section found:', !!targetSection);
            if (targetSection) {
                targetSection.classList.add('active');
                console.log('Section made active');
                
                // Load week content only for week tabs, mixed, mock-exam, tca-mock, and additional
                if (targetTab.startsWith('week') || targetTab === 'mixed' || targetTab === 'mock-exam' || targetTab === 'tca-mock' || targetTab === 'additional') {
                    console.log('Should load content for tab:', targetTab);
                    console.log('Calling loadWeekQuestions now...');
                    loadWeekQuestions(targetTab);
                } else {
                    console.log('Tab does not require content loading:', targetTab);
                }
                // For overview and quick-ref, content is already in HTML
            } else {
                console.error('Target section not found for tab:', targetTab);
            }
        });
    });

    // Handle week card clicks
    const weekCards = document.querySelectorAll('.week-card');
    weekCards.forEach(card => {
        card.addEventListener('click', function() {
            const weekId = this.getAttribute('data-week');
            
            // Switch to the week tab
            navTabs.forEach(t => t.classList.remove('active'));
            contentSections.forEach(s => s.classList.remove('active'));
            
            const weekTab = document.querySelector(`[data-tab="${weekId}"]`);
            const weekSection = document.getElementById(weekId);
            
            if (weekTab && weekSection) {
                weekTab.classList.add('active');
                weekSection.classList.add('active');
                loadWeekQuestions(weekId);
                
                // Update mobile menu title
                const currentTabTitle = document.querySelector('.current-tab-title');
                if (currentTabTitle) {
                    currentTabTitle.textContent = weekTab.textContent;
                }
            }
        });
    });
}

// Question functionality
function initializeQuestions() {
    console.log('Initializing question functionality...');
    
    // Initialize show answer buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('show-answer-btn')) {
            e.preventDefault();
            const questionId = e.target.getAttribute('data-question');
            console.log('Show answer clicked for question:', questionId);
            toggleAnswer(questionId);
        }
        
        if (e.target.classList.contains('toggle-cheat-btn')) {
            e.preventDefault();
            const questionId = e.target.getAttribute('data-question');
            console.log('Toggle cheat clicked for question:', questionId);
            toggleCheatMode(questionId);
        }
        
        if (e.target.classList.contains('option-btn')) {
            const questionId = e.target.getAttribute('data-question');
            const optionIndex = parseInt(e.target.getAttribute('data-option'));
            selectOption(questionId, optionIndex);
        }
    });
    
    console.log('Question functionality initialized successfully');
}

// Load week content
function loadWeekContent() {
    // Don't load questions for overview - it has static content
    // Overview section already has all the content in HTML
    console.log('Page loaded - Overview section ready');
}

// Load questions for a specific week
function loadWeekQuestions(weekId) {
    console.log('Loading content for:', weekId);
    const weekData = getWeekData(weekId);
    console.log('Week data retrieved:', weekData ? weekData.title : 'No data');
    const contentContainer = document.getElementById(weekId);
    console.log('Container found:', !!contentContainer);
    
    if (contentContainer && weekData) {
        console.log('Questions available:', weekData.questions ? weekData.questions.length : 0);
        const html = createQuestionsHTML(weekData);
        console.log('HTML generated, length:', html.length);
        contentContainer.innerHTML = html;
        
        // Re-initialize Prism.js for syntax highlighting
        if (window.Prism) {
            Prism.highlightAll();
        }
        console.log('Content loaded successfully for:', weekId);
    } else {
        console.error('Failed to load content for:', weekId, 'Container:', !!contentContainer, 'Data:', !!weekData);
    }
}

// Get week data from separate week files
function getWeekData(weekId) {
    console.log('Getting data for:', weekId);
    
    // Special handling for mixed section - now uses comprehensive C++ mixed questions
    if (weekId === 'mixed') {
        console.log('🎯 Mixed section requested - checking window.mixedData:', !!window.mixedData);
        console.log('📊 Available window properties:', Object.keys(window).filter(key => key.includes('Data')));
        
        if (window.mixedData) {
            console.log('✅ Mixed data found!', {
                title: window.mixedData.title,
                questionCount: window.mixedData.questions ? window.mixedData.questions.length : 'No questions',
                hasCheatSheet: !!window.mixedData.cheatSheet
            });
            
            // Validate the data structure
            if (!window.mixedData.questions || !Array.isArray(window.mixedData.questions)) {
                console.error('❌ Mixed data has invalid questions array');
                return {
                    title: 'C++ Programming Questions - Error',
                    description: 'Mixed questions data is corrupted. Please refresh the page.',
                    questions: []
                };
            }
            
            return window.mixedData;
        } else {
            console.error('❌ Mixed data not found! Check if cpp-mixed-questions.js is loaded properly');
            console.log('🔍 All window properties with "mix":', Object.keys(window).filter(key => key.toLowerCase().includes('mix')));
            
            // Try to wait a bit and retry
            setTimeout(() => {
                if (window.mixedData) {
                    console.log('⏰ Mixed data found after delay, reloading...');
                    loadWeekQuestions('mixed');
                }
            }, 1000);
            
            return {
                title: 'C++ Programming Questions - Loading...',
                description: 'Loading C++ programming questions. If this persists, please refresh the page.',
                questions: []
            };
        }
    }
    
    // Special debug for mock exam
    if (weekId === 'mock-exam') {
        console.log('Mock exam requested - checking window.mockExamData:', !!window.mockExamData);
        if (window.mockExamData) {
            console.log('Mock exam found with questions:', window.mockExamData.questions ? window.mockExamData.questions.length : 'No questions');
            return window.mockExamData;
        } else {
            console.error('Mock exam data not found! Creating fallback...');
            return {
                title: 'Mock Exam (Fallback)',
                description: 'Mock exam data could not be loaded.',
                questions: [{
                    id: 'fallback_q1',
                    type: 'Test',
                    difficulty: '⭐ Test',
                    question: 'This is a test question - mock exam data not loaded properly.',
                    answer: 'Test answer',
                    explanation: 'This is a fallback question.'
                }]
            };
        }
    }
    
    // Special debug for TCA mock exam
    if (weekId === 'tca-mock') {
        console.log('TCA Mock exam requested - checking window.tcaMockData:', !!window.tcaMockData);
        if (window.tcaMockData) {
            console.log('TCA Mock exam found with questions:', window.tcaMockData.questions ? window.tcaMockData.questions.length : 'No questions');
            return window.tcaMockData;
        } else {
            console.error('TCA Mock exam data not found! Creating fallback...');
            return {
                title: 'TCA Mock Exam (Fallback)',
                description: 'TCA Mock exam data could not be loaded.',
                questions: [{
                    id: 'tca_fallback_q1',
                    type: 'Test',
                    difficulty: '⭐ Test',
                    question: 'This is a test question - TCA mock exam data not loaded properly.',
                    answer: 'Test answer',
                    explanation: 'This is a fallback question.'
                }]
            };
        }
    }
    
    // Map to individual week data objects
    const weekDataSources = {
        'week1': window.week1Data,
        'week2': window.week2Data, 
        'week3': window.week3Data,
        'week4': window.week4Data,
        'week5': window.week5Data,
        'week6': window.week6Data,
        'week7': window.week7Data,
        'week8': window.week8Data,
        'week9': window.week9Data,
        'mixed': window.mixedData,
        'mock-exam': window.mockExamData,
        'tca-mock': window.tcaMockData
    };
    
    console.log('Looking for data source:', weekId, 'Available:', Object.keys(weekDataSources));
    
    if (weekDataSources[weekId]) {
        console.log('Found data for:', weekId);
        return weekDataSources[weekId];
    }
    
    console.log('No data found for:', weekId);
    // Fallback data if week file not loaded
    return { 
        title: `${weekId.toUpperCase()} - Loading...`, 
        description: 'Please wait while content loads. Make sure the week file is included.',
        questions: [] 
    };
}

// Create HTML for questions
function createQuestionsHTML(weekData) {
    let html = `
        <div class="section-header">
            <h2>${weekData.title}</h2>
            <p class="section-description">${weekData.description}</p>
        </div>
    `;

    // Add mock exam info if this is a mock exam
    if (weekData.timeLimit && weekData.totalMarks) {
        html += createMockExamInfoHTML(weekData);
    }

    // Add cheat sheet if available
    if (weekData.cheatSheet) {
        html += createCheatSheetHTML(weekData.cheatSheet);
    }

    // Add operator precedence reference for mock exam
    if (weekData.operatorPrecedence) {
        html += createOperatorPrecedenceHTML(weekData.operatorPrecedence);
    }

    if (weekData.questions && weekData.questions.length > 0) {
        weekData.questions.forEach((question, index) => {
            html += createQuestionHTML(question, index);
        });
    } else {
        html += `
            <div class="no-questions">
                <p>No questions available for this section yet.</p>
            </div>
        `;
    }

    return html;
}

// Create HTML for cheat sheet
function createCheatSheetHTML(cheatSheet) {
    let html = `
        <div class="cheat-sheet-container">
            <div class="cheat-sheet-header">
                <h3>${cheatSheet.title}</h3>
                <button class="toggle-cheat-btn" onclick="toggleCheatSheet()">Show/Hide Quick Reference</button>
            </div>
            <div class="cheat-sheet-content" id="cheat-sheet-content" style="display: none;">
    `;
    
    cheatSheet.sections.forEach(section => {
        html += `
            <div class="cheat-section">
                <h4>${section.title}</h4>
                <pre class="cheat-content">${section.content}</pre>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

// Create HTML for mock exam info
function createMockExamInfoHTML(mockData) {
    return `
        <div class="mock-exam-info">
            <div class="exam-stats">
                <div class="exam-stat">
                    <span class="stat-label">⏰ Time Limit:</span>
                    <span class="stat-value">${mockData.timeLimit}</span>
                </div>
                <div class="exam-stat">
                    <span class="stat-label">📊 Total Marks:</span>
                    <span class="stat-value">${mockData.totalMarks}</span>
                </div>
                <div class="exam-stat">
                    <span class="stat-label">✅ Pass Grade:</span>
                    <span class="stat-value">${mockData.passingGrade}</span>
                </div>
            </div>
            
            <div class="marking-scheme-summary">
                <h3>📋 Marking Scheme</h3>
                <div class="scheme-grid">
                    <div class="scheme-item">MCQ: ${mockData.markingScheme.mcq}</div>
                    <div class="scheme-item">Short Answer: ${mockData.markingScheme.shortAnswer}</div>
                    <div class="scheme-item">Code Completion: ${mockData.markingScheme.codeCompletion}</div>
                    <div class="scheme-item">Debugging: ${mockData.markingScheme.debugging}</div>
                    <div class="scheme-item">Long Answer: ${mockData.markingScheme.longAnswer}</div>
                </div>
            </div>
        </div>
    `;
}

// Create HTML for operator precedence reference
function createOperatorPrecedenceHTML(precedenceData) {
    let html = `
        <div class="operator-precedence-container">
            <div class="precedence-header">
                <h3>${precedenceData.title}</h3>
                <button class="toggle-precedence-btn" onclick="toggleOperatorPrecedence()">Show/Hide Reference</button>
            </div>
            <div class="precedence-content" id="precedence-content" style="display: none;">
                <div class="precedence-table">
    `;
    
    precedenceData.levels.forEach(level => {
        html += `
            <div class="precedence-row">
                <span class="precedence-level">Level ${level.level}</span>
                <span class="precedence-operators">${level.operators}</span>
                <span class="precedence-description">${level.description}</span>
            </div>
        `;
    });
    
    html += `
                </div>
            </div>
        </div>
    `;
    
    return html;
}

// Create HTML for individual question
function createQuestionHTML(question, index) {
    const questionNumber = index + 1;
    const isMockExam = question.marks !== undefined; // Check if this is a mock exam question
    
    let questionHTML = `
        <div class="question-card ${isMockExam ? 'mock-exam-question' : ''}" id="question-${question.id}">
            <div class="question-header">
                <div class="question-meta">
                    <span class="question-number">Question ${questionNumber}</span>
                    <span class="question-type">${question.type}</span>
                    <span class="difficulty">${question.difficulty}</span>
                    ${isMockExam ? `<span class="marks-badge">[${question.marks} marks]</span>` : ''}
                </div>
                ${question.source ? `<div class="question-source">Source: ${question.source}</div>` : ''}
                ${question.topic ? `<div class="question-topic">Topic: ${question.topic}</div>` : ''}
            </div>
            
            <div class="question-content">
                <h3 class="question-text">${question.question}</h3>
                
                ${question.requirements ? `
                    <div class="requirements-block">
                        <h4>Requirements:</h4>
                        <div class="requirements-content">${question.requirements}</div>
                    </div>
                ` : ''}
                
                ${question.code ? `
                    <div class="code-block">
                        <pre><code class="language-cpp">${escapeHtml(question.code)}</code></pre>
                    </div>
                ` : ''}
                
                ${question.options ? createOptionsHTML(question) : ''}
                
                <button class="show-answer-btn" data-question="${question.id}">
                    Show Answer ${isMockExam ? '& Marking Scheme' : ''}
                </button>
                
                <div class="answer-section" id="answer-${question.id}">
                    <div class="answer-content">
                        ${isMockExam && question.markingCriteria ? `
                            <div class="marking-criteria">
                                <h4>📊 Marking Criteria:</h4>
                                <div class="marking-content">${question.markingCriteria}</div>
                            </div>
                        ` : ''}
                        <h4>✅ Model Answer:</h4>
                        <div class="answer">${getCorrectAnswer(question)}</div>
                        <h4>💡 Explanation:</h4>
                        <div class="explanation">${question.explanation}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return questionHTML;
}

// Create options HTML for MCQ questions
function createOptionsHTML(question) {
    if (!question.options || (question.type !== 'MCQ' && question.type !== 'Multiple Choice')) return '';
    
    let optionsHTML = '<div class="options-container">';
    
    question.options.forEach((option, index) => {
        optionsHTML += `
            <button class="option-btn" data-question="${question.id}" data-option="${index}">
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            </button>
        `;
    });
    
    optionsHTML += '</div>';
    return optionsHTML;
}

// Toggle answer visibility
function toggleAnswer(questionId) {
    console.log('Toggling answer for question:', questionId);
    
    const answerSection = document.getElementById(`answer-${questionId}`);
    const button = document.querySelector(`[data-question="${questionId}"].show-answer-btn`);
    
    console.log('Answer section found:', !!answerSection);
    console.log('Button found:', !!button);
    
    if (answerSection && button) {
        const isMockExam = button.textContent.includes('Marking Scheme');
        
        if (answerSection.classList.contains('show')) {
            answerSection.classList.remove('show');
            button.textContent = isMockExam ? 'Show Answer & Marking Scheme' : 'Show Answer';
            button.classList.remove('answer-shown');
            console.log('Answer hidden');
        } else {
            answerSection.classList.add('show');
            button.textContent = isMockExam ? 'Hide Answer & Marking Scheme' : 'Hide Answer';
            button.classList.add('answer-shown');
            console.log('Answer shown');
        }
    } else {
        console.error('Answer section or button not found for question:', questionId);
    }
}

// Toggle cheat mode (if implemented)
function toggleCheatMode(questionId) {
    console.log('Toggling cheat mode for question:', questionId);
    
    const button = document.querySelector(`[data-question="${questionId}"].toggle-cheat-btn`);
    const questionContainer = document.querySelector(`[data-question-id="${questionId}"]`);
    
    if (button && questionContainer) {
        if (button.classList.contains('cheat-active')) {
            button.classList.remove('cheat-active');
            button.textContent = 'Show Hints';
            questionContainer.classList.remove('cheat-mode');
        } else {
            button.classList.add('cheat-active');
            button.textContent = 'Hide Hints';
            questionContainer.classList.add('cheat-mode');
        }
    }
}

// Handle option selection for MCQ questions
function selectOption(questionId, selectedIndex) {
    const questionData = findQuestionById(questionId);
    if (!questionData) return;
    
    const optionButtons = document.querySelectorAll(`[data-question="${questionId}"][data-option]`);
    
    // Remove previous selections
    optionButtons.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Mark the selected option
    const selectedButton = document.querySelector(`[data-question="${questionId}"][data-option="${selectedIndex}"]`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
        
        // Show if correct or incorrect
        if (selectedIndex === questionData.correct) {
            selectedButton.classList.add('correct');
        } else {
            selectedButton.classList.add('incorrect');
            // Also highlight the correct answer
            const correctButton = document.querySelector(`[data-question="${questionId}"][data-option="${questionData.correct}"]`);
            if (correctButton) {
                correctButton.classList.add('correct');
            }
        }
        
        // Auto-show the answer
        setTimeout(() => {
            toggleAnswer(questionId);
        }, 1000);
    }
}

// Find question by ID
function findQuestionById(questionId) {
    // Check all available week data sources
    const weekDataSources = {
        'week1': window.week1Data,
        'week2': window.week2Data, 
        'week3': window.week3Data,
        'week4': window.week4Data,
        'week5': window.week5Data,
        'week6': window.week6Data,
        'week7': window.week7Data,
        'week8': window.week8Data,
        'week9': window.week9Data,
        'mixed': window.mixedData,
        'mock-exam': window.mockExamData,
        'tca-mock': window.tcaMockData
    };
    
    for (const weekKey in weekDataSources) {
        const weekData = weekDataSources[weekKey];
        if (weekData && weekData.questions) {
            const question = weekData.questions.find(q => q.id === questionId);
            if (question) return question;
        }
    }
    return null;
}

// Toggle cheat sheet visibility
function toggleCheatSheet() {
    const cheatContent = document.getElementById('cheat-sheet-content');
    if (cheatContent) {
        cheatContent.style.display = cheatContent.style.display === 'none' ? 'block' : 'none';
    }
}

// Toggle operator precedence visibility
function toggleOperatorPrecedence() {
    const precedenceContent = document.getElementById('precedence-content');
    if (precedenceContent) {
        precedenceContent.style.display = precedenceContent.style.display === 'none' ? 'block' : 'none';
    }
}

// Initialize exam preset buttons when page loads
function initializeExamPresets() {
    const presetButtons = document.querySelectorAll('.btn-preset');
    console.log('Found preset buttons:', presetButtons.length);
    
    presetButtons.forEach((button, index) => {
        console.log(`Setting up preset button ${index + 1}:`, button.getAttribute('data-preset'));
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const preset = this.getAttribute('data-preset');
            console.log('Preset button clicked:', preset);
            
            // Store preset in localStorage so exam.html can use it
            localStorage.setItem('selectedExamPreset', preset);
            console.log('Stored preset in localStorage:', preset);
            
            // Launch exam
            const examWindow = window.open('exam.html', '_blank');
            if (!examWindow) {
                alert('⚠️ Pop-up blocked! Please allow pop-ups for this site or try again.');
            } else {
                console.log('Exam window opened successfully');
            }
        });
    });
    
    console.log('Exam preset buttons initialized successfully');
}

// Call initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // ...existing initialization code...
    
    // Initialize exam presets after a delay to ensure all scripts load
    setTimeout(() => {
        console.log('Initializing exam presets...');
        initializeExamPresets();
        
        // Also check if mixed exam engine is available for debugging
        if (typeof mixedExamEngine !== 'undefined') {
            console.log('Mixed exam engine is available on index page');
        } else {
            console.log('Mixed exam engine not yet loaded on index page');
        }
    }, 2000); // Increased delay to ensure scripts load
});

// Initialize the application
console.log('C++ Programming Question Bank initialized!');
if (window.week1Data) {
    console.log('Week-based question files loaded successfully!');
} else {
    console.log('Week question files not loaded yet...');
}

// Check mock exam data specifically
console.log('Mock exam data available:', !!window.mockExamData);
if (window.mockExamData) {
    console.log('Mock exam questions count:', window.mockExamData.questions ? window.mockExamData.questions.length : 'No questions property');
    console.log('Mock exam title:', window.mockExamData.title);
} else {
    console.error('Mock exam data is not loaded!');
}

// Test mock exam data specifically
console.log('Testing mock exam data availability...');
console.log('window.mockExamData exists:', !!window.mockExamData);
if (window.mockExamData) {
    console.log('Mock exam title:', window.mockExamData.title);
    console.log('Mock exam questions count:', window.mockExamData.questions ? window.mockExamData.questions.length : 'No questions');
} else {
    console.error('Mock exam data is not available on window object!');
}

// Get correct answer for different question types
function getCorrectAnswer(question) {
    if (question.type === "Multiple Choice" && question.options && question.options[question.correct] !== undefined) {
        return `<strong>Option ${String.fromCharCode(65 + question.correct)}</strong>: ${question.options[question.correct]}`;
    } else if (question.answer) {
        return question.answer;
    } else {
        return "Answer not available";
    }
}

// Show comprehensive exam preview
function showExamPreview() {
    console.log('🔍 Preview function called');
    
    // Collect sample questions from different sources
    const sampleQuestions = [];
    
    // Add sample from each week (first question only)
    for (let i = 1; i <= 9; i++) {
        const weekDataName = `week${i}Data`;
        console.log(`Checking ${weekDataName}:`, !!window[weekDataName]);
        if (window[weekDataName] && window[weekDataName].questions && window[weekDataName].questions.length > 0) {
            sampleQuestions.push({
                source: `Week ${i}`,
                question: window[weekDataName].questions[0]
            });
            console.log(`✅ Added sample from Week ${i}`);
        }
    }
    
    // Add sample from mock exam
    console.log('Checking mockExamData:', !!window.mockExamData);
    if (window.mockExamData && window.mockExamData.questions && window.mockExamData.questions.length > 0) {
        sampleQuestions.push({
            source: "Mock Exam",
            question: window.mockExamData.questions[0]
        });
        console.log('✅ Added sample from Mock Exam');
    }
    
    // Add sample from TCA mock
    console.log('Checking tcaMockData:', !!window.tcaMockData);
    if (window.tcaMockData && window.tcaMockData.questions && window.tcaMockData.questions.length > 0) {
        sampleQuestions.push({
            source: "TCA Mock",
            question: window.tcaMockData.questions[0]
        });
        console.log('✅ Added sample from TCA Mock');
    }
    
    // Add fallback sample questions if no data is available
    if (sampleQuestions.length === 0) {
        console.log('⚠️ No question data found, using fallback samples');
        sampleQuestions.push(
            {
                source: "Sample - Basic Syntax",
                question: {
                    question: "What is the correct syntax to include the iostream library in C++?",
                    options: ["include <iostream>", "#include <iostream>", "using iostream;", "import iostream;"],
                    type: "Multiple Choice"
                }
            },
            {
                source: "Sample - Data Types",
                question: {
                    question: "Which data type is used to store decimal numbers with double precision?",
                    options: ["int", "float", "double", "char"],
                    type: "Multiple Choice"
                }
            },
            {
                source: "Sample - Operators",
                question: {
                    question: "What is the result of 5 + 3 * 2 in C++?",
                    options: ["16", "11", "13", "10"],
                    type: "Multiple Choice"
                }
            }
        );
    }
    
    console.log(`📊 Total sample questions: ${sampleQuestions.length}`);
    
    console.log(`📊 Total sample questions: ${sampleQuestions.length}`);
    
    // Create preview modal content
    const previewHTML = `
        <div class="preview-modal" id="previewModal">
            <div class="preview-content">
                <div class="preview-header">
                    <h3>🔍 Comprehensive Exam - Question Preview</h3>
                    <button class="close-preview" onclick="closeExamPreview()">×</button>
                </div>
                <div class="preview-body">
                    <p class="preview-intro">Here are sample questions from different sections of the comprehensive exam:</p>
                    ${sampleQuestions.slice(0, 5).map((item, index) => `
                        <div class="preview-question">
                            <div class="preview-source">${item.source}</div>
                            <div class="preview-question-text">${item.question.question}</div>
                            ${item.question.code ? `
                                <pre class="preview-code"><code>${item.question.code}</code></pre>
                            ` : ''}
                            ${item.question.options ? `
                                <div class="preview-options">
                                    ${item.question.options.map((option, i) => `
                                        <div class="preview-option">
                                            ${String.fromCharCode(65 + i)}. ${option}
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                            <div class="preview-type">Type: ${item.question.type || 'Multiple Choice'}</div>
                        </div>
                    `).join('')}
                    <div class="preview-footer">
                        <p><strong>Note:</strong> The actual exam will randomly select questions from all available sources and present them in a timed format.</p>
                        <button class="btn btn-primary" onclick="window.open('cpp-comprehensive-exam.html', '_blank')">
                            🚀 Launch Full Exam
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove any existing preview modal
    const existingModal = document.getElementById('previewModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', previewHTML);
    console.log('✅ Preview modal created and added to DOM');
    
    // Add event listener to close on backdrop click
    const modal = document.getElementById('previewModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeExamPreview();
            }
        });
        console.log('✅ Modal event listeners added');
    } else {
        console.error('❌ Modal not found after creation');
    }
}

// Close exam preview modal
function closeExamPreview() {
    console.log('🔒 Closing preview modal');
    const modal = document.getElementById('previewModal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modal.remove();
            console.log('✅ Preview modal removed');
        }, 300);
    } else {
        console.log('⚠️ Preview modal not found');
    }
}

// Question Database State
let currentQuestions = [];
let filteredQuestions = [];
let currentPage = 1;
let questionsPerPage = 12;
let currentView = 'grid';

// Question Database Variables
let databaseQuestions = [];
let filteredDatabaseQuestions = [];
let currentDatabasePage = 1;
const questionsPerDatabasePage = 12;
let currentFilters = {
    category: 'all',
    difficulty: 'all',
    week: 'all',
    type: 'all'
};

// Initialize question database functionality
function initializeQuestionDatabase() {
    console.log('Initializing question database...');
    
    // Load the comprehensive database
    loadComprehensiveDatabase();
    
    // Initialize view to grid by default
    toggleView('grid');
}

// Load comprehensive database questions
function loadComprehensiveDatabase() {
    // Check if questions from comprehensive-database.js are available
    if (typeof questions !== 'undefined' && questions.length > 0) {
        databaseQuestions = questions;
        filteredDatabaseQuestions = [...questions];
        console.log(`Loaded ${questions.length} questions from comprehensive database`);
    } else {
        console.warn('Comprehensive database not found, using sample data');
        databaseQuestions = generateSampleQuestions();
        filteredDatabaseQuestions = [...databaseQuestions];
    }
    
    updateDatabaseStats();
    renderDatabaseQuestions();
    updatePagination();
}

// Generate sample questions if database not available
function generateSampleQuestions() {
    const categories = ['pointers', 'arrays', 'functions', 'loops', 'strings', 'oop', 'recursion'];
    const difficulties = ['easy', 'medium', 'hard'];
    const types = ['code-output', 'error-finding', 'code-completion', 'fill-blank'];
    
    return Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        type: types[i % types.length],
        category: categories[i % categories.length],
        difficulty: difficulties[i % difficulties.length],
        week: (i % 9) + 1,
        question: `Sample C++ question ${i + 1} - What is the output or error in this code?`,
        code: `#include <iostream>\nusing namespace std;\nint main() {\n    // Sample code ${i + 1}\n    return 0;\n}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correct: i % 4,
        explanation: `This is a sample explanation for question ${i + 1}.`,
        concept: `Sample Concept ${i + 1}`,
        examTips: `Sample exam tip for question ${i + 1}.`
    }));
}

// Apply filters to database questions
function applyFilters() {
    // Get filter values
    currentFilters.category = document.getElementById('category-filter').value;
    currentFilters.difficulty = document.getElementById('difficulty-filter').value;
    currentFilters.week = document.getElementById('week-filter').value;
    currentFilters.type = document.getElementById('type-filter').value;
    
    // Apply filters
    filteredDatabaseQuestions = databaseQuestions.filter(question => {
        return (currentFilters.category === 'all' || question.category === currentFilters.category) &&
               (currentFilters.difficulty === 'all' || question.difficulty === currentFilters.difficulty) &&
               (currentFilters.week === 'all' || question.week.toString() === currentFilters.week) &&
               (currentFilters.type === 'all' || question.type === currentFilters.type);
    });
    
    // Reset to first page and update display
    currentDatabasePage = 1;
    updateResultsHeader();
    renderDatabaseQuestions();
    updatePagination();
    
    console.log(`Applied filters: ${filteredDatabaseQuestions.length} questions found`);
}

// Clear all filters
function clearFilters() {
    document.getElementById('category-filter').value = 'all';
    document.getElementById('difficulty-filter').value = 'all';
    document.getElementById('week-filter').value = 'all';
    document.getElementById('type-filter').value = 'all';
    
    currentFilters = {
        category: 'all',
        difficulty: 'all',
        week: 'all',
        type: 'all'
    };
    
    filteredDatabaseQuestions = [...databaseQuestions];
    currentDatabasePage = 1;
    updateResultsHeader();
    renderDatabaseQuestions();
    updatePagination();
    
    console.log('Filters cleared');
}

// Navigate to next page
function nextPage() {
    const totalPages = Math.ceil(filteredDatabaseQuestions.length / questionsPerDatabasePage);
    if (currentDatabasePage < totalPages) {
        currentDatabasePage++;
        renderDatabaseQuestions();
        updatePagination();
        
        // Scroll to top of questions container
        document.getElementById('questions-container').scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigate to previous page
function previousPage() {
    if (currentDatabasePage > 1) {
        currentDatabasePage--;
        renderDatabaseQuestions();
        updatePagination();
        
        // Scroll to top of questions container
        document.getElementById('questions-container').scrollIntoView({ behavior: 'smooth' });
    }
}

// Toggle between grid and list view
function toggleView(viewType) {
    const container = document.getElementById('questions-container');
    const gridBtn = document.getElementById('grid-view-btn');
    const listBtn = document.getElementById('list-view-btn');
    
    if (viewType === 'grid') {
        container.className = 'questions-grid';
        gridBtn.classList.add('active');
        listBtn.classList.remove('active');
    } else {
        container.className = 'questions-list';
        gridBtn.classList.remove('active');
        listBtn.classList.add('active');
    }
    
    renderDatabaseQuestions();
}

// Render database questions in current view
function renderDatabaseQuestions() {
    const container = document.getElementById('questions-container');
    if (!container) return;
    
    // Calculate pagination
    const startIndex = (currentDatabasePage - 1) * questionsPerDatabasePage;
    const endIndex = startIndex + questionsPerDatabasePage;
    const questionsToShow = filteredDatabaseQuestions.slice(startIndex, endIndex);
    
    if (questionsToShow.length === 0) {
        container.innerHTML = `
            <div class="no-questions">
                <div class="no-questions-icon">🔍</div>
                <h3>No Questions Found</h3>
                <p>Try adjusting your filters or clearing them to see more questions.</p>
                <button class="btn btn-primary" onclick="clearFilters()">Clear Filters</button>
            </div>
        `;
        return;
    }
    
    // Render questions based on current view
    const isGridView = container.classList.contains('questions-grid');
    
    if (isGridView) {
        container.innerHTML = questionsToShow.map(question => `
            <div class="question-card" data-question-id="${question.id}">
                <div class="question-header">
                    <div class="question-meta">
                        <span class="question-id">#${question.id}</span>
                        <span class="question-type ${question.type}">${formatType(question.type)}</span>
                        <span class="difficulty ${question.difficulty}">${getDifficultyStars(question.difficulty)}</span>
                    </div>
                    <div class="question-category">
                        <span class="category-badge ${question.category}">${formatCategory(question.category)}</span>
                        <span class="week-badge">Week ${question.week}</span>
                    </div>
                </div>
                
                <div class="question-content">
                    <h4 class="question-title">${question.question}</h4>
                    ${question.code ? `
                        <div class="code-preview">
                            <pre><code>${escapeHtml(question.code.substring(0, 200))}${question.code.length > 200 ? '...' : ''}</code></pre>
                        </div>
                    ` : ''}
                    
                    ${question.options ? `
                        <div class="options-preview">
                            <div class="option-count">${question.options.length} options available</div>
                        </div>
                    ` : ''}
                </div>
                
                <div class="question-footer">
                    <div class="question-concept">
                        <strong>Concept:</strong> ${question.concept || 'General Programming'}
                    </div>
                    <button class="btn btn-sm btn-outline" onclick="viewQuestionDetails(${question.id})">
                        View Details
                    </button>
                </div>
            </div>
        `).join('');
    } else {
        container.innerHTML = `
            <div class="questions-list-view">
                ${questionsToShow.map(question => `
                    <div class="question-list-item" data-question-id="${question.id}">
                        <div class="question-list-header">
                            <div class="question-list-meta">
                                <span class="question-id">#${question.id}</span>
                                <span class="question-type ${question.type}">${formatType(question.type)}</span>
                                <span class="difficulty ${question.difficulty}">${getDifficultyStars(question.difficulty)}</span>
                                <span class="category-badge ${question.category}">${formatCategory(question.category)}</span>
                                <span class="week-badge">Week ${question.week}</span>
                            </div>
                            <button class="btn btn-sm btn-outline" onclick="viewQuestionDetails(${question.id})">
                                View Details
                            </button>
                        </div>
                        <div class="question-list-content">
                            <h4>${question.question}</h4>
                            <p class="question-concept"><strong>Concept:</strong> ${question.concept || 'General Programming'}</p>
                            ${question.code ? `<div class="code-indicator">📝 Contains code snippet</div>` : ''}
                            ${question.options ? `<div class="options-indicator">📋 ${question.options.length} multiple choice options</div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

// Helper functions for formatting
function formatType(type) {
    const typeMap = {
        'code-output': 'Predict Output',
        'error-finding': 'Find Error',
        'code-completion': 'Complete Code',
        'step-by-step': 'Step-by-Step',
        'fill-blank': 'Fill in Blank'
    };
    return typeMap[type] || type;
}

function formatCategory(category) {
    const categoryMap = {
        'pointers': 'Pointers & Memory',
        'arrays': 'Arrays',
        'functions': 'Functions',
        'loops': 'Loops',
        'strings': 'Strings',
        'oop': 'OOP',
        'recursion': 'Recursion',
        'algorithms': 'Algorithms',
        'structures': 'Structures',
        'basics': 'Basics',
        'control': 'Control Flow'
    };
    return categoryMap[category] || category;
}

function getDifficultyStars(difficulty) {
    const difficultyMap = {
        'easy': '⭐ Easy',
        'medium': '⭐⭐ Medium',
        'hard': '⭐⭐⭐ Hard'
    };
    return difficultyMap[difficulty] || difficulty;
}

// Update pagination controls
function updatePagination() {
    const totalPages = Math.ceil(filteredDatabaseQuestions.length / questionsPerDatabasePage);
    const prevBtn = document.getElementById('prev-page-btn');
    const nextBtn = document.getElementById('next-page-btn');
    const paginationInfo = document.getElementById('pagination-info');
    
    if (prevBtn) prevBtn.disabled = currentDatabasePage === 1;
    if (nextBtn) nextBtn.disabled = currentDatabasePage >= totalPages;
    if (paginationInfo) paginationInfo.textContent = `Page ${currentDatabasePage} of ${totalPages}`;
}

// Update results header
function updateResultsHeader() {
    const header = document.getElementById('results-header');
    if (header) {
        const total = filteredDatabaseQuestions.length;
        const isFiltered = JSON.stringify(currentFilters) !== JSON.stringify({
            category: 'all',
            difficulty: 'all',
            week: 'all',
            type: 'all'
        });
        
        if (isFiltered) {
            header.textContent = `Filtered Results (${total} questions)`;
        } else {
            header.textContent = `All Questions (${total}+)`;
        }
    }
}

// Update database statistics
function updateDatabaseStats() {
    const totalQuestionsEl = document.getElementById('total-questions-db');
    if (totalQuestionsEl) {
        totalQuestionsEl.textContent = `${databaseQuestions.length}+`;
    }
    
    // Update categories count
    const categories = new Set(databaseQuestions.map(q => q.category));
    const totalCategoriesEl = document.getElementById('total-categories');
    if (totalCategoriesEl) {
        totalCategoriesEl.textContent = categories.size;
    }
}

// View question details (placeholder for modal or detailed view)
function viewQuestionDetails(questionId) {
    const question = databaseQuestions.find(q => q.id === questionId);
    if (!question) return;
    
    // Create or get the modal
    let modal = document.getElementById('question-detail-modal');
    if (!modal) {
        modal = createQuestionDetailModal();
    }
    
    // Populate the modal with question details
    populateQuestionModal(modal, question);
    
    // Show the modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function createQuestionDetailModal() {
    const modal = document.createElement('div');
    modal.id = 'question-detail-modal';
    modal.className = 'question-modal';
    modal.innerHTML = `
        <div class="modal-overlay" onclick="closeQuestionModal()"></div>
        <div class="modal-content-large">
            <div class="modal-header">
                <h2 id="modal-question-title">Question Details</h2>
                <button class="modal-close-btn" onclick="closeQuestionModal()">×</button>
            </div>
            <div class="modal-body" id="modal-question-content">
                <!-- Question content will be populated here -->
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function populateQuestionModal(modal, question) {
    const titleEl = modal.querySelector('#modal-question-title');
    const contentEl = modal.querySelector('#modal-question-content');
    
    titleEl.textContent = `Question #${question.id} - ${formatType(question.type)}`;
    
    let optionsHtml = '';
    if (question.options && question.options.length > 0) {
        optionsHtml = `
            <div class="question-options">
                <h4>Options:</h4>
                <div class="options-list">
                    ${question.options.map((option, index) => `
                        <div class="option-item ${question.correct === index ? 'correct-answer' : ''}">
                            <span class="option-letter">${String.fromCharCode(65 + index)}.</span>
                            <span class="option-text">${option}</span>
                            ${question.correct === index ? '<span class="correct-indicator">✓ Correct Answer</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    contentEl.innerHTML = `
        <div class="question-meta">
            <div class="meta-badges">
                <span class="difficulty-badge ${question.difficulty}">${getDifficultyStars(question.difficulty)}</span>
                <span class="category-badge ${question.category}">${formatCategory(question.category)}</span>
                <span class="week-badge">Week ${question.week}</span>
                ${question.marks ? `<span class="marks-badge">${question.marks} marks</span>` : ''}
            </div>
        </div>
        
        <div class="question-content">
            <div class="question-text">
                <h3>Question:</h3>
                <p>${question.question}</p>
            </div>
            
            ${question.concept ? `
                <div class="question-concept">
                    <h4>Concept:</h4>
                    <p>${question.concept}</p>
                </div>
            ` : ''}
            
            ${question.code ? `
                <div class="question-code">
                    <h4>Code:</h4>
                    <pre><code class="language-cpp">${escapeHtml(question.code)}</code></pre>
                </div>
            ` : ''}
            
            ${optionsHtml}
            
            ${question.answer ? `
                <div class="question-answer">
                    <h4>Answer:</h4>
                    <div class="answer-content">${formatExplanationText(question.answer)}</div>
                </div>
            ` : ''}
            
            ${question.explanation ? `
                <div class="question-explanation">
                    <h4>Explanation:</h4>
                    <div class="explanation-content">${formatExplanationText(question.explanation)}</div>
                </div>
            ` : ''}
            
            ${question.markingCriteria ? `
                <div class="marking-criteria">
                    <h4>Marking Criteria:</h4>
                    <div class="criteria-content">${formatExplanationText(question.markingCriteria)}</div>
                </div>
            ` : ''}
        </div>
    `;
    
    // Re-run Prism.js for syntax highlighting
    if (window.Prism) {
        Prism.highlightAllUnder(contentEl);
    }
}

function formatExplanationText(text) {
    if (!text) return '';
    
    // Convert markdown-style formatting to HTML
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/^• (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\s*)+/g, '<ul>$1</ul>')
        .replace(/\n(?!<ul>|<\/ul>)/g, '<br>')
        .replace(/<\/ul>\s*<br>/g, '</ul>')
        .replace(/<br>\s*<ul>/g, '<ul>')
        .trim();
}

function closeQuestionModal() {
    const modal = document.getElementById('question-detail-modal');
    if (modal && modal.style.display === 'flex') {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Add keyboard event listener for modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeQuestionModal();
    }
});

// Escape HTML for security
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize event listeners for question database controls
function initializeQuestionDatabaseControls() {
    console.log('Initializing question database controls...');
    
    // The pagination controls use onclick attributes in HTML, 
    // so we don't need to add event listeners here
    
    // Filter controls already use onclick attributes
    // View toggle buttons already use onclick attributes
    
    console.log('Question database controls initialized');
}

// Call this function to initialize everything
function initializeAll() {
    initializeNavigation();
    initializeHamburgerMenu();
    initializeQuestions();
    loadWeekContent();
    initializeExamPresets();
    initializeQuestionDatabase();
    initializeQuestionDatabaseControls();
}

// Initialize everything on DOM content loaded
document.addEventListener('DOMContentLoaded', initializeAll);

// For testing: manually trigger question database initialization
setTimeout(() => {
    console.log('Triggering question database initialization for testing');
    initializeQuestionDatabase();
}, 1000);

// Enhanced question navigation and utility functions
function highlightCorrectAnswers(questionId) {
    const questionData = findQuestionById(questionId);
    if (!questionData || !questionData.options) return;
    
    const optionButtons = document.querySelectorAll(`[data-question="${questionId}"][data-option]`);
    
    optionButtons.forEach((btn, index) => {
        if (index === questionData.correct) {
            btn.classList.add('correct-highlight');
        }
    });
}

// Auto-scroll to question when showing answer
function scrollToQuestion(questionId) {
    const questionElement = document.querySelector(`[data-question-id="${questionId}"]`);
    if (questionElement) {
        questionElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
        });
    }
}

// Reset all question states
function resetAllQuestions() {
    // Reset all option selections
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect', 'correct-highlight');
    });
    
    // Hide all answers
    document.querySelectorAll('.answer-section.show').forEach(section => {
        section.classList.remove('show');
    });
    
    // Reset all answer buttons
    document.querySelectorAll('.show-answer-btn.answer-shown').forEach(btn => {
        btn.classList.remove('answer-shown');
        const isMockExam = btn.textContent.includes('Hide');
        btn.textContent = isMockExam ? 'Show Answer & Marking Scheme' : 'Show Answer';
    });
    
    // Reset cheat mode buttons
    document.querySelectorAll('.toggle-cheat-btn.cheat-active').forEach(btn => {
        btn.classList.remove('cheat-active');
        btn.textContent = 'Show Hints';
    });
    
    // Remove cheat mode from questions
    document.querySelectorAll('.question-container.cheat-mode').forEach(container => {
        container.classList.remove('cheat-mode');
    });
    
    console.log('All questions reset to initial state');
}

// Show all answers (for study mode)
function showAllAnswers() {
    document.querySelectorAll('.show-answer-btn').forEach(btn => {
        const questionId = btn.getAttribute('data-question');
        if (questionId && !btn.classList.contains('answer-shown')) {
            toggleAnswer(questionId);
        }
    });
    console.log('All answers shown');
}

// Hide all answers
function hideAllAnswers() {
    document.querySelectorAll('.show-answer-btn.answer-shown').forEach(btn => {
        const questionId = btn.getAttribute('data-question');
        if (questionId) {
            toggleAnswer(questionId);
        }
    });
    console.log('All answers hidden');
}

// Enhanced error handling for question operations
function safeToggleAnswer(questionId) {
    try {
        toggleAnswer(questionId);
    } catch (error) {
        console.error('Error toggling answer for question', questionId, ':', error);
        // Fallback: try to find and show/hide manually
        const answerSection = document.getElementById(`answer-${questionId}`);
        if (answerSection) {
            answerSection.style.display = answerSection.style.display === 'block' ? 'none' : 'block';
        }
    }
}

// Study session management
let studySession = {
    startTime: null,
    questionsAttempted: new Set(),
    correctAnswers: new Set(),
    timeSpent: 0,
    currentStreak: 0,
    bestStreak: 0
};

// Initialize study session
function startStudySession() {
    studySession.startTime = new Date();
    studySession.questionsAttempted.clear();
    studySession.correctAnswers.clear();
    studySession.timeSpent = 0;
    studySession.currentStreak = 0;
    
    console.log('Study session started at:', studySession.startTime);
    updateStudySessionDisplay();
}

// Update study session stats
function updateStudySession(questionId, isCorrect = false) {
    if (!studySession.startTime) {
        startStudySession();
    }
    
    studySession.questionsAttempted.add(questionId);
    
    if (isCorrect) {
        studySession.correctAnswers.add(questionId);
        studySession.currentStreak++;
        studySession.bestStreak = Math.max(studySession.bestStreak, studySession.currentStreak);
    } else {
        studySession.currentStreak = 0;
    }
    
    studySession.timeSpent = Math.floor((new Date() - studySession.startTime) / 1000);
    updateStudySessionDisplay();
}

// Display study session stats
function updateStudySessionDisplay() {
    const statsContainer = document.getElementById('study-stats');
    if (!statsContainer) return;
    
    const accuracy = studySession.questionsAttempted.size > 0 
        ? Math.round((studySession.correctAnswers.size / studySession.questionsAttempted.size) * 100)
        : 0;
    
    const timeFormatted = formatTime(studySession.timeSpent);
    
    statsContainer.innerHTML = `
        <div class="study-stat">
            <span class="stat-label">📊 Attempted:</span>
            <span class="stat-value">${studySession.questionsAttempted.size}</span>
        </div>
        <div class="study-stat">
            <span class="stat-label">✅ Correct:</span>
            <span class="stat-value">${studySession.correctAnswers.size}</span>
        </div>
        <div class="study-stat">
            <span class="stat-label">🎯 Accuracy:</span>
            <span class="stat-value">${accuracy}%</span>
        </div>
        <div class="study-stat">
            <span class="stat-label">⏱️ Time:</span>
            <span class="stat-value">${timeFormatted}</span>
        </div>
        <div class="study-stat">
            <span class="stat-label">🔥 Streak:</span>
            <span class="stat-value">${studySession.currentStreak}</span>
        </div>
    `;
}

// Format time in MM:SS format
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Create study controls toolbar
function createStudyControls() {
    return `
        <div class="study-controls-toolbar">
            <div class="study-controls-section">
                <h4>📚 Study Tools</h4>
                <div class="control-buttons">
                    <button class="btn btn-success btn-sm" onclick="showAllAnswers()">
                        📖 Show All Answers
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="hideAllAnswers()">
                        🙈 Hide All Answers
                    </button>
                    <button class="btn btn-warning btn-sm" onclick="resetAllQuestions()">
                        🔄 Reset All
                    </button>
                    <button class="btn btn-info btn-sm" onclick="shuffleQuestions()">
                        🔀 Shuffle Order
                    </button>
                </div>
            </div>
            
            <div class="study-controls-section">
                <h4>📈 Study Session</h4>
                <div id="study-stats" class="study-stats-container">
                    <!-- Stats will be populated here -->
                </div>
                <div class="session-buttons">
                    <button class="btn btn-primary btn-sm" onclick="startStudySession()">
                        🚀 New Session
                    </button>
                    <button class="btn btn-info btn-sm" onclick="exportStudyData()">
                        💾 Export Progress
                    </button>
                </div>
            </div>
            
            <div class="study-controls-section">
                <h4>🎯 Focus Mode</h4>
                <div class="focus-controls">
                    <label class="toggle-switch">
                        <input type="checkbox" id="focus-mode-toggle" onchange="toggleFocusMode()">
                        <span class="slider">Focus Mode</span>
                    </label>
                    <label class="toggle-switch">
                        <input type="checkbox" id="auto-next-toggle" onchange="toggleAutoNext()">
                        <span class="slider">Auto Next</span>
                    </label>
                </div>
            </div>
        </div>
    `;
}

// Shuffle questions randomly
function shuffleQuestions() {
    const currentSection = document.querySelector('.content-section.active');
    if (!currentSection) return;
    
    const questionCards = Array.from(currentSection.querySelectorAll('.question-card'));
    if (questionCards.length === 0) return;
    
    // Fisher-Yates shuffle
    for (let i = questionCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionCards[i], questionCards[j]] = [questionCards[j], questionCards[i]];
    }
    
    // Re-append shuffled elements
    const container = questionCards[0].parentElement;
    questionCards.forEach(card => container.appendChild(card));
    
    // Update question numbers
    questionCards.forEach((card, index) => {
        const numberSpan = card.querySelector('.question-number');
        if (numberSpan) {
            numberSpan.textContent = `Question ${index + 1}`;
        }
    });
    
    console.log('Questions shuffled randomly');
    
    // Show notification
    showNotification('🔀 Questions shuffled!', 'success');
}

// Toggle focus mode
function toggleFocusMode() {
    const focusToggle = document.getElementById('focus-mode-toggle');
    const body = document.body;
    
    if (focusToggle.checked) {
        body.classList.add('focus-mode');
        showNotification('🎯 Focus Mode enabled - distractions minimized', 'info');
    } else {
        body.classList.remove('focus-mode');
        showNotification('Focus Mode disabled', 'info');
    }
}

// Toggle auto-next functionality
function toggleAutoNext() {
    const autoNextToggle = document.getElementById('auto-next-toggle');
    
    if (autoNextToggle.checked) {
        showNotification('⚡ Auto-next enabled - answers will show automatically', 'info');
    } else {
        showNotification('Auto-next disabled', 'info');
    }
}

// Export study session data
function exportStudyData() {
    if (!studySession.startTime) {
        showNotification('⚠️ No study session active', 'warning');
        return;
    }
    
    const data = {
        sessionStart: studySession.startTime,
        sessionEnd: new Date(),
        questionsAttempted: Array.from(studySession.questionsAttempted),
        correctAnswers: Array.from(studySession.correctAnswers),
        totalTimeSpent: studySession.timeSpent,
        accuracy: studySession.questionsAttempted.size > 0 
            ? Math.round((studySession.correctAnswers.size / studySession.questionsAttempted.size) * 100)
            : 0,
        bestStreak: studySession.bestStreak,
        currentStreak: studySession.currentStreak
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cpp-study-session-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('📊 Study data exported successfully!', 'success');
}

// Show notification to user
function showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">×</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 3000);
}

// Add bookmark functionality
function toggleBookmark(questionId) {
    const bookmarks = JSON.parse(localStorage.getItem('cpp-bookmarks') || '[]');
    const questionCard = document.querySelector(`[data-question-id="${questionId}"]`);
    
    if (bookmarks.includes(questionId)) {
        // Remove bookmark
        const index = bookmarks.indexOf(questionId);
        bookmarks.splice(index, 1);
        questionCard?.classList.remove('bookmarked');
        showNotification('📌 Bookmark removed', 'info');
    } else {
        // Add bookmark
        bookmarks.push(questionId);
        questionCard?.classList.add('bookmarked');
        showNotification('🔖 Question bookmarked!', 'success');
    }
    
    localStorage.setItem('cpp-bookmarks', JSON.stringify(bookmarks));
    updateBookmarkDisplay();
}

// Load and display bookmarks
function loadBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('cpp-bookmarks') || '[]');
    bookmarks.forEach(questionId => {
        const questionCard = document.querySelector(`[data-question-id="${questionId}"]`);
        questionCard?.classList.add('bookmarked');
    });
}

// Update bookmark display
function updateBookmarkDisplay() {
    const bookmarks = JSON.parse(localStorage.getItem('cpp-bookmarks') || '[]');
    const bookmarkCount = document.getElementById('bookmark-count');
    if (bookmarkCount) {
        bookmarkCount.textContent = bookmarks.length;
    }
}

// Enhanced question tracking with performance analytics
function trackQuestionPerformance(questionId, timeSpent, attempts, isCorrect) {
    const performance = JSON.parse(localStorage.getItem('cpp-performance') || '{}');
    
    if (!performance[questionId]) {
        performance[questionId] = {
            attempts: 0,
            correctAttempts: 0,
            totalTimeSpent: 0,
            averageTime: 0,
            lastAttempted: null,
            difficulty: 'unknown'
        };
    }
    
    const questionPerf = performance[questionId];
    questionPerf.attempts += attempts;
    if (isCorrect) questionPerf.correctAttempts++;
    questionPerf.totalTimeSpent += timeSpent;
    questionPerf.averageTime = Math.round(questionPerf.totalTimeSpent / questionPerf.attempts);
    questionPerf.lastAttempted = new Date().toISOString();
    
    localStorage.setItem('cpp-performance', JSON.stringify(performance));
    
    // Update study session
    updateStudySession(questionId, isCorrect);
}

// Get weak areas based on performance
function getWeakAreas() {
    const performance = JSON.parse(localStorage.getItem('cpp-performance') || '{}');
    const weakQuestions = [];
    
    Object.entries(performance).forEach(([questionId, data]) => {
        const accuracy = data.attempts > 0 ? (data.correctAttempts / data.attempts) : 0;
        if (accuracy < 0.6 && data.attempts >= 2) { // Less than 60% accuracy with at least 2 attempts
            weakQuestions.push({
                questionId,
                accuracy: Math.round(accuracy * 100),
                attempts: data.attempts
            });
        }
    });
    
    return weakQuestions.sort((a, b) => a.accuracy - b.accuracy);
}

// Create weak areas report
function showWeakAreasReport() {
    const weakAreas = getWeakAreas();
    
    if (weakAreas.length === 0) {
        showNotification('🎉 Great job! No weak areas detected.', 'success');
        return;
    }
    
    const reportHTML = `
        <div class="weak-areas-modal">
            <div class="modal-overlay" onclick="closeWeakAreasReport()"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h3>📊 Areas for Improvement</h3>
                    <button onclick="closeWeakAreasReport()">×</button>
                </div>
                <div class="modal-body">
                    <p>Based on your performance, here are areas that need more practice:</p>
                    <div class="weak-areas-list">
                        ${weakAreas.slice(0, 10).map(area => `
                            <div class="weak-area-item">
                                <span class="question-id">Question #${area.questionId}</span>
                                <span class="accuracy ${area.accuracy < 40 ? 'very-low' : 'low'}">${area.accuracy}% accuracy</span>
                                <span class="attempts">${area.attempts} attempts</span>
                                <button class="btn btn-sm" onclick="focusOnQuestion('${area.questionId}')">
                                    📚 Review
                                </button>
                            </div>
                        `).join('')}
                    </div>
                    <div class="report-actions">
                        <button class="btn btn-primary" onclick="createCustomPracticeSet()">
                            🎯 Create Practice Set
                        </button>
                        <button class="btn btn-secondary" onclick="exportPerformanceData()">
                            📊 Export Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', reportHTML);
}

function closeWeakAreasReport() {
    const modal = document.querySelector('.weak-areas-modal');
    if (modal) modal.remove();
}

// Focus on specific question
function focusOnQuestion(questionId) {
    const questionElement = document.querySelector(`[data-question-id="${questionId}"]`);
    if (questionElement) {
        questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        questionElement.classList.add('highlight-question');
        
        setTimeout(() => {
            questionElement.classList.remove('highlight-question');
        }, 3000);
    }
    
    closeWeakAreasReport();
}
