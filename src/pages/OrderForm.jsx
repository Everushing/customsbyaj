import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

function OrderForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Implement your payment handling logic here using Stripe API
    // Example: Create a payment intent and confirm payment
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
}

export default OrderForm;
