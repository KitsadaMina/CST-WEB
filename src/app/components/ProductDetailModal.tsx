
import React from 'react';
interface Props {
    onClose: () => void;
    product: any;
}
const ProductDetailModal: React.FC<Props> = (props) => {
    const { product } = props;
    return (
        <div
            className="modal fade show overlay-soft-gray-600"
            style={{ display: 'block' }}
        >
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content" style={{ borderRadius: '3px', boxShadow: '0 0.25rem 0.5rem rgb(36 38 43 / 50%)' }}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{product.productName}</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => props.onClose()}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{ maxHeight: '600px', overflow: 'auto' }}>
                        <div className="row">
                            <div className="col-5">
                                <img className="card-img-top" src={product.productImg} alt="No display" />
                            </div>
                            <div className="col-7">
                                <div className="product-card-price mb-2">
                                    {'ราคา '}
                                    <span className="h4 product-card-price">{product.price && new Intl.NumberFormat().format(product.price)}.-</span>
                                </div>
                                <p style={{ whiteSpace: 'pre-wrap', lineHeight: 2 }}>
                                    {product.detail}
                                </p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetailModal;