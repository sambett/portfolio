import { NextApiRequest, NextApiResponse } from 'next';
import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Simple in-memory user store (in production, use a proper database)
const USERS = [
  {
    email: 'admin@portfolio.com',
    password: 'admin123' // In production, hash this password
  }
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    
    const user = USERS.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = sign({ email: user.email }, JWT_SECRET, { expiresIn: '24h' });
    
    res.status(200).json({ token, user: { email: user.email } });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export function verifyToken(token: string) {
  try {
    return verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}
