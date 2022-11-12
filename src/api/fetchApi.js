export const fatchApi = (results, types) => {
    console.log(results)
    return `https://pixabay.com/api/?q=${results}&key=31270833-ff93f03ff6a4810e881c1739f&image_type=${types}&pretty=true`
}

//  ;`https://pixabay.com/api/?q=${searchItem}&key=31270833-ff93f03ff6a4810e881c1739f&image_type=${types}&pretty=true`
