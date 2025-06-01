import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Types
interface Address {
  firstName: string;
  lastName: string;
  streetAddress: string;
  aptNumber?: string;
  state: string;
  zip: string;
}

interface Order {
  id: string;
  productName: string;
  price: number;
  shippingAddress: Address;
  status: 'pending' | 'confirmed' | 'shipped';
  createdAt: Date;
}

// In-memory storage (replace with database in production)
let orders: Order[] = [];

// Routes
app.post('/api/orders', (req: Request, res: Response) => {
  try {
    const { productName, price, shippingAddress } = req.body;

    const newOrder: Order = {
      id: Date.now().toString(),
      productName,
      price,
      shippingAddress,
      status: 'pending',
      createdAt: new Date()
    };

    orders.push(newOrder);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error: 'Invalid order data' });
  }
});

app.get('/api/orders/:id', (req: Request, res: Response) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  res.json(order);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 