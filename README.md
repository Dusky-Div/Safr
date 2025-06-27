# 🔐 Safr – Your Personal Digital Vault

Safr is a clean and minimal web app where you can securely stash your passwords, credit cards, API keys, bank info, and notes - all in one place. Think of it like your private vault, built with React, Express, Firebase Auth, and some Tailwind styling to make it feel modern and easy to use.

This repo has all the frontend code for Safr.

---

## 📑 Table of Contents

- [What's Safr?](#whats-safr)
- [What You Can Do](#what-you-can-do)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Wanna Contribute?](#wanna-contribute)
- [License](#license)

---

## 🧐 What's Safr?

Safr is built for people like us who don’t want to use those paid password managers or write sensitive stuff in random notes apps. It’s simple, fast, and secure - log in with Firebase Auth and start saving your stuff. That’s it.

It supports different vault item types like:

- Website passwords
- Credit card details
- Bank accounts
- API keys
- Secure notes

Everything's organized, looks good, and you can find stuff easily with search and type-based filtering.

---

## 💥 What You Can Do

- 🔐 **Log in / sign up** with Firebase Auth
- 🗝️ **Add passwords** and other credentials
- 💳 **Store credit cards, bank info**, API keys, and notes
- 🔍 **Search entries** quickly
- 📁 **Sorted by type & last updated** so you always see recent stuff first
- 🌚 Dark theme by default (because we’re not savages)

---

## ⚙️ Tech Stack

### Frontend

- React + TypeScript
- Tailwind CSS (for all the styling)
- Firebase Auth (handles login/logout)
- Framer Motion + Lucide Icons + Radix UI

### Backend

- Node.js + Express
- MongoDB
- (Separate repo, but you'll need it for saving/retrieving encrypted vault data)

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have these installed:

- Node.js
- npm or yarn
- A Firebase project (for Auth)
- The backend up and running (for saving vault entries)

---

### 📥 Clone the Repo

```bash
git clone https://github.com/your-username/dusky-div-safr.git
cd dusky-div-safr
npm run dev
```
