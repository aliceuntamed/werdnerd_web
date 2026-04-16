# Architecture Documentation

This document provides a comprehensive overview of the werd nerd Web App architecture, including design decisions, component structure, and data flow.

## 🏗️ High-Level Architecture

### Application Overview

Werdnerd is a web app crafted by a self-diagnosed "werd nerd" and "weirdo" to provide a playful way to explore the captivating oddities of language. The application functions as a pseudo dictionary, highlighting "werds" that the developer considers interesting or unusual.

### Architecture Patterns

- **Component-Based Architecture**: React functional components with hooks
- **Client-Side Routing**: React Router for navigation
- **Utility-First CSS**: Tailwind CSS for styling
- **Component Library**: shadcn/ui built on Radix UI primitives
- **Backend-as-a-Service**: Supabase for data persistence

## 📁 App Structure

pages/
├── Homepage/  
│ ├── Navigation  
│ ├── Flipwords Hero
│ ├── Random FunFact
│ ├── WOTD
│ ├── Vault Preview
│ ├── Spin the Vault
│ ├── Curated Collections
│ ├── Games CTA
│ ├── Creator's Playground CTA  
│ ├── SubmitWerd CTA
│ ├── Footer  
├── Werd Vault/  
│ ├── Navigation  
│ ├── Vault Hero  
│ ├── Searchable Alphabet
│ ├── Alphabet Grid  
│ ├── Submit a Word CTA
│ ├── Footer
├── About/  
│ ├── Navigation
│ ├── How the Vault Works
│ ├── FAQ
│ ├── About the Werd Nerd
│ ├── Nerdy Origin & Mission  
│ ├── Submit / Follow CTA
│ ├── the Werd Nerd's favorite werds  
│ ├── Contact Info
│ ├── Footer
├── Submit a Werd/  
│ ├── Navigation  
│ ├── Playful Prompt Hero
│ ├── Login/Submit anonymously module
│ ├── werd Submission Form  
│ ├── Submission Tips & Guidelines
│ ├── Recent Submissions Showcase
│ ├── Share on Socials CTA
│ ├── Footer
├── Creator's Playground/  
│ ├── Navigation  
│ ├── Vibrant Hero
│ ├── Color Palettes
│ ├── Type/Color Combos (styled)
│ ├── Remix Modal
│ ├── Login to save creations module
│ ├── Footer
├── Games/  
│ ├── Boggle/, Wordle/, WordSearch/, Hangman/, Trivia/, Codenames/
│ │ ├── Navigation  
│ │ ├── Game
│ │ ├── Login/Play anonymously module
│ │ ├── Leaderboard  
│ │ ├── Report Problem/Leave Comment CTA
│ │ ├── Footer

components/
├── Navigation/  
│ ├── Home/  
│ ├── Werd Vault/
│ ├── About/
│ ├── Submit Werd/
│ ├── Games/

games/
├── Boggle/  
├── Wordle/
├── Trivia/
├── Hangman/
├── WordSearch/
├── Codenames/

## 🔄 Data Flow Architecture

### Current State Management

- **Local State**: React useState/useReducer for component state
- **Routing State**: React Router for navigation state
- **Form State**: React Hook Form for form management
- **Server State**: Direct Supabase client calls

### Data Flow Patterns

```
User Interaction → Component State → API Call → Supabase → Response → UI Update
```

### Future State Management Considerations

- **React Query**: For server state management and caching
- **Zustand**: For global application state
- **Context API**: For theme and user preferences

### Routing Implementation

- **React Router v6**: Using createBrowserRouter
- **Nested Routes**: Layout component as parent route
- **Route Guards**: Future authentication routes
- **Lazy Loading**: Potential for code splitting

## 🎨 UI Architecture

### Design System

#### Color Palette

- **Primary**: Dark theme; Gradient bright backgrounds with overlaying containers of dark colors (`#2F323A`, `#11151C`)
- **Accent**: Pink (`#EDADC7`), Blue (`#82C0CC`), Green (`#84B082`), Purple (`#9590A8`) for heading typography & icons.
- **Neutral**: White, Off Whites (`#FFECD1`, `#EDFFEC`, '...') and Silver variations (`#A5A5A5`, `#7F7F7F`, '...') for text and borders

#### Typography

- **Headings**: Bold playful fonts (`Changa One`, 'Gochi Hand', '...')
- **Body**: System Sans Serif fonts with proper hierarchy ('Montserrat', 'Poppins', '...')
- **Scale**: Consistent sizing using Tailwind classes

#### Component Patterns

- **Cards**: Black background, mildly rounded corners approx 12px, borders approx 4px
- **Navigation**: Dark theme with active highlighting
- **Forms**: Consistent input styling and validation
- **Buttons**: Multiple variants with hover states

### Responsive Design

- **Web-First**: Design starts at web breakpoint
- **Breakpoints**: Tailwind default breakpoints (sm, md, lg, xl)
- **Grid System**: CSS Grid and Flexbox for layouts
- **Mobile-Friendly**: Appropriate tap targets and spacing

## 🗄 Database Architecture

### Supabase Integration

- **Client Setup**: Supabase client in utils/supabase/
- **Authentication**
- **Real-time**

#### Proposed Schema

