# 🚀 Portfolio Batch Scripts

I've created **3 batch scripts** to run your portfolio easily on Windows:

## 📂 Available Scripts

### 1. **`quick-start.bat`** ⚡ *Recommended for daily use*
```batch
# Double-click to run
quick-start.bat
```
- **Super simple** - just double-click and go!
- Automatically installs dependencies if needed
- Opens browser at `http://localhost:3000` after 4 seconds
- Starts development server immediately
- **Perfect for**: Quick testing and daily development

---

### 2. **`run-portfolio.bat`** 🎯 *Detailed with status*
```batch
# Double-click to run  
run-portfolio.bat
```
- **Comprehensive checks** - validates Node.js, dependencies, etc.
- Shows detailed status and error messages
- Nice formatted output with progress indicators
- Automatically opens browser
- **Perfect for**: First-time setup and troubleshooting

---

### 3. **`portfolio-manager.bat`** 🛠️ *Full control panel*
```batch
# Double-click to run
portfolio-manager.bat
```
- **Interactive menu** with 6 options:
  - `[1]` 🚀 Start Development Server
  - `[2]` 🔧 Install/Update Dependencies  
  - `[3]` 🏗️ Build for Production
  - `[4]` 🌐 Start Production Server
  - `[5]` 🔍 Check System Status
  - `[6]` 📖 Open Browser Only
- **Perfect for**: Production builds, system diagnostics, full control

---

## 🎯 Quick Start Guide

### For Daily Use:
1. **Double-click** `quick-start.bat`
2. Wait 4 seconds for browser to open
3. Your portfolio loads at `http://localhost:3000`
4. **Done!** ✨

### For First Time:
1. **Double-click** `run-portfolio.bat` 
2. It will install dependencies automatically
3. Browser opens with your portfolio
4. Check that all features work:
   - ✅ Auto-hide navigation (scroll down/up)
   - ✅ Dark/light toggle (bottom-right corner)
   - ✅ Smooth animations on scroll
   - ✅ Interactive card hovers

### For Production:
1. **Double-click** `portfolio-manager.bat`
2. Choose `[3]` to build for production
3. Choose `[4]` to start production server
4. Test your optimized portfolio

---

## 🔧 What Each Script Does

| Script | Dependencies | Build | Server | Browser | Use Case |
|--------|-------------|-------|---------|---------|----------|
| `quick-start.bat` | ✅ Auto | ❌ | ✅ Dev | ✅ Auto | Daily development |
| `run-portfolio.bat` | ✅ Auto | ❌ | ✅ Dev | ✅ Auto | First time + debugging |
| `portfolio-manager.bat` | ⚙️ Manual | ⚙️ Manual | ⚙️ Both | ⚙️ Manual | Full control |

---

## 🌐 Your Portfolio Features

Once running, you'll see:

### ✨ **Auto-Hide Navigation**
- Disappears when scrolling down
- Appears when scrolling up
- Smooth animations

### 🌓 **Theme Toggle** 
- Fixed bottom-right corner
- Persists your preference
- Smooth dark/light transitions

### 🎨 **Micro-Interactions**
- Cards lift 2px on hover
- Fade-up animations on scroll
- Letter reveal for headings
- Staggered list animations

### 📱 **Responsive Design**
- Mobile-optimized navigation
- Touch-friendly interactions
- Smooth on all devices

---

## 🚨 Troubleshooting

### ❌ "Node.js not found"
- Install Node.js from: https://nodejs.org/
- Restart your computer after installation

### ❌ "npm install failed" 
- Check your internet connection
- Try running as Administrator
- Delete `node_modules` folder and try again

### ❌ "Port 3000 already in use"
- Close any other development servers
- Or use: `npm run dev -- --port 3001`

### ❌ Browser doesn't open automatically
- Manually go to: `http://localhost:3000`
- Check if Windows Defender is blocking it

---

## 🎯 **Recommended Workflow**

1. **Daily Development**: Use `quick-start.bat`
2. **Testing Changes**: Refresh browser (Ctrl+R)
3. **Production Testing**: Use `portfolio-manager.bat` → Build → Start Production
4. **Deployment**: Build files are in `.next/` folder

---

Your portfolio is **production-ready** with all the requested features! 🎉

**Just double-click `quick-start.bat` and you're good to go!** ⚡