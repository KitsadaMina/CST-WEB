import React, { useState } from 'react';
import ProductDetailModal from './ProductDetailModal';
import categories from './categories.json';
import products from './products.json';

export const ProductList = () => {
    const [categoriesSelected, setCategoriesSelected] = useState<number[]>([]);
    const [showProductDetailModal, setshowProductDetailModal] = useState<{ isShow: boolean, product?: any }>({ isShow: false });

    const handleChangeCategories = (checked: boolean, categoryId: number) => {
        const category = categories.filter(ctg => ctg.categoryId === categoryId)[0];
        const subCategoryIds = categories.filter(ctg => ctg.parent === categoryId).map(ctg => ctg.categoryId);
        if (checked) {
            const newCategoriesSelected = [...categoriesSelected];
            newCategoriesSelected.push(categoryId);
            if (category.parent) {
                newCategoriesSelected.push(category.parent);
            }
            subCategoryIds.forEach(id => newCategoriesSelected.push(id));
            setCategoriesSelected(newCategoriesSelected);
        } else {
            let newCategoriesSelected = [...categoriesSelected
                .filter(id => !subCategoryIds.includes(id) && id !== categoryId)
            ];
            const parentCategory = categories.filter(ctg => ctg.categoryId === category.parent)[0];
            if (parentCategory) {
                const subCategoryIds2 = categories.filter(ctg => ctg.parent === parentCategory.categoryId)
                    .map(ctg => ctg.categoryId);
                if (newCategoriesSelected.filter(id => subCategoryIds2.includes(id)).length === 0) {
                    newCategoriesSelected = newCategoriesSelected.filter(id => id !== parentCategory.categoryId);
                }
            }
            console.log(parentCategory);

            setCategoriesSelected(newCategoriesSelected);
        }


    }

    const filterProducts = products.filter(p => categoriesSelected.includes(p.categoryId) || categoriesSelected.length === 0);
    return (
        <section className="section section-lg pt-4 pb-4">
            <div className="container" style={{ maxWidth: '1176px' }}>
                <div className="row">
                    <div className="col-3">
                        <ul className="navbar-nav">
                            <h6 className="navbar-heading ">
                                <span className="docs-normal">หมวดหมู่สินค้า</span>
                            </h6>
                            {categories.filter(ctg => ctg.parent ? false : true).map(ctg => {
                                const subCategories = categories.filter(ctg2 => ctg2.parent === ctg.categoryId);
                                return (
                                    <li className="nav-item">
                                        <label className="nav-link  pt-2 pb-2">
                                            <input
                                                type="checkbox"
                                                className="mr-1"
                                                onChange={(event) => handleChangeCategories(event.target.checked, ctg.categoryId)}
                                                checked={categoriesSelected.includes(ctg.categoryId)}
                                            />
                                            <span>{ctg.categoryName}</span>
                                        </label>
                                        {subCategories &&
                                            <div className="collapse show pl-3" id="navbar-dashboards">
                                                <ul className="nav nav-sm flex-column">
                                                    {subCategories.map(ctg2 =>
                                                        <li className="nav-item">
                                                            <label className="nav-link pt-2 pb-2">
                                                                <input
                                                                    type="checkbox"
                                                                    className="mr-1"
                                                                    onChange={(event) => handleChangeCategories(event.target.checked, ctg2.categoryId)}
                                                                    checked={categoriesSelected.includes(ctg2.categoryId)}
                                                                />
                                                                <span>{ctg2.categoryName}</span>
                                                            </label>
                                                        </li>
                                                    )}
                                                </ul>
                                            </div>
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-9">
                        <div className="row mb-2 pl-2">
                            <div className="col">
                                <h2 className="h4">รายการสินค้า</h2>
                            </div>
                        </div>
                        <div className="row">
                            {filterProducts.map(prd =>
                                <div
                                    key={prd.productId}
                                    className="col-12 col-sm-6 col-lg-4"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setshowProductDetailModal({ isShow: true, product: prd })}
                                >
                                    <div className="card bg-white mb-4">
                                        <img className="card-img-top" src={prd.productImg} alt="No display" />
                                        <div className="px-3 px-lg-4 py-4">
                                            <div className="font-weight-normal text-primary product-card-name">
                                                {prd.productName}
                                            </div>
                                            <div className="product-card-price">
                                                {prd.price && new Intl.NumberFormat().format(prd.price)}.-
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {filterProducts && filterProducts.length === 0 &&
                                <div className="col pl-4">ไม่พบสินค้าที่ค้นหา</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {showProductDetailModal.isShow && showProductDetailModal.product &&
                <ProductDetailModal
                    onClose={() => setshowProductDetailModal({ isShow: false })}
                    product={showProductDetailModal.product}
                />
            }
        </section>
    )
}