//aqui configuraremos primer slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  emial: "",
  age: "",
};

/* return this.getUserDTO({ 
userId:result.dataValues.userId,
userName: result.dataValues.userName,
password: result.dataValues.password,
name: result.dataValues.name,
lastName: result.dataValues.lastName,
age: result.dataValues.age,
createdAt: result.dataValues.createdAt 
}) */

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    userName: null,
    name: null,
    lastName: null,
    age: null,
    createdAt: null,
  },
  reducers: {
    ///me escuchas?
    setCurrentUser: (state, action) => {
      const { userId, userName, name, lastName, age, createdAt } =
        action.payload;
      (state.userId = userId),
        (state.userName = userName),
        (state.name = name),
        (state.lastName = lastName),
        (state.age = age),
        (state.createdAt = createdAt);
    },
  },
});
//
export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
