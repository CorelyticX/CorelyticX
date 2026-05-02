# Responsive Design Guide - CorelyticX Portfolio

## Overview
This project uses a **mobile-first responsive design approach** with Tailwind CSS. All elements (text, spacing, size, margins, padding) are optimized for mobile devices first, then enhanced for larger screens.

---

## 📱 Breakpoints

| Breakpoint | Screen Width | Devices |
|-----------|-------------|---------|
| **Default** | 0-639px | Mobile phones |
| **sm** | 640px+ | Landscape phones, small tablets |
| **md** | 768px+ | Tablets, small laptops |
| **lg** | 1024px+ | Laptops |
| **xl** | 1280px+ | Desktops |
| **2xl** | 1536px+ | Large displays |

---

## 🎨 Typography Scaling

All headings and text are responsive using the Tailwind breakpoint system:

### Heading Sizes (Mobile → Desktop)
```tailwind
h1: text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl
h2: text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl
h3: text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl
p: text-sm sm:text-base md:text-lg lg:text-xl
```

### Implementation Example
```jsx
<h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
  NEXT GENERATION
</h1>
```

---

## 📦 Spacing System

### Padding (Mobile First)
- **Mobile**: `px-4` (16px)
- **Small**: `px-6 sm:px-6` (24px)
- **Medium**: `px-8 md:px-8` (32px)
- **Large**: `px-12 lg:px-12` (48px)

### Margin & Gap
- **Small gap**: `gap-2 sm:gap-3 md:gap-4 lg:gap-6`
- **Medium gap**: `gap-4 sm:gap-6 md:gap-8 lg:gap-12`
- **Large gap**: `gap-6 sm:gap-8 md:gap-12 lg:gap-16`

### Implementation Example
```jsx
<div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24">
  Content
</div>
```

---

## 🎯 Height & Width Patterns

### Full-Width Containers
```jsx
<div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
```

### Section Heights
```jsx
<section className="h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh]">
```

---

## 🔘 Button Sizing

### Small Button
```jsx
<button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base">
```

### Large Button
```jsx
<button className="px-6 sm:px-8 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 lg:py-6 text-sm sm:text-base md:text-lg lg:text-2xl">
```

---

## 🎬 Responsive Grid Layouts

### Two-Column Grid (Mobile → 1 col, Desktop → 2 cols)
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
  {items.map(item => <Card key={item.id} />)}
</div>
```

### Three-Column Grid (Mobile → 1 col, Tablet → 2 cols, Desktop → 3 cols)
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
  {items.map(item => <Card key={item.id} />)}
</div>
```

---

## 🚀 Common Responsive Patterns

### Card Component
```jsx
<div className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-lg sm:rounded-xl md:rounded-2xl">
  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Title</h3>
  <p className="text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-6">
    Description
  </p>
</div>
```

### Navigation/Header
```jsx
<nav className="px-4 sm:px-6 md:px-8 lg:px-12 h-16 sm:h-18 md:h-20">
  <div className="flex items-center justify-between">
    <Logo className="h-6 sm:h-7 md:h-8" />
    <Button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3" />
  </div>
</nav>
```

### Hero Section
```jsx
<section className="h-screen w-full px-4 sm:px-6 md:px-8 lg:px-12">
  <div className="flex flex-col items-center justify-center h-full">
    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
      Title
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-6 sm:mt-8 md:mt-10">
      Subtitle
    </p>
  </div>
</section>
```

---

## 🎯 Best Practices

### ✅ DO's
1. **Start mobile-first** - Base classes should be for mobile (no breakpoint prefix)
2. **Progressive enhancement** - Add breakpoints for larger screens
3. **Use Tailwind's responsive prefix** - `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
4. **Test on multiple devices** - Test on actual phones, tablets, and desktops
5. **Use viewport meta tag** - Ensure `<meta name="viewport" ...>` is in place
6. **Logical spacing** - Use consistent gap/padding ratios across breakpoints

### ❌ DON'Ts
1. **Don't use hard-coded pixel sizes** - Use Tailwind classes instead
2. **Don't forget margin/padding on mobile** - Always include mobile spacing
3. **Don't make elements too wide on mobile** - Ensure content fits 320-640px screens
4. **Don't forget touch targets** - Minimum 44x44px for mobile buttons
5. **Don't ignore small screens** - Test on iPhone SE, older phones, etc.

---

## 📐 Testing Checklist

### Mobile (320-640px)
- [ ] Text is readable without zooming
- [ ] No horizontal scrolling
- [ ] Touch targets are at least 44x44px
- [ ] Hamburger menu visible
- [ ] Images scale properly
- [ ] Padding isn't excessive

### Tablet (641-1024px)
- [ ] 2-column layouts activate properly
- [ ] Navigation transitions to full menu (or stays hamburger)
- [ ] Font sizes are readable
- [ ] Spacing feels balanced

### Desktop (1025px+)
- [ ] Full 3+ column layouts visible
- [ ] Navigation fully visible
- [ ] Maximum width containers are respected
- [ ] No excessive spacing

---

## 🔍 Components Updated for Responsiveness

### ✅ Banner Component
- Responsive heading sizes: `text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl`
- Responsive padding: `px-4 sm:px-6 md:px-8 lg:px-12`
- Responsive button: `px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5`

### ✅ Navbar Component
- Responsive logo: `h-6 sm:h-7 md:h-8`
- Responsive hamburger menu
- Responsive card sizes: `p-4 sm:p-5 md:p-6`
- Responsive text: `text-lg sm:text-xl md:text-2xl`

### ✅ Services Component
- Responsive heading: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`
- Responsive container height: `h-[60vh] sm:h-[70vh] md:h-[80vh]`
- Responsive card padding: `p-4 sm:p-6 md:p-8 lg:p-12`
- Responsive tags: `text-xs sm:text-sm md:text-base`

### ✅ HorizontalSection Component
- Responsive panel headings: `text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl`
- Responsive padding: `px-4 sm:px-6 md:px-10 lg:px-12`
- Responsive grid: `grid-cols-1 md:grid-cols-2`
- Responsive spacing: `gap-3 sm:gap-4 md:gap-6`

---

## 📚 Resources

- **Tailwind CSS Responsive Design**: https://tailwindcss.com/docs/responsive-design
- **Mobile-First Design**: https://www.nngroup.com/articles/mobile-first-web-design/
- **CSS Media Queries**: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries

---

## 🔗 Related Files

- `src/app/globals.css` - Global responsive utilities and CSS variables
- `src/styles/responsive.css` - Responsive utility classes
- All component files in `src/components/Modules/home/` have been updated with responsive classes

---

Last Updated: May 2, 2026
