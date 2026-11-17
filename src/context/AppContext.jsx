import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Wishlist state
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('aura_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Quote cart state
  const [quoteItems, setQuoteItems] = useState(() => {
    try {
      const saved = localStorage.getItem('aura_quote_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals & Drawers
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [consultationPreFill, setConsultationPreFill] = useState(null);

  useEffect(() => {
    localStorage.setItem('aura_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('aura_quote_cart', JSON.stringify(quoteItems));
  }, [quoteItems]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const addToQuoteCart = (product, customizations = {}) => {
    setQuoteItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity = (updated[existingIndex].quantity || 1) + 1;
        return updated;
      } else {
        return [...prev, { ...product, quantity: 1, customizations }];
      }
    });
    setIsQuoteDrawerOpen(true);
  };

  const removeFromQuoteCart = (productId) => {
    setQuoteItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuoteQuantity = (productId, delta) => {
    setQuoteItems((prev) =>
      prev
        .map((item) => {
          if (item.id === productId) {
            const newQty = (item.quantity || 1) + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearQuoteCart = () => setQuoteItems([]);

  const openConsultation = (prefillData = null) => {
    setConsultationPreFill(prefillData);
    setIsConsultationModalOpen(true);
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isInWishlist,
        quoteItems,
        addToQuoteCart,
        removeFromQuoteCart,
        updateQuoteQuantity,
        clearQuoteCart,
        isQuoteDrawerOpen,
        setIsQuoteDrawerOpen,
        isWishlistDrawerOpen,
        setIsWishlistDrawerOpen,
        isConsultationModalOpen,
        setIsConsultationModalOpen,
        openConsultation,
        consultationPreFill,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

