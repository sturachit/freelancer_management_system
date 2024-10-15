import React, { useState } from 'react';

const PaymentForm = ({ addPayment }) => {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Unpaid');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      addPayment({ id: Date.now(), amount: parseFloat(amount), status });
      setAmount('');
      setStatus('Unpaid');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 rounded mr-2"
        required
      />
      <button
        type="submit"
        className="px-4 py-2 mt-3 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Add Payment
      </button>
    </form>
  );
};

export default PaymentForm;
