import './PayFast.scss';

const PayFast = () => (
  <div className="payFast">
    <form action="https://www.payfast.co.za/eng/process" method="post">
      <input type="hidden" name="merchant_id" value="10000100" />
      <input type="hidden" name="merchant_key" value="46f0cd694581a" />
      <input type="hidden" name="amount" value="100.00" />
      <input type="hidden" name="item_name" value="Test Product" />
      <input type="submit" />
    </form>
  </div>
);

export default PayFast;
