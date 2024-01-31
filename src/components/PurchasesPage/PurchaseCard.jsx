const PurchaseCard = ({ purchase }) => {
  return (
    <article className="product">
        <header className="product__header">
            <img className="product__img" src={purchase?.product?.images?.[0].url} alt="" />
        </header>
        <h3 className="product__name">{purchase.product?.title}</h3>
        <span className="product__price">{purchase.quantity}</span>
        <div className="product__price">{purchase.product?.price}</div>
    </article>
  )
}

export default PurchaseCard