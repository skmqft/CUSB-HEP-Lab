# CUSB-HEP-Lab
High energy physics Detector Development Lab in Central University of South Bihar
# HEP-Detector Development Lab Website
_Academic Website for HEP-Detector Development Laboratory | Central University of South Bihar_

---

## 🚀 Features

- **Modern and Responsive Design**
- **Faculty Members** Spotlight
- **Lab Members** Directory with Links
- **Collaborations** Section
- (Extendable for Publications, Facilities, etc.)

---

## 📂 Code Structure Overview

Your main file is `index.html`. Below is a breakdown of **which section controls which part of the site**:

### 1. **Header (`<header>...</header>`)**
- Displays the site title and subtitle.
- Sets the lab’s identity with a background color and intro tagline.

### 2. **Faculty Members (`<section>` with class `.faculty`)**
- Shows cards for faculty, including:
  - Name, image, role.

### 3. **Lab Members (`<section>` with class `.members`)**
- Displays lab members in card format:
  - Photo, name, quick navigation links (e.g. ResearchGate, Webpage).
- **Customization:**  
  Edit/add `.card` blocks within the `.members` grid to add or remove lab members.

### 4. **Collaborations (`<section>` with class `.collaborations`)**
- Displays cards for scientific collaborations/lab partnerships:
  - Logo, name, (optionally add location or description).
- **Customization:**  
  Replace images and text to update collaborations.

### 5. **CSS Styles (`<style>...</style>` in `<head>`)**
- All layout and visual styling.
- Key styling rules:
  - `.card`: Card design for faculty/members/collaborations.
  - `body`, `header`, `section`, `h2`: Page layout and text hierarchy.
- **Customization:**  
  Change color codes, font families, grid columns, etc. here.

---

## ⚡ Quick Start

1. **Edit Content:**
   - Update names, images, and links directly in `index.html`.
   - To add/remove people or collaborations, add or remove `.card` sections in their respective `<div>` blocks.

2. **Update Images:**
   - Place new image files in the repo.
   - Update the `src` attribute in the relevant `<img>` tags.

3. **Deploy with GitHub Pages:**  
   See this repository’s instructions or follow:  
   [GitHub Pages Deployment Guide](https://docs.github.com/en/pages/getting-started-with-github-pages)

---

## 🗂️ Section Reference Table

| Section                       | Code/Selector         | Feature/Purpose                                  |
|-------------------------------|----------------------|--------------------------------------------------|
| Header                        | `<header>`           | Site title, subtitle/tagline, top banner         |
| Faculty Members               | `<section>` + `.faculty` | Faculty showcase (cards: name, image, title) |
| Lab Members                   | `<section>` + `.members` | Lab members directory (cards: photo, links)   |
| Collaborations                | `<section>` + `.collaborations` | Lab/research collaborations (cards)     |
| CSS Styling                   | `<style>` in `<head>`| Page layout, grid system, card styles            |

---

## 🛠️ Customization Tips

- **Add sections** (like Publications, Facilities) by copying a `<section>` block and updating class/selectors.
- **Change color or typography** in the `<style>` block.
- **Ensure all image file names match those in the code and are placed at repo root or proper folders.**

---

## 🙋 Need Help?
Open an [issue](https://github.com/your-repo/issues) or contact the repo maintainer for guidance!

---
