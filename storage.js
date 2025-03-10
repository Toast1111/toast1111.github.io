// storage.js
// Replaces localStorage with Firebase Realtime Database calls
// for signed-in users. Guests do not persist data.

(function() {
  const auth = firebase.auth();
  const db = firebase.database();

  // Save current practice session to DB (for signed-in users)
  function savePracticeSession(practiceData) {
    const user = auth.currentUser;
    if (!user) return;  // skip if guest
    db.ref(`users/${user.uid}/practiceSession`).set(practiceData);
  }

  // Load saved practice session from DB
  // Takes a callback, because reading from Firebase is async
  function loadPracticeSession(callback) {
    const user = auth.currentUser;
    if (!user) {
      callback(null);
      return;
    }
    db.ref(`users/${user.uid}/practiceSession`).once('value')
      .then(snapshot => {
        callback(snapshot.val()); // returns the practiceData or null
      });
  }

  // Clear saved practice session from DB
  function clearPracticeSession() {
    const user = auth.currentUser;
    if (!user) return;
    db.ref(`users/${user.uid}/practiceSession`).remove();
  }

  // Save a completed test result to DB
  function saveCompletedTest(testData) {
    const user = auth.currentUser;
    if (!user) return; // skip for guest
    // push() appends a new entry in 'completedTests'
    db.ref(`users/${user.uid}/completedTests`).push(testData);
  }

  // Get all completed tests from DB
  // Callback gets an array of test objects
  function getCompletedTests(callback) {
    const user = auth.currentUser;
    if (!user) {
      callback([]);
      return;
    }
    db.ref(`users/${user.uid}/completedTests`).once('value')
      .then(snapshot => {
        const data = snapshot.val();
        if (data) {
          // Ensure each test has a questionIDs property
          const tests = Object.values(data).map(test => {
            if (!test.questionIDs) {
              test.questionIDs = [];
            }
            return test;
          });
          callback(tests);
        } else {
          callback([]);
        }
      });
  }

  // Get assigned (upcoming) tests from DB
  // This assumes tests assigned to the user are stored under assignedTests/<uid>
  function getAssignedTests(callback) {
    const user = auth.currentUser;
    if (!user) {
      callback([]);
      return;
    }
    db.ref(`assignedTests/${user.uid}`).once('value')
      .then(snapshot => {
        const data = snapshot.val();
        if (data) {
          callback(Object.values(data));
        } else {
          callback([]);
        }
      });
  }

  // Expose these functions globally as satPracticeStorage
  window.satPracticeStorage = {
    savePracticeSession,
    loadPracticeSession,
    clearPracticeSession,
    saveCompletedTest,
    getCompletedTests,
    getAssignedTests
  };
})();
