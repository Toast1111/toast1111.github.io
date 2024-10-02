// storage.js

const STORAGE_KEY = 'SAT_PRACTICE_DATA';
const COMPLETED_TESTS_KEY = 'COMPLETED_TESTS';

// Save current practice session
function savePracticeSession(practiceData) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(practiceData));
}

// Load saved practice session
function loadPracticeSession() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    return savedData ? JSON.parse(savedData) : null;
}

// Clear saved practice session
function clearPracticeSession() {
    localStorage.removeItem(STORAGE_KEY);
}

// Save completed test
function saveCompletedTest(testData) {
    let completedTests = JSON.parse(localStorage.getItem(COMPLETED_TESTS_KEY) || '[]');
    completedTests.push(testData);
    localStorage.setItem(COMPLETED_TESTS_KEY, JSON.stringify(completedTests));
}

// Get all completed tests
function getCompletedTests() {
    return JSON.parse(localStorage.getItem(COMPLETED_TESTS_KEY) || '[]');
}

// Make these functions available globally
window.satPracticeStorage = {
    savePracticeSession,
    loadPracticeSession,
    clearPracticeSession,
    saveCompletedTest,
    getCompletedTests
};
