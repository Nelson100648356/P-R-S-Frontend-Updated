# 🌐 Pandemic Resilience System – Frontend

This is the **React-based frontend** for the **Pandemic Resilience System (PRS)**. The platform provides a comprehensive dashboard experience for **government officials**, the **general public**, and **merchants**, helping each group respond efficiently during pandemic conditions.

---

## 🚀 Project Overview

The frontend interfaces with a FastAPI backend to display relevant, real-time information using structured dashboards. It emphasizes **usability**, **role-based interaction**, and **data visualization** through charts and filters.

---

## 🎯 Key Dashboards

### 🏛 Government Dashboard
- View vaccination trends and supply chain updates.
- Monitor compliance and public health metrics.
- Analyze national data using integrated charts.

### 🧍 Public Dashboard
- Manage PRS-ID and personal information.
- View and upload vaccination records.
- Locate nearby stores for critical item availability.

### 🛒 Merchant Dashboard
- Manage stock levels and inventory.
- Report sales of restricted items.
- Comply with purchasing restrictions and licensing.

---

## ⚙️ Technologies Used

- **React.js**
- **React Router DOM**
- **Recharts** (for data visualization)
- **Tailwind CSS / Custom CSS** (styling)
- **Fetch API** for backend communication

---

## 🔗 Backend Integration

The frontend is fully connected to a RESTful FastAPI backend running on:

**[http://localhost:8000](http://localhost:8000)** (or your configured deployment URL)

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── GovernmentDashboard/
│   ├── PublicDashboard/
│   └── MerchantDashboard/
├── App.tsx
└── index.tsx
