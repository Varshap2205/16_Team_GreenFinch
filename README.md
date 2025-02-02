# Ecomart - Chrome Extension for Sustainable Shopping

## Team: Greenfinch

We are building **Ecomart**, a Chrome extension that helps users make more eco-friendly purchasing decisions. The extension assesses the sustainability of products on e-commerce platforms (e.g., Amazon) and provides alternatives from eco-friendly brands. 

---

## 🚀 Overview

Ecomart aims to bridge the gap between consumer awareness and sustainable shopping by providing real-time sustainability insights on the products users view online. When users click on a product, the extension will pop up with details on the environmental impact, including carbon footprint, water usage, and recyclability. Additionally, Ecomart suggests eco-friendly alternatives from registered brands.

---

## 🛠️ Technical Details

**Tech Stack:**
- **Frontend**: Chrome Extension (Built using **Next.js** and **JavaScript**)
- **Backend**: **Firebase** (for user and company data)
- **API**: **Gemini API** (for sustainability data)

**Features:**
- **Sustainability Data**: Carbon footprint, water usage, manufacturing impact, recyclability, certifications, etc.
- **Eco-friendly Alternatives**: Redirects to alternative products from eco-friendly brands.
- **Commission System**: Ecomart earns a commission based on traffic driven to the alternative products.

---

## 🌍 Key Parameters for Sustainability Score

The sustainability score is calculated using weighted parameters that consider the environmental impact of each product. These parameters are:

1. **🌱 Overall Sustainability Score**: Quick summary rating (0-100%) for decision-making.
2. **🌍 Carbon Footprint**: CO₂ emissions during production.
3. **🚰 Water Usage**: Liters of water consumed for production.
4. **🏭 Manufacturing Impact**: Pollution, deforestation, or waste generated.
5. **🔄 Recyclability**: Percentage of product that can be recycled.
6. **✅ Eco Certifications**: Fair Trade, FSC, Energy Star, etc.
7. **🛢️ Harmful Chemicals Used**: Toxic materials like microplastics and heavy metals.
8. **🌾 Material Composition**: Organic, recycled, synthetic materials used.
9. **🔥 Biodegradability**: Time taken to decompose.
10. **✈️ Shipping Impact**: Distance traveled & CO₂ emissions from transportation.

### Example Calculation for a Product

For example, a product like an **Eco-friendly Bluetooth Speaker** will have a sustainability score calculated based on the weighted sum of individual scores for each parameter.

**Final Sustainability Score Example**: 78.75%

---

## 📋 Product Registration for Brands

Eco-friendly brands can register their products with Ecomart to be included in the extension's alternative suggestions. The registration process involves:

- **Product Name**: Clear, descriptive name.
- **Product Category**: Type of product (e.g., Home Decor, Clothing).
- **Product Description**: Key features of the product.
- **Brand Name**: Manufacturer or company name.
- **Product Image**: High-quality image.
- **Price**: Price of the product.
- **Product Link**: Link to the product on the e-commerce platform.

### Required Certifications (Compulsory)
- **B Corp Certification**
- **Fair Trade Certification**
- **Energy Star**
- **Carbon Neutral Certification**
- **Organic Certification (e.g., USDA Organic)**

### Optional Certifications
- **Cradle to Cradle**
- **Forest Stewardship Council (FSC)**
- **Recycled Content Certifications**

---

## 🧑‍💼 Admin Approval Process

Admin review involves verifying the following:

1. **Product Information**: Ensure accurate and eco-friendly attributes.
2. **Certifications**: Validate certifications like B Corp and Fair Trade.
3. **Tags**: Ensure tags such as “biodegradable” or “energy-efficient” match the product claims.
4. **Approval/Rejection**: If everything checks out, the product is approved for listing; otherwise, it is rejected with feedback.

---

## 🔧 Future Scope

### For Clients:
- **Automated Data Input**: AI-driven suggestions for faster and more accurate registration.
- **Real-Time Certification Validation**: Integrate APIs for instant certification verification.
- **User-Friendly Interface**: Dynamic dashboards and real-time updates.

### For Admins:
- **Automated Verification**: AI tools for certifying products and eco-impact claims.
- **Enhanced Admin Dashboard**: Advanced analytics and alerts for certification expirations.
- **Ongoing Monitoring**: Periodic checks to ensure products remain eco-friendly and certification status is updated.

---

## 🎯 Goal

Our goal is to make it easy for consumers to make sustainable choices and empower eco-friendly brands by providing them with visibility to a wider audience.

By building a Chrome extension that seamlessly integrates with e-commerce platforms and leveraging eco-certification data, we are committed to creating a more sustainable online shopping experience.

---

## 📝 How to Run the Project

1. How to run the extension
- npm run build
- Enable Developer Mode
- Load the Unpacked Extension
-Test the Extension

2. How to run website
- npm run dev
