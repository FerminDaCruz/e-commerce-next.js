export const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}` // Para producción en Vercel
    : "http://localhost:3000";
