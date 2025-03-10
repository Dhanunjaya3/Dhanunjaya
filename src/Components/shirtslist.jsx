import { shirts } from '../Data/shirts';
import PrewButtons from './buttons/prewButtons';
import CartButton from './buttons/cartButton';

const ShirtsList = () => {
    return (
        <div style={{display: 'flex', gap: '20px', justifyContent: 'center'}}>
            {
                shirts.map(shirt => {
                    return(
                        <div>
                            <img src={shirt.img} alt="images"  style={{width: '200px',height:'300px',}}/>
                            <h3> Brand: {shirt.brandName}</h3>
                            <h3>Size: {shirt.size}</h3>
                            <h2>price: {shirt.price}</h2>
                            <div style={{display: 'flex', gap: '10px'}}>
                                <CartButton shit={shirt.brandName} />
                                <PrewButtons />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ShirtsList




