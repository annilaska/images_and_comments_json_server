import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { elementsAPI } from '../../api/Api'


type imageType = {
    id: number | null;
    imageUrl: string | null;
    comments: Array<string> 
}

const initialState = {
    imagesList: [] as [] | imageType[],
    isloading: false,
    error: null as null | string
}

type initialStateType = typeof initialState


export const fetchImagesThunk = createAsyncThunk<imageType[], void, {state: initialStateType}>(
    'images/fetchImagesThunk',
    async function() {
        const data = await elementsAPI.getImagesList()
        return data 
    }
)


const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchImagesThunk.pending, (state) => {
                state.isloading = true
            })
            .addCase(fetchImagesThunk.fulfilled, (state, action) => {
                state.isloading = false
                state.imagesList = action.payload
            })

    }
})


export default imagesSlice.reducer




