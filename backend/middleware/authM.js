import jwt from 'jsonwebtoken';

const authM = (req, res, next) => {
    try {
        const authHeader = req.headers && req.headers.authorization;
        if (!authHeader) return res.status(401).json({ message: 'Access denied: no token provided' });

        const parts = authHeader.split(' ');
        if (parts.length !== 2) return res.status(401).json({ message: 'Invalid authorization header format' });

        const token = parts[1];
        if (!token) return res.status(401).json({ message: 'Access denied: token missing' });

    const secret = process.env.JWT_SECRET || process.env['JWT-SECRET'] || 'dev_jwt_secret';
    if (!process.env.JWT_SECRET && !process.env['JWT-SECRET']) console.warn('WARNING: using fallback JWT secret for token verification (dev only)');

    const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('authM error:', error.message);
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

export default authM;