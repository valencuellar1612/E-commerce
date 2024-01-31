import { useEffect } from "react"
import useFetch from "../hook/useFetch"
import getConfifToken from "../utils/getTokenConfig"
import PurchaseCard from "../components/PurchasesPage/PurchaseCard"

const PurchasesPage = () => {

    const [ purchases, getPurchases] =  useFetch()

    useEffect(() => {
        const url = 'purchases'
        getPurchases(url, getConfifToken())
    }, [])
    console.log(purchases);

  return (
    <div>
        <h2>My purchases</h2>
        <div className="product-container">
            {
                purchases?.map(infoPurchase => (
                    <PurchaseCard
                    key={infoPurchase.id}
                    purchase={infoPurchase}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default PurchasesPage