import React, { useState, useMemo } from 'react';
import SEO from '../components/SEO';
import { PRODUCTS } from '../constants';
import { Brand } from '../types';
import { Search, Filter, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Catalog: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState<string | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<string | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { t } = useLanguage();

  // Derive unique categories from products
  const categories = useMemo(() => {
    const cats = new Set(PRODUCTS.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const brands = ['All', ...Object.values(Brand)];

  // Filter products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchBrand && matchCategory && matchSearch;
    });
  }, [selectedBrand, selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO pageKey="catalog" />

      {/* Header */}
      <div className="bg-teal-600 text-white py-16 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-display font-bold mb-6 tracking-tight">{t.catalog.title}</h1>
          <p className="text-sm sm:text-base xl:text-lg text-teal-100 text-justify">{t.catalog.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar Filters (Desktop) & Mobile Toggle */}
          <div className="w-full lg:w-1/4">

            <div className="flex justify-between items-center lg:hidden mb-4">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm text-corail-700 font-semibold"
                >
                  <Filter size={18} />
                  <span>{t.catalog.filters}</span>
                </button>
                <span className="text-corail-300 text-sm">{filteredProducts.length} {t.catalog.results}</span>
            </div>

              <div className={`lg:block ${isFilterOpen ? 'block' : 'hidden'} bg-white p-6 rounded-xl shadow-md space-y-8 sticky top-24`}>
              {/* Search */}
              <div>
                <h3 className="font-bold text-corail-900 mb-3">{t.catalog.search}</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-corail-300" size={18} />
                  <input
                    type="text"
                    placeholder={t.catalog.searchPlaceholder}
                    className="w-full pl-10 pr-4 py-2 border border-corail-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Brand Filter */}
              <div>
                <h3 className="font-bold text-corail-900 mb-3">{t.catalog.brands}</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center space-x-2 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${selectedBrand === brand ? 'border-teal-500' : 'border-corail-200 group-hover:border-teal-400'}`}>
                        {selectedBrand === brand && <div className="w-2 h-2 rounded-full bg-teal-500"></div>}
                      </div>
                      <input
                        type="radio"
                        name="brand"
                        className="hidden"
                        checked={selectedBrand === brand}
                        onChange={() => setSelectedBrand(brand)}
                      />
                      <span className={`text-sm ${selectedBrand === brand ? 'text-teal-700 font-semibold' : 'text-corail-400 group-hover:text-corail-600'}`}>{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="font-bold text-corail-900 mb-3">{t.catalog.categories}</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center space-x-2 cursor-pointer group">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${selectedCategory === cat ? 'bg-teal-500 border-teal-500' : 'border-corail-200 bg-white group-hover:border-teal-400'}`}>
                        {selectedCategory === cat && <div className="w-2 h-2 bg-white"></div>}
                      </div>
                      <input
                        type="radio"
                        name="category"
                        className="hidden"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                      />
                      <span className={`text-sm ${selectedCategory === cat ? 'text-teal-700 font-semibold' : 'text-corail-400 group-hover:text-corail-600'}`}>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedBrand !== 'All' || selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedBrand('All');
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="w-full flex items-center justify-center space-x-2 text-sm text-red-500 font-semibold hover:text-red-600 transition-colors"
                >
                  <X size={16} />
                  <span>{t.catalog.reset}</span>
                </button>
              )}
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="hidden lg:flex justify-between items-center mb-6">
              <h2 className="text-2xl font-display font-bold text-corail-900">
                {selectedBrand === 'All' ? t.catalog.allProducts : selectedBrand}
                {selectedCategory !== 'All' && <span className="text-corail-300 font-normal"> / {selectedCategory}</span>}
              </h2>
              <span className="text-corail-400 text-sm font-medium bg-white px-3 py-1 rounded-full shadow-sm">{filteredProducts.length} {t.catalog.itemsFound}</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-corail-100 group flex flex-col">
                    {/* Image Placeholder */}
                    <div className="h-48 bg-corail-50 relative overflow-hidden flex items-center justify-center">
                      <div className="text-corail-200 font-display font-bold text-4xl opacity-20 transform -rotate-12 select-none">
                        {product.brand}
                      </div>
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-teal-600 uppercase tracking-wider">
                        {product.category}
                      </div>
                    </div>

                    <div className="p-5 flex-grow flex flex-col">
                      <div className="text-xs font-bold text-corail-500 mb-1 uppercase tracking-wide">{product.brand}</div>
                      <h3 className="text-lg font-bold text-corail-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">{product.name}</h3>

                      <div className="mt-auto">
                        <div className="space-y-1 mb-4">
                          {product.details.map((detail, i) => (
                            <div key={i} className="flex items-center text-sm text-corail-400">
                              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                              {detail}
                            </div>
                          ))}
                        </div>
                        <button className="w-full py-2 bg-corail-50 hover:bg-corail-100 text-corail-700 font-semibold rounded-lg text-sm transition-colors">
                          {t.catalog.viewDetails}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-12 text-center shadow-sm">
                <div className="text-corail-200 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-corail-900 mb-2">{t.catalog.noProducts}</h3>
                <p className="text-corail-300 text-justify">{t.catalog.noProductsText}</p>
                <button
                  onClick={() => {
                    setSelectedBrand('All');
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="mt-6 px-6 py-2 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition-colors"
                >
                  {t.catalog.clearFilters}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;