# SAT Prep Platform - Quick Reference for Beta Testers

## Quick Start Guide

### Immediate Testing Access
1. Visit the platform URL
2. Start testing immediately as Guest (no sign-in required)
3. Or click "Sign In with Google" for full functionality

### Essential Test Scenarios

#### 🔥 Critical Path Testing
- [ ] **Homepage Load**: Verify main dashboard displays correctly
- [ ] **Math Practice**: Start test, use calculator, complete questions
- [ ] **Verbal Practice**: Test vocabulary and comprehension questions
- [ ] **Writing Practice**: Test grammar and passage-based questions
- [ ] **Timer Function**: Confirm 10-minute countdown works
- [ ] **Navigation**: Test all buttons and menu options

#### 🚨 High Priority Bugs to Watch For
- Calculator not appearing in Math mode
- Timer not starting or stopping incorrectly
- Questions not loading or displaying blank
- Sign-in popup blocked or failing
- Data not saving for signed-in users
- Settings panel not opening

#### 📱 Cross-Platform Testing
- Test on Chrome, Firefox, Safari, Edge
- Test on mobile phones and tablets
- Test in portrait and landscape modes
- Test with different screen sizes/zoom levels

### Quick Bug Report Template
```
**Browser**: Chrome 96 / Safari 15 / Firefox 94
**Device**: Desktop / iPhone 12 / Android tablet
**User Type**: Guest / Signed-in
**Bug**: Brief description
**Steps**: 1. Do this 2. Then this 3. Bug occurs
**Expected**: What should happen
**Screenshot**: [Attach if applicable]
```

### Feature Quick Test Checklist
- [ ] All practice buttons work (Math/Verbal/Writing)
- [ ] Calculator toggles in Math practice
- [ ] Timer counts down from 10:00
- [ ] Next Question button advances properly
- [ ] Settings panel opens and closes
- [ ] Google sign-in process completes
- [ ] Data persistence works for signed-in users
- [ ] Admin panel refresh button works

### Common Issues & Quick Fixes
- **Calculator missing**: Refresh page, check JavaScript enabled
- **Timer stuck**: Refresh page, restart test
- **Sign-in blocked**: Allow popups, try incognito mode
- **Slow loading**: Check internet connection, clear cache

### Emergency Contact Scenarios
Report immediately if you find:
- Data loss or corruption
- Security vulnerabilities 
- Complete feature failures
- Performance issues causing crashes

---

For complete documentation, see [USER_GUIDE.md](USER_GUIDE.md)