```sql
-- Users table
create table public.users (
  user_id uuid not null default extensions.uuid_generate_v4 (),
  email text null,
  phone text null,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  is_admin boolean null default false,
  constraint users_pkey primary key (user_id),
  constraint users_email_key unique (email),
  constraint users_phone_key unique (phone),
  constraint fk_user_auth foreign KEY (user_id) references auth.users (id) on delete CASCADE
) TABLESPACE pg_default;

-- werds table
create table public.werds (
  "werd" text null,
  "category" text null,
  "pronunciation" text null,
  "part_of_speech" text null,
  "definition" text null,
  "language" text null,
  "source" text null,
  image text null,
  created_by uuid null,
  werd_id uuid not null default gen_random_uuid (),
  is_curated boolean null default false,
  constraint werds_pkey primary key (werd_id),
  constraint werds_werd_id_key unique (werd_id)
) TABLESPACE pg_default;

-- tags table
create table public.tags (
  tag_id uuid not null default extensions.uuid_generate_v4 (),
  name text not null,
  constraint categories_pkey primary key (tag_id),
  constraint categories_name_key unique (name)
) TABLESPACE pg_default;

-- werd_tags table
create table public.werd_tags (
  id uuid not null default extensions.uuid_generate_v4 (),
  werd_id uuid null,
  tag_id uuid null,
  constraint werd_categories_pkey primary key (id),
  constraint werd_categories_category_id_fkey foreign KEY (tag_id) references tags (tag_id) on delete CASCADE,
  constraint werd_categories_werd_id_fkey foreign KEY (werd_id) references werds (werd_id) on delete CASCADE
) TABLESPACE pg_default;

-- games table
create table public.games (
  game_id uuid not null default extensions.uuid_generate_v4 (),
  game_name text not null,
  description text null,
  mode text null,
  created_at timestamp with time zone null default now(),
  constraint games_pkey primary key (game_id)
) TABLESPACE pg_default;

-- funfacts table
create table public.funfacts (
  fact_id uuid not null default extensions.uuid_generate_v4 (),
  fact text not null,
  source text null,
  created_at timestamp with time zone null default now(),
  fact_category text null,
  note text null,
  constraint funfacts_pkey primary key (fact_id)
) TABLESPACE pg_default;

-- leaderboard table
create table public.leaderboard (
  play_id uuid not null default extensions.uuid_generate_v4 (),
  user_id uuid null,
  game_id uuid null,
  rank integer null,
  score integer null,
  streak integer null,
  created_at timestamp with time zone null default now(),
  updated_at timestamp with time zone null default now(),
  is_public boolean null default true,
  constraint leaderboard_pkey primary key (play_id),
  constraint leaderboard_game_id_fkey foreign KEY (game_id) references games (game_id) on delete CASCADE,
  constraint leaderboard_user_id_fkey foreign KEY (user_id) references users (user_id) on delete CASCADE
) TABLESPACE pg_default;
```

## 🔧 Build Architecture

### Build Process

- **Vite**: Fast development server and optimized builds
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: PostCSS processing and purging
- **Asset Optimization**: Image and bundle optimization

### Development Workflow

```
npm run dev → Vite Dev Server → Hot Module Replacement → Browser
```

### Production Build

```
npm run build → TypeScript Compilation →
Tailwind Processing → Bundle Optimization →
Static Assets → build/ directory
```

## 🔒 Security Architecture

### Current Security Measures

- **Environment Variables**: Sensitive data in .env files
- **Supabase RLS**: Row Level Security for data access
- **TypeScript**: Type safety prevents runtime errors

### Future Security Considerations

- **Authentication**: Supabase Auth implementation
- **Authorization**: Role-based access control
- **Input Validation**: Form validation and sanitization
- **HTTPS**: Enforced secure connections

## 🚀 Performance Architecture

### Current Optimizations

- **Vite**: Fast development and optimized builds
- **Code Splitting**: Potential for route-based splitting
- **Image Optimization**: Lazy loading and optimization
- **Bundle Analysis**: Vite bundle analyzer

### Performance Strategies

- **Component Memoization**: React.memo for expensive components
- **State Management**: Efficient state updates
- **Caching**: API response caching
- **CDN**: Static asset delivery

## 🧪 Testing Architecture

### Testing Strategy

- **Unit Tests**: Component and utility testing
- **Integration Tests**: User flow testing
- **E2E Tests**: Full application testing
- **Accessibility Tests**: Screen reader and keyboard testing

### Testing Tools

- **Vitest**: Unit testing framework
- **React Testing Library**: Component testing
- **Playwright**: E2E testing
- **Axe Core**: Accessibility testing

## 🔮 Future Architecture Considerations

### Scalability

- **Micro-Frontends**: Potential for feature separation
- **Service Workers**: Offline functionality
- **Web Workers**: Heavy computation offloading
- **CDN**: Global content delivery

### Advanced Features

- **Real-time Collaboration**: Multi-user editing
- **Advanced Search**: Full-text search capabilities
- **Export/Import**: Data portability features
- **Integrations**: Third-party design tool connections

## 📊 Monitoring & Analytics

### Performance Monitoring

- **Web Vitals**: Core performance metrics
- **Error Tracking**: Application error monitoring
- **User Analytics**: Feature usage tracking
- **API Performance**: Database query optimization

### Development Tools

- **React DevTools**: Component debugging
- **Browser DevTools**: Performance profiling
- **Lighthouse**: Performance auditing
- **Bundle Analyzer**: Bundle size optimization

---

This architecture document serves as a guide for understanding the current structure and future evolution of the werd nerd Web App. It should be updated as the application grows and evolves.
