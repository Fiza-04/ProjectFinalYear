import { createState, useState } from '@hookstate/core';
export const usernameState = createState({
    email:"",
    id:""
});

export const taskListState = createState([])