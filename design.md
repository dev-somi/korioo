# Design System: Sumu Hotel Ueno East Inspiration

This project follows an editorial, minimal, and warm design system inspired by modern hospitality aesthetics, specifically the **Sumu Hotel Ueno East**. The goal is to create a premium, calm, and trustworthy environment for language learning.

## 1. Core Principles
- **Warmth**: Use of cream and off-white backgrounds instead of pure clinical white.
- **Minimalism**: Removing unnecessary decorative elements, glassmorphism, and heavy shadows.
- **Editorial**: High-quality typography and generous whitespace, resembling a lifestyle magazine.
- **Premium**: Subtle micro-interactions and refined color transitions.

## 2. Color Palette

### Primary (Accent)
- **Brand Orange**: `#F25C1E` (Tailwind equivalent: `orange-600` or custom hex)
- **Usage**: Primary CTA buttons, key highlights, active state indicators.

### Neutrals
- **Background (Main)**: `#FFFFFF` (Pure White) or `#FAF8F1` (Warm Cream / Zinc-50)
- **Surface**: `#FDFCF6` (Soft Bone)
- **Text (Heading)**: `#18181B` (Zinc-900)
- **Text (Body)**: `#52525B` (Zinc-600)
- **Border**: `#E4E4E7` (Zinc-200)

## 3. Typography

- **Headings**: Modern Sans-serif (Inter / Outfit / Geist)
  - Bold weights for hierarchy.
  - Tracking: `-0.02em` for large headings.
- **Body**: Clean Sans-serif
  - Line Height: `leading-relaxed` (1.625).
- **Accents**: Serif Italic (e.g., for testimonials or decorative labels)
  - Adds a touch of editorial elegance.

## 4. Components & UI Patterns

### Buttons
- **Shape**: `rounded-full` or `rounded-2xl`.
- **Primary**: Brand Orange background, white text, bold.
- **Secondary**: Thin borders (`border-zinc-200`) or soft background (`bg-zinc-100`).

### Cards
- **Shape**: `rounded-3xl` (approx. `24px` to `32px`).
- **Shadow**: `shadow-xl shadow-orange-500/5` or very soft zinc shadows.
- **Padding**: Generous (`p-8` or `p-12`).

### Imagery
- **Style**: Warm-toned photography, authentic human portraits.
- **Treatment**: Softly rounded corners, often with subtle borders or shadow-lifts.

## 5. Spacing
- **Generous Gaps**: `gap-8`, `gap-12`, or `gap-16` between major sections.
- **Section Padding**: `py-24` or `py-32` for top-level landing page sections.

## 6. Layout Patterns

- **Landing / Hero**: Full-width asymmetric layout. Text left, visual right. 
  절대 center-aligned form 구조 금지.
- **Dashboard**: Sidebar + main content. Cards는 grid로, 단독 배치 금지.
- **List/Feed pages**: Wide content area (`max-w-5xl`+), not narrow `max-w-md`.
- **Forms/Auth only**: Centered narrow card (`max-w-md`) 허용.

## 7. Anti-Patterns (Do NOT)

- ❌ `max-w-md` + `mx-auto` + single card = 로그인 페이지처럼 보임. Auth 외 사용 금지.
- ❌ 모든 섹션을 `flex-col items-center` 중앙 정렬하기.
- ❌ 페이지 전체를 하나의 `rounded-3xl` 카드 안에 넣기.
- ❌ 배경색 없이 흰 카드만 반복 배치.

## 8. Content Width Guidelines

| Page Type     | Max Width     | Layout         |
|---------------|---------------|----------------|
| Auth (login)  | `max-w-md`    | Centered card  |
| Settings      | `max-w-2xl`   | Single column  |
| Dashboard     | `max-w-6xl`   | Grid / sidebar |
| Landing       | Full-width    | Asymmetric     |
| Article/Learn | `max-w-3xl`   | Reading layout |

---

*Note: This design system is currently being rolled out across the application to replace older, high-contrast colorful patterns.*
