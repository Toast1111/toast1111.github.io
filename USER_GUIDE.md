# SAT Prep Platform - User Guide for Beta Testers and Bug Hunters

## Table of Contents
1. [Getting Started](#getting-started)
2. [Main Dashboard Overview](#main-dashboard-overview)
3. [Practice Test Features](#practice-test-features)
4. [User Account Management](#user-account-management)
5. [Settings and Data Management](#settings-and-data-management)
6. [Technical Features](#technical-features)
7. [Testing Scenarios for Bug Hunters](#testing-scenarios-for-bug-hunters)
8. [Known Issues and Troubleshooting](#known-issues-and-troubleshooting)
9. [Feature Testing Checklist](#feature-testing-checklist)

---

## Getting Started

### Accessing the Platform
- **URL**: Visit the SAT Prep platform at `https://toast1111.github.io` (or your test environment URL)
- **Browser Compatibility**: Works on modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Support**: Responsive design works on mobile devices and tablets

### Account Options
**Guest Mode:**
- No sign-in required
- Full access to practice tests
- Progress is NOT saved between sessions
- Ideal for quick testing or anonymous usage

**Google Sign-In:**
- Click "Sign In with Google" button in the top-right corner
- Requires Google account authentication
- Progress and test results are saved to your account
- Access to historical data and progress tracking

---

## Main Dashboard Overview

![Dashboard Screenshot](https://github.com/user-attachments/assets/b6de4fcd-3a7d-43ed-8f6d-3e3fb9feb46d)

### Header Section
- **Logo**: "SAT Prep" - clicking returns to homepage
- **User Info**: Shows "Guest" or your Google profile
- **Sign In Button**: Google authentication (guests only)
- **Settings Button**: Access to data management and settings
- **Home Button**: Available when navigating from practice tests

### Main Content Areas

#### 1. Your Tests Section
- **Active Tab**: Shows currently assigned or active tests
- **Past Tab**: Historical test records (for signed-in users)
- **Message**: "You may have an upcoming test assigned to you"

#### 2. Practice and Prepare Section
Three practice modules available:

**📐 Math Practice**
- Algebraic equations and problem solving
- Geometry and trigonometry questions
- Includes access to built-in calculator
- Timed practice sessions

**📚 Verbal Practice**
- Vocabulary and word choice questions
- Reading comprehension
- Synonym and antonym challenges
- Context-based questions

**✍️ Writing Practice**
- Grammar and punctuation
- Sentence structure and clarity
- Reading passages with analysis questions
- Language usage and style

#### 3. Admin Panel
- **Refresh Data**: Updates test data and user information
- Available to all users for testing purposes

---

## Practice Test Features

### Starting a Practice Session

1. **Select Practice Type**: Click on Math, Verbal, or Writing Practice
2. **Test Interface Loads**: Automatic redirection to test.html with appropriate question type
3. **Timer Starts**: 10-minute countdown timer begins automatically
4. **Question Display**: First question appears with multiple choice options

### Test Interface Components

#### Question Area
- **Question Text**: Main problem or prompt
- **Multiple Choice Options**: 4 options (A, B, C, D format)
- **Passage Display**: Some questions include reading passages (especially Writing section)

#### Navigation Controls
- **Next Question Button**: Advance to next question
- **Back to Menu**: Return to main dashboard
- **Home Button**: Navigate to homepage

#### Timer Display
- **Format**: MM:SS (e.g., "10:00")
- **Location**: Top-right of question area
- **Behavior**: Counts down from 10 minutes
- **Auto-submit**: Test ends when timer reaches 0:00

#### Calculator (Math Practice Only)
- **Toggle Calculator Button**: Shows/hides calculator
- **DOS-Style Interface**: Retro calculator design
- **Basic Operations**: Addition, subtraction, multiplication, division
- **Decimal Support**: Handles decimal calculations
- **Clear Function**: Reset calculator to 0

### Question Types by Section

#### Math Practice
- Linear equations (e.g., "Solve for x: 2x + 5 = 13")
- Geometry problems (area, slope calculations)
- Algebraic simplification
- Square root and exponent problems

#### Verbal Practice
- Vocabulary completion
- Antonym identification
- Synonym selection
- Context-based word meaning

#### Writing Practice
- Grammar correction
- Sentence structure
- Reading comprehension with passages
- Scientific and academic text analysis

---

## User Account Management

### Guest Users
- **No Registration Required**: Immediate access to all features
- **Session-Based**: Progress lost when browser closes
- **No Data Persistence**: Results not saved
- **Full Functionality**: All practice tests available

### Signed-In Users (Google Authentication)

#### Sign-In Process
1. Click "Sign In with Google"
2. Google OAuth popup appears
3. Select/authenticate Google account
4. Automatic return to platform with profile loaded
5. Profile picture and name display in header

#### Data Persistence
- **Practice Sessions**: Incomplete tests saved automatically
- **Completed Tests**: Full results stored with timestamps
- **Progress Tracking**: Historical performance data
- **Cross-Device Access**: Data available on any device

---

## Settings and Data Management

### Accessing Settings
- Click "Settings" button in header
- Settings panel overlays the main content
- Available to both guests and signed-in users

### Settings Options

#### For All Users
**View Saved Practice Session**
- Shows any interrupted practice session data
- Allows resuming from where you left off
- Displays question number and test type

**Clear Saved Practice Session**
- Removes any saved in-progress session
- Cannot be undone
- Useful for starting fresh

#### For Signed-In Users Only
**View Completed Tests**
- Historical test results and scores
- Timestamps and performance metrics
- Detailed question-by-question breakdown

**Clear Completed Tests**
- Removes all historical test data
- Permanent deletion (cannot be undone)
- Use with caution

**Admin Login**
- Additional administrative features
- May require special permissions
- Contact platform administrator for access

### Closing Settings
- Click "Close" button to exit settings panel
- Changes are saved automatically
- Return to main dashboard

---

## Technical Features

### Data Storage Architecture
- **Firebase Integration**: Real-time database for user data
- **Local Storage Fallback**: Browser storage for guests
- **Automatic Synchronization**: Data syncs across devices for signed-in users

### Performance Features
- **Responsive Design**: Adapts to screen size
- **Fast Loading**: Optimized JavaScript and CSS
- **Offline Capability**: Basic functionality works offline
- **Progress Auto-Save**: Continuous saving during tests

### Browser Requirements
- **JavaScript Enabled**: Required for full functionality
- **Cookies Allowed**: For session management
- **Modern Browser**: ES6+ support recommended
- **Internet Connection**: Required for sign-in and data sync

---

## Testing Scenarios for Bug Hunters

### Authentication Testing

#### Guest Mode Testing
1. **Access without sign-in**: Verify all features work
2. **Data persistence**: Confirm data doesn't save between sessions
3. **Functionality parity**: Ensure same features as signed-in users (except data saving)

#### Google Sign-In Testing
1. **OAuth flow**: Test Google authentication process
2. **Account switching**: Sign out and sign in with different accounts
3. **Profile display**: Verify correct name and picture appear
4. **Session persistence**: Test staying signed in across browser sessions

### Practice Test Workflows

#### Math Practice Testing
1. **Calculator functionality**: Test all mathematical operations
2. **Question progression**: Verify next question button works
3. **Timer accuracy**: Confirm 10-minute countdown
4. **Calculator toggle**: Show/hide calculator multiple times
5. **Answer validation**: Check if correct answers are properly tracked

#### Verbal Practice Testing
1. **Question variety**: Confirm different question types appear
2. **Option selection**: Test multiple choice interactions
3. **Text rendering**: Verify special characters display correctly
4. **Navigation flow**: Test question progression

#### Writing Practice Testing
1. **Passage display**: Test questions with and without reading passages
2. **Long text handling**: Verify passages display properly
3. **Answer options**: Test longer answer choice handling
4. **Mixed content**: Test questions with passages vs. standalone questions

### Data Management Testing

#### Save/Load Functionality
1. **Session interruption**: Start test, close browser, return
2. **Cross-device sync**: Sign in on different devices
3. **Data corruption**: Test with invalid data scenarios
4. **Clear operations**: Test clearing saved sessions and completed tests

#### Settings Panel Testing
1. **Panel overlay**: Verify settings display over main content
2. **Button functionality**: Test all settings buttons
3. **Data display**: Verify saved session and completed test views
4. **Close functionality**: Test closing settings panel

### Edge Case Testing

#### Timer and Navigation
1. **Timer expiration**: Let timer reach 0:00
2. **Rapid navigation**: Click buttons quickly/repeatedly
3. **Back button**: Use browser back button during tests
4. **Tab switching**: Switch browser tabs during tests

#### UI Responsiveness
1. **Screen resizing**: Test on different screen sizes
2. **Mobile orientation**: Test portrait/landscape on mobile
3. **Zoom levels**: Test with browser zoom at different levels
4. **Accessibility**: Test with screen readers and keyboard navigation

---

## Known Issues and Troubleshooting

### Common Issues

#### Calculator Not Appearing
- **Symptom**: Calculator button doesn't show calculator
- **Solution**: Refresh page, ensure JavaScript is enabled
- **Test**: Only occurs in Math practice mode

#### Timer Not Starting
- **Symptom**: Timer stays at 10:00
- **Solution**: Check JavaScript console for errors
- **Workaround**: Refresh page and restart test

#### Questions Not Loading
- **Symptom**: Blank question area
- **Solution**: Check network connection, refresh page
- **Fallback**: Try different practice mode

#### Sign-In Issues
- **Symptom**: Google sign-in popup blocked
- **Solution**: Allow popups for the site domain
- **Alternative**: Try incognito/private browsing mode

#### Data Not Saving
- **Symptom**: Progress lost between sessions (signed-in users)
- **Solution**: Check Firebase connectivity
- **Workaround**: Note manual progress tracking

### Browser-Specific Issues

#### Safari
- **Calculator display**: May have styling issues
- **Solution**: Use Chrome or Firefox for testing

#### Mobile Browsers
- **Button sizing**: Buttons may be small on some devices
- **Landscape mode**: Timer may overlap content
- **Touch responsiveness**: Double-tap issues possible

### Performance Issues
- **Slow loading**: Check internet connection speed
- **Memory usage**: Close other tabs if browser slows down
- **Cache issues**: Clear browser cache if updates don't appear

---

## Feature Testing Checklist

### Pre-Test Setup
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile and desktop devices
- [ ] Clear browser cache and cookies
- [ ] Disable browser extensions that might interfere

### Authentication Features
- [ ] Guest mode access and functionality
- [ ] Google sign-in process
- [ ] Sign-out process
- [ ] Profile information display
- [ ] Account switching between different Google accounts

### Main Dashboard
- [ ] All buttons and links work
- [ ] Responsive design on different screen sizes
- [ ] Navigation between sections
- [ ] Visual elements load correctly
- [ ] Settings panel opens and closes

### Math Practice Testing
- [ ] Test questions load properly
- [ ] Calculator appears when toggled
- [ ] All calculator operations work (+ - × ÷)
- [ ] Calculator clear function works
- [ ] Decimal calculations work correctly
- [ ] Timer counts down properly
- [ ] Next question navigation works
- [ ] Answer selection and feedback

### Verbal Practice Testing
- [ ] Questions display correctly
- [ ] Multiple choice options work
- [ ] Answer selection provides feedback
- [ ] Question variety and randomization
- [ ] Navigation between questions
- [ ] Timer functionality

### Writing Practice Testing
- [ ] Passage-based questions display correctly
- [ ] Long text passages are readable
- [ ] Questions without passages work
- [ ] Answer options display properly
- [ ] Mixed question types in same session

### Data Persistence (Signed-in Users)
- [ ] Save practice session mid-test
- [ ] Resume saved practice session
- [ ] View completed test history
- [ ] Clear saved sessions
- [ ] Clear completed tests
- [ ] Cross-device data synchronization

### Settings and Admin Functions
- [ ] Settings panel accessibility
- [ ] View saved practice session data
- [ ] Clear functions work properly
- [ ] Admin panel refresh data button
- [ ] Close settings panel

### Error Handling
- [ ] Network disconnection during test
- [ ] Invalid data scenarios
- [ ] JavaScript disabled
- [ ] Popup blockers enabled
- [ ] Browser back/forward buttons
- [ ] Page refresh during test

### Performance Testing
- [ ] Load time under 3 seconds
- [ ] Responsive interactions
- [ ] Memory usage reasonable
- [ ] No JavaScript errors in console
- [ ] Smooth animations and transitions

### Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast sufficient
- [ ] Text scaling works
- [ ] Focus indicators visible

---

## Bug Reporting Guidelines

When reporting bugs, please include:

1. **Browser and Version**: Chrome 96, Safari 15.1, etc.
2. **Device Type**: Desktop, iPhone 12, Android tablet, etc.
3. **User Type**: Guest or signed-in user
4. **Steps to Reproduce**: Detailed step-by-step instructions
5. **Expected Behavior**: What should happen
6. **Actual Behavior**: What actually happened
7. **Screenshots**: Visual evidence when applicable
8. **Console Errors**: Any JavaScript errors (F12 → Console)
9. **Network Issues**: Any failed network requests

### Priority Levels
- **Critical**: Data loss, unable to access main features
- **High**: Important features broken, significant usability issues
- **Medium**: Minor feature issues, cosmetic problems
- **Low**: Enhancement suggestions, edge cases

---

## Contact and Support

For technical issues or questions about testing:
- Check this documentation first
- Review browser console for JavaScript errors
- Test on different browsers/devices
- Document steps to reproduce issues
- Report bugs with detailed information

Remember: As a beta tester, your feedback is crucial for improving the platform. Test thoroughly and document everything you find!