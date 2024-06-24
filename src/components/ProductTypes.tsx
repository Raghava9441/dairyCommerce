import { CategoryAPI } from "@/api/CategoryAPI"
import { ProductAPI } from "@/api/productAPI"
import { useEffect } from "react"

type Props = {}

function ProductTypes({ }: Props) {

    useEffect(() => {
        CategoryAPI.getAllCategories(1, 10, true).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        }).finally(() => { })

        return () => { }
    }, [])

    return (
        <div>ProductTypes</div>
    )
}

export default ProductTypes