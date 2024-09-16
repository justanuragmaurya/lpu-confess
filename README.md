# LPU Confess

LPU Confess is an anonymous confession platform for campus life, allowing students to share their thoughts and experiences without revealing their identity.

## Project Overview

This project provides a safe space for students to voice their thoughts, discuss campus life, and connect with others anonymously. It features a modern, responsive design with a focus on user privacy and engagement.

## Key Features

- Anonymous confessions posting
- Viewing all confessions
- User authentication (Login/Sign Up)
- Responsive design for various devices

## Tech Stack

- **Frontend:**
  - Next.js 14
  - React 18
  - Tailwind CSS
  - Shadcn UI components

- **Backend:**
  - Next.js API routes
  - Prisma ORM

- **Database:**
  - PostgreSQL

- **Authentication:**
  - (To be implemented)

- **Deployment:**
  - Vercel (recommended)

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
3. Set up your PostgreSQL database and update the \`DATABASE_URL\` in your \`.env\` file
4. Run Prisma migrations:
   \`\`\`
   npx prisma migrate dev
   \`\`\`
5. Start the development server:
   \`\`\`
   npm run dev
   \`\`\`
6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- \`app/\`: Next.js 14 app directory structure
- \`components/\`: Reusable React components
- \`prisma/\`: Prisma schema and migrations
- \`public/\`: Static assets
- \`lib/\`: Utility functions and shared code

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
