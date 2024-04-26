document.querySelector('#tip-form').onchange = function(){

  var bill = Number(document.getElementById('billTotal').value);
  var tip = document.getElementById('tipInput').value;
  document.getElementById('tipOutput').innerHTML = `${tip}%`;
  var tipValue = bill * (tip/100);
  var finalBill = bill + tipValue;
  var tipAmount = document.querySelector('#tipAmount');
  var totalBillWithTip = document.querySelector('#totalBillWithTip');

  tipAmount.value = tipValue.toFixed(2);
  totalBillWithTip.value = finalBill.toFixed(2);

  // Show Results
  document.getElementById('results').style.display='block';

  // Display message based on tip percentage
  var tipMessage = '';
  if (tip < 10) {
    tipMessage = 'Wow, you are cheap !';
  } else if (tip >= 10 && tip < 20) {
    tipMessage = 'That\'s a decent tip!';
  } else {
    tipMessage = 'Wow, big money spender!';
  }

  document.getElementById('tipMessage').innerHTML = tipMessage; 
}
