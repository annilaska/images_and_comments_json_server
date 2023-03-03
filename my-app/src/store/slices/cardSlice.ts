import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { elementsAPI } from '../../api/Api'


export const fetchCardThunk = createAsyncThunk(
    'card/fetchCardThunk',
    async function(imageId) {
        const data = await elementsAPI.getCard(imageId)
        return data
    }
)

export const addCommentThunk = createAsyncThunk(
    'card/addCommentThunk',
    async function(cardData) {
        const data = await elementsAPI.addComments(cardData)
        return data
    }
)

const initialState = {
    id: null as null | number,
    imageUrl: null as null | string,
    comments: [] as [] | Array<string>,
    inProgress: false
}

type ActionsType = typeof initialState

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCardThunk.pending, (state) => {
                state.inProgress = true
            })
            .addCase(fetchCardThunk.fulfilled, (state, action: PayloadAction<ActionsType>) => {
                state.inProgress = false
                state.id = action.payload.id
                state.imageUrl = action.payload.imageUrl
                state.comments = action.payload.comments
            })
            .addCase(addCommentThunk.pending, (state) => {
                state.inProgress = true
            })
            .addCase(addCommentThunk.fulfilled, (state, action: PayloadAction<ActionsType>) => {
                state.inProgress = false
                state.id = action.payload.id
                state.imageUrl = action.payload.imageUrl
                state.comments = action.payload.comments
            })
    }
})

export default cardSlice.reducer
