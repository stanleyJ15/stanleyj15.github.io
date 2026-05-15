const today = new Date();
document.getElementById('inv-date').value = today.toISOString().split('T')[0];
const due = new Date(today);
due.setDate(due.getDate() + 30);
document.getElementById('inv-due').value = due.toISOString().split('T')[0];

function calculate() {
  const rows = document.querySelectorAll('#items-body tr'); let subtotal = 0;
  rows.forEach(function(row) {
    const inputs = row.querySelectorAll('input[type="number"]');
    const qty = parseFloat(inputs[0].value) || 0;
   const price = parseFloat(inputs[1].value) || 0;
   const total = qty * price;
    row.querySelector('.line-total').textContent = '$' + total.toFixed(2);
    subtotal += total;
  });
  const discountPct = parseFloat(document.getElementById('discount').value) || 0;
  const taxPct = parseFloat(document.getElementById('tax').value) || 0;
  const discounted = subtotal * (1 - discountPct / 100);
  const taxAmount = discounted * (taxPct / 100);
  const grand = discounted + taxAmount;
  document.getElementById('subtotal').textContent    = '$' + subtotal.toFixed(2);
  document.getElementById('tax-amount').textContent  = '$' + taxAmount.toFixed(2);
  document.getElementById('grand-total').textContent = '$' + grand.toFixed(2);
}

function resetForm() {
  if (!confirm('Reset all fields? This will clear everything.')) return;
  document.getElementById('client-name').value = '';
   document.getElementById('client-email').value = '';
  document.getElementById('client-phone').value = '';
  document.getElementById('client-address').value = '';
  document.getElementById('campaign').value = '';
  document.getElementById('campaign-period').value = '';
  document.getElementById('campaign-notes').value  = '';
  document.getElementById('discount').value = '0';
  document.getElementById('tax').value = '8.875';
  const defaults = [
{ qty: 1, price: 75.00 },
   { qty: 1, price: 50.00 },
    { qty: 1, price: 40.00 },
    { qty: 1, price: 25.00 },
  ];
  document.querySelectorAll('#items-body tr').forEach(function(row, i) {
    const inputs = row.querySelectorAll('input[type="number"]');
    inputs[0].value = defaults[i].qty;
    inputs[1].value = defaults[i].price;
       });
  calculate();
}

calculate();


function addRow(item = {}) {
  const tbody = document.getElementById('items-body');
  const tr = document.createElement('tr');

  tr.innerHTML = `
    <td>
      <input type="text" placeholder="Ad package or service description"
        value="${item.desc || ''}" oninput="calculate()" /> </td>
    <td>
        <input type="text" placeholder="e.g. Homepage"
        value="${item.placement || ''}" /> </td>
    <td> <input type="number" min="0" value="${item.qty ?? 1}" oninput="calculate()" /> </td>
    <td> <input type="number" min="0" step="0.01" value="${item.price ?? ''}"
     placeholder="0.00" oninput="calculate()" /> </td>
    <td class="line-total">$0.00</td> 
    <td> <button class="remove-btn" onclick="removeRow(this)" title="Remove row">✕</button> </td>
  `;

  tbody.appendChild(tr);
  calculate();
}

function removeRow(btn) {
  btn.closest('tr').remove();
  calculate();
}



