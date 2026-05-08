# ⚔️ XIV Raid Reminder Discord Bot

A personal lightweight and automated Discord reminder bot designed for Final Fantasy XIV static groups or any recurring team-based events.
Built for reliability, simplicity, and extensibility—this bot ensures no raid nights (or day) is missed.

---

## ✨ Overview

The XIV Raid Reminder Bot automates direct-message reminders on a fixed weekly schedule. It is designed to reduce coordination overhead for raid leaders and ensure consistent attendance reminders for members.

---

## 🧠 Core Features

- 📩 Automated Discord DM reminders
- 🕒 Scheduled execution using cron jobs
- 🌏 Philippine Timezone support (Asia/Manila)
- 🟢 Owner online notification on startup
- 👤 Targeted messaging via environment-based user IDs
- ⚙️ Lightweight and easy to deploy
- 🔁 Reliable recurring schedule execution

---

## 🧭 Roadmap / To Do

The following features are planned to expand functionality, scalability, and usability of the bot:

---

### 🌍 Timezone System Upgrade
- Allow configurable timezones per user or group
- Support dynamic scheduling based on user location
- Improve flexibility beyond fixed Asia/Manila scheduling

---

### ✉️ Custom Message System
- Enable custom reminder messages per event
- Support different messages for different raid days
- Allow personalized messages per user (MEM_ID-based customization)

---

### 👥 Multi-User Support Expansion
- Replace single-user system (`MEM_ID_1`) with multi-recipient lists
- Broadcast reminders to multiple users simultaneously
- Group-based reminder segmentation (e.g. static teams, raid groups)

---

### 🧩 Discord Slash Command System
- `/test` → send test reminder instantly
- `/adduser` → add a user to reminder list
- `/removeuser` → remove a user from reminders
- `/setmessage` → configure reminder message dynamically
- `/status` → check bot health and schedule status

---

### 💾 Persistent Storage Integration
- Replace `.env`-based configuration with a database system
- Store:
  - Users
  - Scheduled times
  - Custom messages
- Ensure persistence across restarts and deployments

---

### 📊 Admin Dashboard (Future Enhancement)
- Web-based control panel for bot management
- Visual scheduling interface
- User and message management UI
- Real-time bot status monitoring

---

### ⚙️ Reliability & Scaling Improvements
- Rate-limit handling for Discord DMs
- Retry system for failed message delivery
- Logging system for audit and debugging
- Support for multiple raid schedules per week

---

## 🔐 Security & Reliability Principles

- No hardcoded tokens or IDs
- Environment-based configuration only
- Minimal dependencies for stability
- Designed for long-running deployments (e.g. Railway, VPS)

---

## 💬 Purpose

This bot was built to streamline raid coordination, reduce missed schedules, and automate repetitive reminders for structured gaming communities.
