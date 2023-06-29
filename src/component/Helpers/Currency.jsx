const Currency = ({ price }) => {
    return Intl.NumberFormat("en-IN",
        {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0
        }).format(Math.trunc(price));


}

export default Currency;
