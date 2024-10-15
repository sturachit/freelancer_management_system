import React from 'react';

const PaymentList = ({ payments, markPaymentAsPaid }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-2">Payments</h2>
      {payments.length === 0 ? (
        <p>No payments available.</p>
      ) : (
        <ul>
          {payments.map((payment) => (
            <li key={payment.id} className="flex justify-between items-center mb-2">
              <span>
                Amount: ${payment.amount} - Status: {payment.status}
              </span>
              {payment.status === 'Unpaid' && (
                <button
                  onClick={() => markPaymentAsPaid(payment.id)}
                  className="ml-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Mark as Paid
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentList;
