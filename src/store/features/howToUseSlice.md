### 切片中怎么互相使用数据
* https://redux.js.org/faq/reducers#how-do-i-share-state-between-two-reducers-do-i-have-to-use-combinereducers

---

组件中使用的主要是reducers定义的action creators，以及通过useSelector选择Redux store中的状态数据。extraReducers主要用于在Slice中处理其他Slice的action，对于组件来说，不需要直接关心它。

在组件中，你可以通过useDispatch来派发action，并通过useSelector选择需要的状态数据，这样就能与Redux store进行交互。

以下是一个示例，展示如何在组件中使用extraReducers处理来自counterSlice的action：

counterSlice.js
```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
userSlice.js
javascript
Copy code
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { increment, decrement } from './counterSlice';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(increment, (state) => {
        // 响应counterSlice中的increment action
        console.log('Increment action is dispatched');
        // 这里可以处理一些与increment action相关的逻辑
      })
      .addCase(decrement, (state) => {
        // 响应counterSlice中的decrement action
        console.log('Decrement action is dispatched');
        // 这里可以处理一些与decrement action相关的逻辑
      });
  },
});

export default userSlice.reducer;
```
在组件中使用useDispatch和useSelector：
```javascript
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

const MyComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);

  const handleIncrement = () => {
    dispatch(increment()); // 派发increment action
  };

  const handleDecrement = () => {
    dispatch(decrement()); // 派发decrement action
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```

在上述示例中，我们在组件中使用了useDispatch来派发increment和decrement action。而extraReducers中的处理逻辑是在Redux store内部自动执行的，不需要在组件中手动处理。组件只需关注reducers定义的action creators和使用useSelector选择需要的状态数据即可。