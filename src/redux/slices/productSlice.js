import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock data for products (in a real app, this would come from an API)
const initialProducts = [
  {
    id: 1,
    name: "Oversized Graphic Tee",
    price: 1499,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Men's Fashion",
    isNew: true,
  },
  {
    id: 2,
    name: "High-Waisted Wide Leg Jeans",
    price: 2999,
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Women's Fashion",
    isNew: true,
  },
  {
    id: 3,
    name: "Platform Sneakers",
    price: 3999,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Footwear",
    isNew: false,
  },
  {
    id: 4,
    name: "Minimalist Watch",
    price: 4499,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Accessories",
    isNew: false,
  },
  {
    id: 5,
    name: "Hydrating Facial Serum",
    price: 1299,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Skin & Beauty",
    isNew: true,
  },
  // Additional Men's Fashion products
  {
    id: 6,
    name: "Slim Fit Chinos",
    price: 2499,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Men's Fashion",
    isNew: false,
  },
  {
    id: 7,
    name: "Denim Jacket",
    price: 3499,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Men's Fashion",
    isNew: true,
  },
  {
    id: 8,
    name: "Striped Polo Shirt",
    price: 1799,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Men's Fashion",
    isNew: false,
  },
  {
    id: 9,
    name: "Casual Blazer",
    price: 4999,
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Men's Fashion",
    isNew: true,
  },
  {
    id: 10,
    name: "Cargo Shorts",
    price: 1999,
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Men's Fashion",
    isNew: false,
  },
  {
    id: 11,
    name: "Hooded Sweatshirt",
    price: 2299,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Men's Fashion",
    isNew: true,
  },
  {
    id: 12,
    name: "Linen Shirt",
    price: 1899,
    image: "https://images.unsplash.com/photo-1604695573706-53170668f6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Men's Fashion",
    isNew: false,
  }
];

// Async thunk for fetching products (simulated API call)
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // For now, we'll just return our mock data after a short delay
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(initialProducts);
        }, 500);
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetching a single product by ID
export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // For now, we'll just filter our mock data
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const product = initialProducts.find(p => p.id === parseInt(id));
          if (product) {
            resolve(product);
          } else {
            reject(new Error('Product not found'));
          }
        }, 500);
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    featuredItems: [],
    currentProduct: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
        // Set featured items (for example, new arrivals)
        state.featuredItems = action.payload.filter(product => product.isNew);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
