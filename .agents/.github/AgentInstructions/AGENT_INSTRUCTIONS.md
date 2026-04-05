# Agent Instructions for werdnerd Web App

This document provides guidance for AI assistants working on the werdnerd Web App project.

## Interaction Guidelines

When interacting with user follow these guidelines:

- Keep in mind (memory) the user is on the free plan, so offer responses and solutions accordingly.
- Provide clear explanations. Be patient, user is a beginner and this is their first app.
- Assume all details learned should be saved to memory, unless explicitly told otherwise.
- Maintain a friendly and supportive tone
- Be opinionated, without needing to be asked directly. If there is a mistake or improvement that can be made, suggest it openly.
- Often suggest follow ups, user appreciates as much guidance as possible.
- Always use memory. Recall previous conversations and context.

## Project Overview

werd nerd is a quirky web app containing a collection of fun or unusual english werds collected by the developer. Users can create an account to submit werds or start and save their own collection. Login is not required to view the main site pages.

App style is Edgy Yet Vibrant. Colorful gradient page backgrounds with dark/black containers. Heading fonts are bold and vibrant colors, body text is shades of silver or off white.

## Tech Stack & Architecture

### Core Technologies

- **React 18.3.1** with TypeScript for component-based architecture
- **React Router v6** for client-side routing
- **Vite 6.4.1** as the build tool and dev server
- **Tailwind CSS** for styling with shadcn/ui components
- **Supabase** for backend services and database

### Key Libraries

- **Radix UI**: Primitive components for accessible UI
- **Lucide React**: Icon library
- **React Hook Form**: Form management
- **Recharts**: Data visualization
- **Sonner**: Toast notifications

## Development Guidelines

### Code Style

- Use TypeScript for all new components
- Follow React functional component patterns
- Use Tailwind classes for styling (avoid inline styles)
- Implement proper accessibility with ARIA labels
- Use semantic HTML elements

### Component Development

- Create reusable components in `src/components/ui/`
- Use proper TypeScript interfaces for props
- Implement loading states and error handling
- Follow the existing naming conventions
- Use Lucide React icons consistently

### State Management

- Use React hooks for local state
- Implement proper data fetching patterns
- Consider React Query for server state if needed
- Use Supabase for persistent data storage

## Routing & Navigation

### Current Routes

- `/` - Homepage dashboard
- `/werd vault` - werd Page
- `/werd index` - werd Library
- `/about` - About, Contact the Creator & FAQ
- `/submit a werd` - User Submission

### Navigation Pattern

- Use `NavLink` for active state styling
- Maintain consistent navigation in Layout component
- Implement proper breadcrumb navigation if needed

## Database Schema (Supabase)

### Expected Tables

- `leaderboard`
- `games`
- `funfacts`
- `werds`
- `users`
- `tags`
- `werd_tags`

## Common Tasks

### Adding a New Page

1. Create component in `src/pages/`
2. Add route in `src/routes.ts`
3. Update navigation in `src/pages/Layout.tsx`
4. Add any necessary database tables

### Creating UI Components

1. Use shadcn/ui patterns in `src/components/ui/`
2. Follow Radix UI best practices
3. Implement proper TypeScript types
4. Add responsive design with Tailwind

### Database Integration

1. Set up Supabase client in `src/utils/supabase/`
2. Create proper TypeScript interfaces
3. Implement error handling
4. Use React Query patterns for data fetching

## Testing & Quality

### Testing Strategy

- Unit tests for utility functions
- Component tests for UI components
- Integration tests for user flows
- Accessibility testing with screen readers

### Code Quality

- Use ESLint and Prettier configurations
- Implement proper TypeScript strict mode
- Follow React best practices
- Ensure accessibility compliance

## Performance Considerations

### Optimization

- Use React.memo for expensive components
- Implement proper loading states
- Optimize images and assets
- Use code splitting for large components

### Bundle Size

- Monitor bundle size with Vite analytics
- Use dynamic imports for heavy dependencies
- Optimize Supabase queries
- Implement proper caching strategies

## Deployment

### Build Process

- Use `npm run build` for production
- Ensure environment variables are properly set
- Test build locally before deployment
- Verify Supabase connection in production

### Environment Setup

- Configure Supabase project
- Set up environment variables
- Configure hosting platform
- Set up custom domain if needed

## Troubleshooting

### Common Issues

- **Supabase Connection**: Check environment variables and network policies
- **Routing**: Verify route configuration and NavLink usage
- **Styling**: Ensure Tailwind classes are properly applied
- **TypeScript**: Check for proper type definitions

### Debugging Tips

- Use React DevTools for component inspection
- Check browser console for errors
- Verify network requests in DevTools
- Use Supabase dashboard for database issues

## Future Enhancements

### Planned Features

- Real-time collaboration
- Advanced search and filtering
- Export/import functionality
- Integration with design tools
- Mobile app development

### Technical Improvements

- State management with Zustand/Redux
- Advanced caching strategies
- Performance monitoring
- Automated testing pipeline

---

When working on this project, always prioritize user experience, accessibility, and code maintainability. Follow the established patterns and contribute to the documentation as you add new features.
