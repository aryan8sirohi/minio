// ./utils/get-stripejs.ts
import { Stripe, loadStripe } from '@stripe/stripe-js';

let stripePromise = null;

export default function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
}

